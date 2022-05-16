import {
  VerticleCardContainer,
  VideoCardTextContainer,
  VideoDuration,
  VideoHeading,
  VideoPreviewContainer,
  VideoPreviewOverlay,
  VideoUploadDate,
} from "../styled/Cards.styled";

interface videoProps {
  url: string;
  title: string;
  videoID: string;
  uploadDate: Date;
}

export function VerticleVideoCard({
  url,
  videoID,
  title,
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
        <VideoHeading title={title} to={`/watch/${videoID}`}>
          {title}
        </VideoHeading>
        <VideoUploadDate>
          {new Date(uploadDate).toLocaleDateString()}
        </VideoUploadDate>
      </VideoCardTextContainer>
    </VerticleCardContainer>
  );
}
