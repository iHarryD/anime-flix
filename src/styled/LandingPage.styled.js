import { motion } from "framer-motion";
import styled from "styled-components";
import backgroundImage from "../assets/landing-page-bg-poster.jpg";

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
  left: clamp(2rem, 5vw + 1.2rem, 5rem);
  top: 50%;
  width: min(50ch, 80%);
  transform: translateY(-50%);
`;

export const LandingPageTextContainer = styled.div`
  margin-bottom: 1rem;
`;

export const LandingPageHeading = styled(motion.p)`
  font-size: clamp(2rem, 1vw + 1.8rem, 3rem);
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
