import { backgroundVideoProps } from "../../interfaces";
import {
  StyledVideoForBackground,
  BackgroundVideoContainer,
} from "../../styled";

export function VideoBackground({
  loop,
  width,
  height,
  autoPlay,
  videoSrc,
  videoType,
  videoPoster,
}: backgroundVideoProps) {
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
