import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IconOnlyButton } from "./Buttons.styled";

export const StyledPageNavbar = styled.nav`
  background: var(--ACCENT-CLR);
  border-radius: var(--BORDER-RADIUS);
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  justify-content: space-between;
  position: sticky;
  top: 50%;
  left: var(--SECTION-PADDING-X);
  transform: translateY(-50%);
  width: fit-content;
`;

export const PageNavItems = styled(NavLink)`
  display: block;
  padding: var(--SECTION-PADDING-X);
  position: relative;
  width: 100%;

  &::after {
    content: "";
    background: #0000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
  }

  &.active::after {
    background: currentColor;
  }

  svg {
    display: block;
    margin: 0;
    width: 100%;
  }
`;
