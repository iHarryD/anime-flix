import styled from "styled-components";
import { IconButton, IconOnlyButton } from "./Buttons.styled";
import { VerticleFlexWithGap } from "./Generic.styled";

export const PlaylistPageHeadingButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const NewPlaylistIconButton = styled(IconButton)`
  font-size: 1rem;
  width: 2.5rem;
`;

export const NewPlaylistModal = styled(VerticleFlexWithGap)`
  align-items: center;
  background: var(--SECONDARY-ACCENT-CLR);
  border-radius: var(--BORDER-RADIUS);
  gap: var(--HAS-GAP-VALUE);
  padding: var(--HAS-PADDING-VALUE);
`;

export const ClosePlaylistModalButton = styled(IconOnlyButton)`
  margin-left: auto;
  padding: 5px;
`;
