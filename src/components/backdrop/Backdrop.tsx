import ReactDOM from "react-dom";
import { StyledBackdrop } from "../../styled";
import { backdropProps } from "../../interfaces";

export function Backdrop({
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
    document.getElementById("portal") as HTMLElement
  );
}
