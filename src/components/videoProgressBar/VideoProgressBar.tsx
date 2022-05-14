import { StyledVideoProgressBar } from "../styled/Cards.styled";

interface barProps {
  progress: number;
}

export default function VideoProgressBar({ progress }: barProps) {
  return <StyledVideoProgressBar progress={progress}></StyledVideoProgressBar>;
}
