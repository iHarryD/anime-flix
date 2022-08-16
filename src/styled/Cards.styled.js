import styled from "styled-components";
import { motion } from "framer-motion";
import { IconOnlyButton } from "./Buttons.styled";

export const VerticleCardContainer = styled.div`
  cursor: default;
  font-size: 0.85rem;
  padding: 1rem;
  min-width: 18rem;
  max-width: 22rem;
  position: relative;

  iframe {
    display: block;
    width: 100%;
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

  &::after {
    background: linear-gradient(180deg, #000, #0000);
    content: "";
    height: 50%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const VideoDuration = styled.span`
  padding: 7px;
  background: #0009;
  border-radius: 5px;
`;

export const VideoHeading = styled.h3`
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

export const VideoTooltipButton = styled(IconOnlyButton)`
  font-size: 1.2rem;
  padding: 5px;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  z-index: 1;
`;
