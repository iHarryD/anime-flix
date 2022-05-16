import { motion } from "framer-motion";
import styled from "styled-components";
import { IconOnlyButton, TextButton } from "./Buttons.styled";

export const StyledSingleVideoContainer = styled.div`
  background: #1e1e1e;
  overflow: hidden;
  padding: 1rem;

  iframe {
    width: 100%;
    height: 80vh;
  }
`;

export const StyledVideoUtilitiesBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VideoUtilityButton = styled(motion(IconOnlyButton))`
  font-size: 1.5rem;
`;

export const ButtonWithTextContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const DescriptionTextButton = styled(TextButton)`
  width: 100%;
`;

export const ButtonPairContainer = styled.div`
  display: flex;
  gap: 2rem;

  &:last-child {
    gap: 3rem;
  }
`;

export const ViewUploadDateContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.95rem;
  gap: 1rem;
  margin: 2rem 0;
`;

export const BulletContainer = styled.span`
  font-size: 0.6rem;
`;
