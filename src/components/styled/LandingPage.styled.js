import { motion } from "framer-motion";
import styled from "styled-components";
import backgroundImage from "../../assets/logo.svg";

export const LandingPageContainer = styled.div`
  background: url(${backgroundImage});
  overflow: hidden;
  height: 100vh;
  padding: 0;
  position: relative;
  width: 100vw;
`;

export const LandingPageForeground = styled.div`
  position: absolute;
  left: 5rem;
  top: 50%;
  width: 50ch;
  transform: translateY(-50%);
`;

export const LandingPageTextContainer = styled.div`
  margin-bottom: 1rem;
`;

export const LandingPageHeading = styled(motion.p)`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
}`;

export const LandingPageFooter = styled(motion.div)`
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    font-size: 1.5rem;
    margin-inline-start: 2rem;
  }
`;
