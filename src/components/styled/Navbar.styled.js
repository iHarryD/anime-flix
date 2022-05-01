import styled from "styled-components";

export const StyledNavbar = styled.nav`
  align-items: center;
  background: var(--ACCENT-CLR);
  color: var(--ACCENT-FONT-CLR);
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  width: 100%;

  button {
    --PRIMARY-BTN-BACKGROUND-CLR: var(--PRIMARY-BACKGROUND-CLR);
    --PRIMARY-BTN-FONT-CLR: var(--PRIMARY-FONT-CLR);
  }
`;

export const NavbarUtilitiesContainer = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "1rem")};
`;
