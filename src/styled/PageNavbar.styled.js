import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const StyledMobilePageNavbar = styled.nav`
  background: var(--ACCENT-CLR);
  box-shadow: 0 0 5px 0 #0008;
  display: flex;
  font-size: 1.2rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const MobilePageNavItems = styled(PageNavItems)`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: var(--SECTION-PADDING-X);
  width: unset;

  &::after {
    bottom: unset;
    height: 2px;
    top: 0;
    width: 100%;
  }
`;
