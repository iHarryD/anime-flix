import VideoUtilitiesBar from "../videoUtilitiesBar/VideoUtilitiesBar";
import ved from "../../assets/temp.mp4";
import { StyledSingleVideoContainer } from "../styled/SingleVideoComponents.styled";
import VideoDescription from "../videoDescription/VideoDescription";

export default function SingleVideo() {
  return (
    <StyledSingleVideoContainer>
      <iframe src={ved} title="none"></iframe>
      <div className="--has-padding">
        <VideoUtilitiesBar />
        <VideoDescription />
      </div>
    </StyledSingleVideoContainer>
  );
}
