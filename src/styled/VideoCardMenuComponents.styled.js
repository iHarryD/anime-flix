import styled from "styled-components";

export const StyledVideoCardMenu = styled.ul`
  background: var(--SECONDARY-ACCENT-CLR);
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 2;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1;

  &::after {
    background: #000;
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 200ms;
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.2;
  }
`;

export const MenuItemWithNestedMenu = styled(MenuItem)`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;

  button {
    padding: 0 5px;
  }
`;

export const PlaylistMenu = styled.ul`
  background: var(--SECONDARY-ACCENT-CLR);
  max-height: 15rem;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
`;
