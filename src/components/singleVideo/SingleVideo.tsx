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
  views,
  uploadDate,
  playlists,
  bookmarkStatus,
  channel,
  description,
}: singleVideoProps) {
  return (
    <StyledSingleVideoContainer>
      <iframe src={url} title="none"></iframe>
      <div className="--verticle-flex --has-gap --has-padding">
        <VideoHeading>{title}</VideoHeading>
        <VideoUtilityBar
          likes={likes}
          dislikes={dislikes}
          bookmarkStatus={bookmarkStatus}
          playlists={playlists}
        />
        <VideoDescription
          views={views}
          uploadDate={uploadDate}
          channel={channel}
          description={description}
        />
      </div>
    </StyledSingleVideoContainer>
  );
}
