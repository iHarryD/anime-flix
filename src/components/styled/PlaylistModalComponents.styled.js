import styled from "styled-components";
import { PrimaryButton } from "./Buttons.styled";
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
  padding: 10px 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const NewPlaylistInput = styled(WhiteInput)`
  max-width: 100%;
`;

export const NewPlaylistButton = styled(PrimaryButton)`
  margin: 10px 0;
  width: 100%;
`;
