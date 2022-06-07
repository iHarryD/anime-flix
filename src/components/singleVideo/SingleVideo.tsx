import VideoUtilityBar from "../videoUtilityBar/VideoUtilityBar";
import { StyledSingleVideoContainer } from "../styled/SingleVideoComponents.styled";
import VideoDescription from "../videoDescription/VideoDescription";
import { VideoHeading } from "../styled/Cards.styled";
import { singleVideoProps } from "../../interfaces/singleVideo.interface";

export default function SingleVideo({
  url,
  title,
  likeCount,
  dislikeCount,
  likeStatus,
  dislikeStatus,
  videoID,
  viewCount,
  uploadedOn,
  watchLaterStatus,
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
          likeCount={likeCount}
          dislikeCount={dislikeCount}
          likeStatus={likeStatus}
          dislikeStatus={dislikeStatus}
          watchLaterStatus={watchLaterStatus}
          playlistButtonHandler={playlistButtonHandler}
        />
        <VideoDescription
          viewCount={viewCount}
          uploadDate={uploadedOn}
          channel={channel}
          description={description}
        />
      </div>
    </StyledSingleVideoContainer>
  );
}
