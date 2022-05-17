import { StyledBackdrop } from "../styled/Backdrop.styled";
import ReactDOM from "react-dom";

interface backdropProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  backdropOnClickFunction?: any;
}

export default function Backdrop({
  backgroundColor,
  children,
  backdropOnClickFunction,
}: backdropProps) {
  return ReactDOM.createPortal(
    <StyledBackdrop
      backgroundColor={backgroundColor}
      onClick={() => backdropOnClickFunction()}
    >
      {children}
    </StyledBackdrop>,
    document.getElementById("portal")!
  );
}
