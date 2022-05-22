import { StyledModal } from "../styled/Modal.styled";
import { modalProps } from "../../interfaces/modal.interface";

export default function Modal({ children }: modalProps) {
  return <StyledModal>{children}</StyledModal>;
}
