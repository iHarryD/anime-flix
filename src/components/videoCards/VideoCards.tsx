import {
  VerticleCardContainer,
  VideoCardTextContainer,
  VideoDuration,
  VideoHeading,
  VideoPreviewContainer,
  VideoPreviewOverlay,
  VideoUploadDate,
} from "../styled/Cards.styled";
import { Link } from "react-router-dom";

interface videoProps {
  url: string;
  title: string;
  videoID: string;
  uploadDate: Date;
}

export function VerticleVideoCard({
  url,
  title,
  videoID,
  uploadDate,
}: videoProps) {
  return (
    <VerticleCardContainer>
      <VideoPreviewContainer>
        <iframe
          title="Youtubr"
          width="unset"
          height="unset"
          src={`${url}`}
          frameBorder="0"
        ></iframe>
        <VideoPreviewOverlay>
          {false && <VideoDuration>{null}</VideoDuration>}
        </VideoPreviewOverlay>
      </VideoPreviewContainer>
      <VideoCardTextContainer>
        <Link to={`/watch/${videoID}`}>
          <VideoHeading title={title}>{title}</VideoHeading>
        </Link>
        <VideoUploadDate>
          {new Date(uploadDate).toLocaleDateString()}
        </VideoUploadDate>
      </VideoCardTextContainer>
    </VerticleCardContainer>
  );
}
