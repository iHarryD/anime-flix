import { StyledModal } from "../../styled";
import { modalProps } from "../../interfaces";

export function Modal({ children }: modalProps) {
  return <StyledModal>{children}</StyledModal>;
}
