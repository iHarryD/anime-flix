import styled from "styled-components";
import { StyledInput } from "./Input.styled";

export const SearchBarContainer = styled.div`
  background: #ffffff24;
  border-radius: var(--BORDER-RADIUS);
  padding: 0 var(--INPUT-PADDING-X);
  position: relative;
`;

export const StyledNavbarSearchBar = styled(StyledInput)`
  border: none;
  width: max(30vw, 15rem);

  &::placeholder {
    color: inherit;
  }
`;
