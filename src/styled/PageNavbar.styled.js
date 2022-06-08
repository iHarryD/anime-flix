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

export const PageNavItems = styled(IconOnlyButton)`
  display: block;
  padding: var(--SECTION-PADDING-X);
  width: 100%;
`;
