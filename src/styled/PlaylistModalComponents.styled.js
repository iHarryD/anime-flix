import styled from "styled-components";
import { PrimaryButton, TextButton } from "./Buttons.styled";
import { WhiteInput } from "./Input.styled";
import { CenteredFlexJustifyBetween } from "./SingleVideoComponents.styled";

export const PlaylistModalContainer = styled.div`
  background: var(--PRIMARY-BACKGROUND-CLR);
  border-radius: var(--BORDER-RADIUS);
  max-height: 20rem;
  overflow: auto;
  padding: 1rem;
  width: 15rem;
`;

export const PlaylistModalHeadingButtonContainer = styled(
  CenteredFlexJustifyBetween
)`
  padding-bottom: 1rem;
`;

export const PlaylistModalListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  z-index: 0;

  &::after {
    background: #000;
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 100ms;
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.2;
  }
`;

export const NewPlaylistInput = styled(WhiteInput)`
  margin-top: 10px;
  max-width: 100%;
`;

export const NewPlaylistButton = styled(PrimaryButton)`
  margin: 10px 0;
  width: 100%;
`;
