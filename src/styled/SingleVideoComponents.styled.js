import { motion } from "framer-motion";
import styled from "styled-components";
import { IconOnlyButton, TextButton } from "./Buttons.styled";

export const StyledSingleVideoContainer = styled.div`
  background: var(--SECONDARY-ACCENT-CLR);
  padding: var(--HAS-PADDING-VALUE);
  iframe {
    width: 100%;
    height: 80vmin;
  }
`;

export const CenteredFlexJustifyBetween = styled.div`
  align-items: center;
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
  line-height: 1.7;
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
`;

export const BulletContainer = styled.span`
  font-size: 0.6rem;
`;

export const DescriptionTextContainer = styled.div`
  overflow: hidden;
`;
