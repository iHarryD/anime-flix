import styled from "styled-components";
import { StyledInput } from "./Input.styled";

export const SearchBarContainer = styled.div`
  background: var(--INPUT-BACKGROUND-CLR);
  border-radius: var(--BORDER-RADIUS);
  padding: 0 var(--INPUT-PADDING-X);
  position: relative;
`;

export const StyledNavbarSearchBar = styled(StyledInput)`
  border: none;
  width: max(30vw, 10rem);

  &::placeholder {
    color: inherit;
  }
`;
