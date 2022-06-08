import { Link } from "react-router-dom";
import {
  VerticleCardContainer,
  VideoCardTextContainer,
  VideoDuration,
  VideoHeading,
  VideoPreviewContainer,
  VideoPreviewOverlay,
  VideoUploadDate,
} from "../../styled";
import { videoCardInterface } from "../../interfaces";

export function VerticleVideoCard({
  url,
  title,
  _id,
  uploadedOn,
}: videoCardInterface) {
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
        <Link to={`/watch/${_id}`}>
          <VideoHeading title={title}>{title}</VideoHeading>
        </Link>
        <VideoUploadDate>
          {new Date(uploadedOn).toLocaleDateString()}
        </VideoUploadDate>
      </VideoCardTextContainer>
    </VerticleCardContainer>
  );
}
