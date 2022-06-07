import VideoUtilityBar from "../videoUtilityBar/VideoUtilityBar";
import { StyledSingleVideoContainer } from "../styled/SingleVideoComponents.styled";
import VideoDescription from "../videoDescription/VideoDescription";
import { VideoHeading } from "../styled/Cards.styled";
import { singleVideoProps } from "../../interfaces/singleVideo.interface";

export default function SingleVideo({
  url,
  title,
  likes,
  dislikes,
  videoID,
  views,
  uploadedOn,
  bookmarkStatus,
  channel,
  description,
  playlistButtonHandler,
}: singleVideoProps) {
  return (
    <StyledSingleVideoContainer>
      <iframe src={url} title="none"></iframe>
      <div className="--verticle-flex --has-gap --has-padding">
        <VideoHeading>{title}</VideoHeading>
        <VideoUtilityBar
          videoID={videoID}
          likes={likes}
          dislikes={dislikes}
          bookmarkStatus={bookmarkStatus}
          playlistButtonHandler={playlistButtonHandler}
        />
        <VideoDescription
          views={views}
          uploadDate={uploadedOn}
          channel={channel}
          description={description}
        />
      </div>
    </StyledSingleVideoContainer>
  );
}
