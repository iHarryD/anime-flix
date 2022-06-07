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

export default function VideoUtilityBar({
  videoID,
  likeCount,
  dislikeCount,
  likeStatus,
  dislikeStatus,
  bookmarkStatus,
  playlistButtonHandler,
}: utilityBarProps) {
  const utilityButtonVariant = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
    },
  };

  function handleRemoveLikeVideo(videoID: string) {
    removeLike(videoID);
  }

  function handleDislikeVideo(videoID: string) {
    dislikeVideo(videoID);
  }

  function handleRemoveDislikeVideo(videoID: string) {
    removeDislike(videoID);
  }

  function handleLikeVideo(videoID: string) {
    likeVideo(videoID);
  }

  function handleAddToWatchLater(videoID: string) {}

  function handleRemoveFromWatchLater(videoID: string) {}

  return (
    <CenteredFlexJustifyBetween>
      <ButtonPairContainer>
        <ButtonWithTextContainer>
          {likeStatus ? (
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
          <span>{likeCount} likes</span>
        </ButtonWithTextContainer>
        <ButtonWithTextContainer>
          {dislikeStatus ? (
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
          <span>{dislikeCount} dislikes</span>
        </ButtonWithTextContainer>
      </ButtonPairContainer>
      <ButtonPairContainer>
        {bookmarkStatus ? (
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
          onClick={() => playlistButtonHandler()}
        >
          <FontAwesomeIcon icon={faList} />
        </VideoUtilityButton>
      </ButtonPairContainer>
    </CenteredFlexJustifyBetween>
  );
}
