import { StyledModal } from "../styled/Modal.styled";

interface modalProps {
  children: React.ReactChild;
}

export default function Modal({ children }: modalProps) {
  return <StyledModal>{children}</StyledModal>;
}
