import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";

export const VerticleCardContainer = styled.div`
  font-size: 0.85rem;
  padding: 1rem;
  min-width: 18rem;
  max-width: 20rem;

  iframe {
    display: block;
  }
`;

export const VideoCardTextContainer = styled.div`
  background: var(--ACCENT-CLR);
  display: flex;
  font-weight: 500;
  flex-direction: column;
  gap: 5px;
  padding: 1rem;
  padding-top: 1.3rem;
  transform: translate(-10px, -10px);
  border-radius: 10px;
`;

export const VideoPreviewContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const VideoPreview = styled(ReactPlayer)`
  video {
    display: block;
    height: 10rem;
    width: 100%;
  }
`;

export const VideoPreviewOverlay = styled.div`
  padding: 1rem;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const VideoDuration = styled.span`
  padding: 7px;
  background: #0009;
  border-radius: 5px;
`;

export const VideoHeading = styled.p`
  font-size: 1rem;
  overflow-x: clip;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VideoUploadDate = styled.p``;

export const VideoViews = styled.p``;

export const StyledVideoProgressBar = styled(motion.div)`
  background: #fff;
  height: 2px;
  position: absolute;
  bottom: 0;
  transition: all 50ms;
  width: ${({ progress }) => `${progress ? progress + "%" : "0"}`};
`;

export const PlaylistCardContainer = styled(VerticleCardContainer)`
  background: var(--ACCENT-CLR);
  border-radius: 10px;
`;

export const PlaylistCardPreview = styled.div`
  box-shadow: 5px 5px #767676, 10px 10px #fff;
  background: #000;
  border-radius: 10px;
  height: 10rem;
  position: relative;
  left: -5px;
  top: -5px;
`;

export const PlaylistCardDetailsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
