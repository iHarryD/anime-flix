import styled from "styled-components";
import { VerticleCardContainer, VideoCardTextContainer } from "./Cards.styled";

export const StyledSkeleton = styled.div`
  background: #383838;
  border-radius: 10px;
`;

export const StyledVideoCardSkeleton = styled(VerticleCardContainer)``;

export const VideoCardTextContainerSkeleton = styled(VideoCardTextContainer)`
  background: #272727;
`;

export const StyledCardVideoPreviewSkeleton = styled(StyledSkeleton)`
  height: 10rem;
`;

export const StyledTextSkeleton = styled(StyledSkeleton)`
  animation: skeletonAnimation 2s infinite linear;
  border-radius: 5px;
  height: 1.5rem;
  margin: 3px 0;
  width: 100%;
`;
