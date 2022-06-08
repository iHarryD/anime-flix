import {
  faBookmark as faSBookmark,
  faThumbsDown as faSThumbsDown,
  faThumbsUp as faSThumbsUp,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBookmark as faRBookmark,
  faThumbsDown as faRThumbsDown,
  faThumbsUp as faRThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonWithTextContainer,
  ButtonPairContainer,
  CenteredFlexJustifyBetween,
  VideoUtilityButton,
} from "../styled/SingleVideoComponents.styled";
import { utilityBarProps } from "../../interfaces/utilityBar.interface";
import {
  dislikeVideo,
  likeVideo,
  removeDislike,
  removeLike,
} from "../../services/videoServices";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../services/watchLaterServices";
import { useUserData } from "../../contexts/UserDataContext";
import { useAuth } from "../../contexts/authContext";
import { userDataActionTypes } from "../../interfaces/userContext.interface";
import { singleVideoActionTypes } from "../../interfaces/singleVideoReducer.interface";
import { useState } from "react";
import PlaylistModal from "../playlistModal/PlaylistModal";
import { utilityButtonVariant } from "../../variants/utilityButtonVariant";

export default function VideoUtilityBar({
  videoID,
  likes,
  dislikes,
  singleVideoReducer,
}: utilityBarProps) {
  const { userCredentials } = useAuth();
  const { userData, userDataDispatcher } = useUserData();
  const [isPlaylistModalActive, setIsPlaylistModalActive] =
    useState<boolean>(false);

  function handleRemoveLikeVideo(videoID: string) {
    singleVideoReducer({
      type: singleVideoActionTypes.REMOVE_LIKE,
      payload: { userID: userCredentials._id },
    });
    removeLike(videoID, undefined, (err) =>
      singleVideoReducer({
        type: singleVideoActionTypes.LIKE,
        payload: { userID: userCredentials._id },
      })
    );
  }

  function handleDislikeVideo(videoID: string) {
    singleVideoReducer({
      type: singleVideoActionTypes.DISLIKE,
      payload: { userID: userCredentials._id },
    });
    dislikeVideo(videoID, undefined, (err) =>
      singleVideoReducer({
        type: singleVideoActionTypes.REMOVE_DISLIKE,
        payload: { userID: userCredentials._id },
      })
    );
  }

  function handleRemoveDislikeVideo(videoID: string) {
    singleVideoReducer({
      type: singleVideoActionTypes.REMOVE_DISLIKE,
      payload: { userID: userCredentials._id },
    });
    removeDislike(videoID, undefined, (err) =>
      singleVideoReducer({
        type: singleVideoActionTypes.DISLIKE,
        payload: { userID: userCredentials._id },
      })
    );
  }

  function handleLikeVideo(videoID: string) {
    singleVideoReducer({
      type: singleVideoActionTypes.LIKE,
      payload: { userID: userCredentials._id },
    });
    likeVideo(videoID, undefined, (err) =>
      singleVideoReducer({
        type: singleVideoActionTypes.REMOVE_LIKE,
        payload: { userID: userCredentials._id },
      })
    );
  }

  function handleAddToWatchLater(videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.ADD_TO_WATCHLATER,
      payload: { videoID },
    });
    addToWatchLater(videoID, undefined, (err) =>
      userDataDispatcher({
        type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
        payload: { videoID },
      })
    );
  }

  function handleRemoveFromWatchLater(videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
      payload: { videoID },
    });
    removeFromWatchLater(videoID, undefined, (err) =>
      userDataDispatcher({
        type: userDataActionTypes.ADD_TO_WATCHLATER,
        payload: { videoID },
      })
    );
  }

  return (
    <>
      {isPlaylistModalActive && (
        <PlaylistModal
          videoID={videoID}
          closePlaylistModal={() => setIsPlaylistModalActive(false)}
        />
      )}
      <CenteredFlexJustifyBetween>
        <ButtonPairContainer>
          <ButtonWithTextContainer>
            {likes.includes(userCredentials._id) ? (
              <VideoUtilityButton
                variants={utilityButtonVariant}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => handleRemoveLikeVideo(videoID)}
              >
                <FontAwesomeIcon icon={faSThumbsUp} />
              </VideoUtilityButton>
            ) : (
              <VideoUtilityButton
                variants={utilityButtonVariant}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => handleLikeVideo(videoID)}
              >
                <FontAwesomeIcon icon={faRThumbsUp} />
              </VideoUtilityButton>
            )}
            <span>{likes.length} likes</span>
          </ButtonWithTextContainer>
          <ButtonWithTextContainer>
            {dislikes.includes(userCredentials._id) ? (
              <VideoUtilityButton
                variants={utilityButtonVariant}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => handleRemoveDislikeVideo(videoID)}
              >
                <FontAwesomeIcon icon={faSThumbsDown} />
              </VideoUtilityButton>
            ) : (
              <VideoUtilityButton
                variants={utilityButtonVariant}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={() => handleDislikeVideo(videoID)}
              >
                <FontAwesomeIcon icon={faRThumbsDown} />
              </VideoUtilityButton>
            )}
            <span>{dislikes.length} dislikes</span>
          </ButtonWithTextContainer>
        </ButtonPairContainer>
        <ButtonPairContainer>
          {userData.watchLater.includes(videoID) ? (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => handleRemoveFromWatchLater(videoID)}
            >
              <FontAwesomeIcon icon={faSBookmark} />
            </VideoUtilityButton>
          ) : (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => handleAddToWatchLater(videoID)}
            >
              <FontAwesomeIcon icon={faRBookmark} />
            </VideoUtilityButton>
          )}
          <VideoUtilityButton
            variants={utilityButtonVariant}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => setIsPlaylistModalActive(true)}
          >
            <FontAwesomeIcon icon={faList} />
          </VideoUtilityButton>
        </ButtonPairContainer>
      </CenteredFlexJustifyBetween>
    </>
  );
}
