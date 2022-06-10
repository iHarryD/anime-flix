import { Link } from "react-router-dom";
import {
  PlaylistCardContainer,
  PlaylistCardPreview,
  PlaylistCardDetailsContainer,
  VideoHeading,
} from "../../styled";
import { playlistInterface } from "../../interfaces";

export function PlaylistCard({ name, videos, _id }: playlistInterface) {
  return (
    <PlaylistCardContainer>
      <Link to={_id}>
        <PlaylistCardPreview></PlaylistCardPreview>
        <PlaylistCardDetailsContainer>
          <VideoHeading>{name}</VideoHeading>
          <span>{videos.length} items</span>
        </PlaylistCardDetailsContainer>
      </Link>
    </PlaylistCardContainer>
  );
}
