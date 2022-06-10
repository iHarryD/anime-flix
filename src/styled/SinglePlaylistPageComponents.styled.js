import styled from "styled-components";
import { ExploreVideosContainer } from "./ExplorePage.styled";

export const SinglePlaylistDetailsContainer = styled.div`
  background: var(--ACCENT-CLR);
  border-radius: var(--BORDER-RADIUS);
  padding: 1rem;
`;

export const SinglePlaylistNameContainer = styled.div`
  align-items: self-start;
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
`;

export const PlaylistItemTrashContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlaylistVideosContainer = styled(ExploreVideosContainer)`
  background: var(--SECONDARY-ACCENT-CLR);
  padding: 1rem;
`;
