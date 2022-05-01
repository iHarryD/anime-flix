import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled.footer`
  background: var(--ACCENT-CLR);
  color: var(--ACCENT-FONT-CLR);
  padding: 1rem;
  postition: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FooterUpperSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

export const FooterFlixTItle = styled.p`
  font-size: 1.9em;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FooterSection = styled.section`
  width: 30ch;
`;

export const FooterSectionHeading = styled.p`
  font-size: 1.1em;
  margin-bottom: 5px;
`;

export const FooterSectionsLinks = styled(motion.li)`
  font-size: 0.9em;
  opacity: 0.95;
`;

export const FooterCopyrightContainer = styled.div`
  border-top: 1px solid currentColor;
  margin-top: 1rem;
  padding-top: 5px;
  text-align: center;
`;

export const FooterCopyrightText = styled.span`
  margin-left: 10px;
`;
