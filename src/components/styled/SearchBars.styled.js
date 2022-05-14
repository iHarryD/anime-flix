import styled from "styled-components";
import { StyledInput } from "./Input.styled";

export const SearchBarContainer = styled.div`
  background: #ffffff24;
  border-radius: var(--BORDER-RADIUS);
  color: var(--DARK-FONT-CLR);
  padding: 0 var(--INPUT-PADDING-X);
  position: relative;
`;

export const StyledNavbarSearchBar = styled(StyledInput)`
  border: none;
  color: var(--PRIMARY-FONT-CLR);
  width: max(30vw, 15rem);

  &::placeholder {
    color: inherit;
  }
`;
