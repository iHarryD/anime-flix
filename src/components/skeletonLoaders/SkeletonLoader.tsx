import {
  PlaylistCardPreviewSkeleton,
  SinglePlaylistDetailsSkeleton,
  StyledCardVideoPreviewSkeleton,
  StyledPlaylistCardSkeleton,
  SmallTextSkeleton,
  StyledVideoCardSkeleton,
  VideoCardTextContainerSkeleton,
  NormalTextSkeleton,
  SinglePlaylistNameText,
} from "../styled/Skeletons.styled";

export function VideoCardLoadingSkeleton() {
  return (
    <StyledVideoCardSkeleton>
      <StyledCardVideoPreviewSkeleton />
      <VideoCardTextContainerSkeleton>
        <NormalTextSkeleton />
        <SmallTextSkeleton />
      </VideoCardTextContainerSkeleton>
    </StyledVideoCardSkeleton>
  );
}

export function PlaylistCardLoadingSkeleton() {
  return (
    <StyledPlaylistCardSkeleton>
      <PlaylistCardPreviewSkeleton />
      <NormalTextSkeleton />
    </StyledPlaylistCardSkeleton>
  );
}

export function SinglePlaylistSkeleton() {
  return (
    <SinglePlaylistDetailsSkeleton>
      <SinglePlaylistNameText />
      <NormalTextSkeleton />
    </SinglePlaylistDetailsSkeleton>
  );
}
