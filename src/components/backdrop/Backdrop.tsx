import { StyledBackdrop } from "../styled/Backdrop.styled";
import ReactDOM from "react-dom";
import { backdropProps } from "../../interfaces/backdrop.interface";

export default function Backdrop({
  backgroundColor,
  children,
  backdropOnClickFunction,
}: backdropProps) {
  return ReactDOM.createPortal(
    <StyledBackdrop
      backgroundColor={backgroundColor}
      onClick={
        backdropOnClickFunction
          ? (e: React.MouseEvent<HTMLButtonElement>) =>
              backdropOnClickFunction(e)
          : null
      }
    >
      {children}
    </StyledBackdrop>,
    document.getElementById("portal")!
  );
}
