import styled from "styled-components";
import {
  PlaylistCardContainer,
  PlaylistCardPreview,
  VerticleCardContainer,
  VideoCardTextContainer,
} from "./Cards.styled";
import { SinglePlaylistDetailsContainer } from "./SinglePlaylistPageComponents.styled";

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
  margin: 5px 0;
  width: 100%;
`;

export const SmallTextSkeleton = styled(StyledTextSkeleton)`
  animation: skeletonAnimation 2s infinite linear;
  border-radius: 5px;
  height: 1rem;
  width: 100%;
`;

export const NormalTextSkeleton = styled(StyledTextSkeleton)`
  animation: skeletonAnimation 2s infinite linear;
  border-radius: 5px;
  height: 1.3rem;
  width: 100%;
`;

export const LargeTextSkeleton = styled(StyledTextSkeleton)`
  animation: skeletonAnimation 2s infinite linear;
  border-radius: 5px;
  height: 1.6rem;
  width: 100%;
`;

export const StyledPlaylistCardSkeleton = styled(PlaylistCardContainer)`
  background: #383838;

  ${StyledTextSkeleton} {
    background: #272727;
  }
`;

export const PlaylistCardPreviewSkeleton = styled(PlaylistCardPreview)`
  background: #272727;
  box-shadow: 5px 5px #222, 10px 10px #1c1c1c;
  margin-bottom: 1rem;
`;

export const SinglePlaylistDetailsSkeleton = styled(
  SinglePlaylistDetailsContainer
)`
  background: #272727;
`;

export const SinglePlaylistNameText = styled(LargeTextSkeleton)`
  margin-bottom: 1.5rem;
`;
