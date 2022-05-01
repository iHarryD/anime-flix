import React from "react";
import {
  StyledVideoForBackground,
  BackgroundVideoContainer,
} from "../styled/VideoForBackground.styled";

interface videoProps {
  loop: boolean;
  width?: string;
  height?: string;
  autoPlay: boolean;
  videoSrc: string;
  videoType: string;
  videoPoster: string;
}

export default function VideoBackground({
  loop,
  width,
  height,
  autoPlay,
  videoSrc,
  videoType,
  videoPoster,
}: videoProps) {
  return (
    <BackgroundVideoContainer width={width} height={height}>
      <StyledVideoForBackground
        autoPlay={autoPlay}
        muted
        playsinline
        onEnded={(e: React.ChangeEvent<HTMLVideoElement>) =>
          (e.target.style.display = "none")
        }
        loop={loop}
        poster={videoPoster}
      >
        <source src={videoSrc} type={videoType} />
      </StyledVideoForBackground>
    </BackgroundVideoContainer>
  );
}
