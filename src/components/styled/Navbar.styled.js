import styled from "styled-components";

export const StyledNavbar = styled.nav`
  align-items: center;
  background: var(--ACCENT-CLR);
  color: var(--ACCENT-FONT-CLR);
  display: flex;
  justify-content: space-between;
  padding: 0.2rem var(--SECTION-PADDING-X);
  width: 100%;

  button {
    --PRIMARY-BTN-BACKGROUND-CLR: var(--PRIMARY-BACKGROUND-CLR);
  }
`;

export const NavbarUtilitiesContainer = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "1rem")};
`;
