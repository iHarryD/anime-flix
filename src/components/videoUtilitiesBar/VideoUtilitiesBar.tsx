import {
  faBookmark,
  faList,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ButtonWithTextContainer,
  ButtonPairContainer,
  StyledVideoUtilitiesBar,
  VideoUtilityButton,
} from "../styled/SingleVideoComponents.styled";

export default function VideoUtilitiesBar() {
  const utilityButtonVariant = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
    },
  };
  return (
    <StyledVideoUtilitiesBar>
      <ButtonPairContainer>
        <ButtonWithTextContainer>
          <VideoUtilityButton
            variants={utilityButtonVariant}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </VideoUtilityButton>
          <span>370 likes</span>
        </ButtonWithTextContainer>
        <ButtonWithTextContainer>
          <VideoUtilityButton
            variants={utilityButtonVariant}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <FontAwesomeIcon icon={faThumbsDown} />
          </VideoUtilityButton>
          <span>370 likes</span>
        </ButtonWithTextContainer>
      </ButtonPairContainer>
      <ButtonPairContainer>
        <VideoUtilityButton
          variants={utilityButtonVariant}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FontAwesomeIcon icon={faBookmark} />
        </VideoUtilityButton>
        <VideoUtilityButton
          variants={utilityButtonVariant}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FontAwesomeIcon icon={faList} />
        </VideoUtilityButton>
      </ButtonPairContainer>
    </StyledVideoUtilitiesBar>
  );
}
