import styled from "styled-components";
import { StyledInput } from "./Input.styled";

export const SearchBarItemsContainer = styled.div`
  position: relative;
`;

export const SearchBarContainer = styled.div`
  align-items: center;
  background: var(--INPUT-BACKGROUND-CLR);
  border-radius: var(--BORDER-RADIUS);
  display: flex;
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

export const SearchItemsContainer = styled.ul`
  margin: 0.5rem 0;
  max-height: 30rem;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const SearchItem = styled.li`
  background: var(--SECONDARY-ACCENT-CLR);
  padding: 10px var(--INPUT-PADDING-X);
  width: 100%;

  button {
    cursor: pointer;
  }
`;
