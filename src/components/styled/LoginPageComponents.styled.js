import styled from "styled-components";
import { IconOnlyButton } from "./Buttons.styled";

export const LoginBoxContainer = styled.div`
  padding: 1rem;
  width: fit-content;
`;

export const PasswordInputContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  ${IconOnlyButton} {
    opacity: 0.6;
    position: absolute;
    top: var(--INPUT-PADDING-Y);
    right: var(--INPUT-PADDING-X);
  }
`;
