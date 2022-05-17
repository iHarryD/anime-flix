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
  uploadDate: Date;
}

export function VerticleVideoCard({ url, title, uploadDate }: videoProps) {
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
        <VideoHeading title={title}>{title}</VideoHeading>
        <VideoUploadDate>
          {new Date(uploadDate).toLocaleDateString()}
        </VideoUploadDate>
      </VideoCardTextContainer>
    </VerticleCardContainer>
  );
}