import {
  StyledCardVideoPreviewSkeleton,
  StyledTextSkeleton,
  StyledVideoCardSkeleton,
  VideoCardTextContainerSkeleton,
} from "../styled/Skeletons.styled";

export function VideoCardLoadingSkeleton() {
  return (
    <StyledVideoCardSkeleton>
      <StyledCardVideoPreviewSkeleton />
      <VideoCardTextContainerSkeleton>
        <StyledTextSkeleton />
        <StyledTextSkeleton />
      </VideoCardTextContainerSkeleton>
    </StyledVideoCardSkeleton>
  );
}
