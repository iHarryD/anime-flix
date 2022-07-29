import { useState } from "react";
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
  DivWithDisplayNone,
} from "../../styled";
import {
  utilityBarProps,
  userDataActionTypes,
  singleVideoActionTypes,
} from "../../interfaces";
import {
  dislikeVideo,
  likeVideo,
  removeDislike,
  removeLike,
  addToWatchLater,
  removeFromWatchLater,
} from "../../services";
import { useUserData, useAuth } from "../../contexts";
import { PlaylistModal } from "../../components";
import { utilityButtonVariant } from "../../variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { getErrorMessage } from "../../helpers/getErrorMessage";

const youNeedToLoginMessage = "You need to login.";

export function VideoUtilityBar({
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
    if (userCredentials === null) return;
    singleVideoReducer({
      type: singleVideoActionTypes.REMOVE_LIKE,
      payload: { userID: userCredentials._id },
    });
    removeLike(videoID, undefined, (err) => {
      singleVideoReducer({
        type: singleVideoActionTypes.LIKE,
        payload: { userID: userCredentials._id },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleDislikeVideo(videoID: string) {
    if (userCredentials === null) {
      toast.error(youNeedToLoginMessage, toastEmitterConfig);
      return;
    }
    singleVideoReducer({
      type: singleVideoActionTypes.DISLIKE,
      payload: { userID: userCredentials._id },
    });
    dislikeVideo(videoID, undefined, (err) => {
      singleVideoReducer({
        type: singleVideoActionTypes.REMOVE_DISLIKE,
        payload: { userID: userCredentials._id },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleRemoveDislikeVideo(videoID: string) {
    if (userCredentials === null) return;
    singleVideoReducer({
      type: singleVideoActionTypes.REMOVE_DISLIKE,
      payload: { userID: userCredentials._id },
    });
    removeDislike(videoID, undefined, (err) => {
      singleVideoReducer({
        type: singleVideoActionTypes.DISLIKE,
        payload: { userID: userCredentials._id },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleLikeVideo(videoID: string) {
    if (userCredentials === null) {
      toast.error(youNeedToLoginMessage, toastEmitterConfig);
      return;
    }
    singleVideoReducer({
      type: singleVideoActionTypes.LIKE,
      payload: { userID: userCredentials._id },
    });
    likeVideo(videoID, undefined, (err) => {
      singleVideoReducer({
        type: singleVideoActionTypes.REMOVE_LIKE,
        payload: { userID: userCredentials._id },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleAddToWatchLater(videoID: string) {
    if (userCredentials === null) {
      toast.error(youNeedToLoginMessage, toastEmitterConfig);
      return;
    }
    userDataDispatcher({
      type: userDataActionTypes.ADD_TO_WATCHLATER,
      payload: { videoID },
    });
    addToWatchLater(videoID, undefined, (err) => {
      userDataDispatcher({
        type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
        payload: { videoID },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleRemoveFromWatchLater(videoID: string) {
    if (userCredentials === null) return;
    userDataDispatcher({
      type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
      payload: { videoID },
    });
    removeFromWatchLater(videoID, undefined, (err) => {
      userDataDispatcher({
        type: userDataActionTypes.ADD_TO_WATCHLATER,
        payload: { videoID },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  return (
    <>
      <DivWithDisplayNone>
        <ToastContainer />
      </DivWithDisplayNone>
      {isPlaylistModalActive && (
        <PlaylistModal
          videoID={videoID}
          closePlaylistModal={() => setIsPlaylistModalActive(false)}
        />
      )}
      <CenteredFlexJustifyBetween>
        <ButtonPairContainer>
          <ButtonWithTextContainer>
            {userCredentials && likes.includes(userCredentials._id) ? (
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
            {userCredentials && dislikes.includes(userCredentials._id) ? (
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
