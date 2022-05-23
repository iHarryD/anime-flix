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

interface utilityBarProps {
  likes: number;
  dislikes: number;
  bookmarkStatus: boolean;
  playlists: object[];
}

export default function VideoUtilityBar({
  likes,
  dislikes,
  bookmarkStatus,
  playlists,
}: utilityBarProps) {
  const utilityButtonVariant = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
    },
  };
  return (
    <CenteredFlexJustifyBetween>
      <ButtonPairContainer>
        <ButtonWithTextContainer>
          {false ? (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <FontAwesomeIcon icon={faSThumbsUp} />
            </VideoUtilityButton>
          ) : (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <FontAwesomeIcon icon={faRThumbsUp} />
            </VideoUtilityButton>
          )}
          <span>{likes} likes</span>
        </ButtonWithTextContainer>
        <ButtonWithTextContainer>
          {false ? (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <FontAwesomeIcon icon={faSThumbsDown} />
            </VideoUtilityButton>
          ) : (
            <VideoUtilityButton
              variants={utilityButtonVariant}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <FontAwesomeIcon icon={faRThumbsDown} />
            </VideoUtilityButton>
          )}
          <span>{dislikes} dislikes</span>
        </ButtonWithTextContainer>
      </ButtonPairContainer>
      <ButtonPairContainer>
        {bookmarkStatus ? (
          <VideoUtilityButton
            variants={utilityButtonVariant}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <FontAwesomeIcon icon={faSBookmark} />
          </VideoUtilityButton>
        ) : (
          <VideoUtilityButton
            variants={utilityButtonVariant}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <FontAwesomeIcon icon={faRBookmark} />
          </VideoUtilityButton>
        )}
        <VideoUtilityButton
          variants={utilityButtonVariant}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FontAwesomeIcon icon={faList} />
        </VideoUtilityButton>
      </ButtonPairContainer>
    </CenteredFlexJustifyBetween>
  );
}
