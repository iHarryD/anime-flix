import { Link } from "react-router-dom";
import {
  PlaylistCardContainer,
  PlaylistCardPreview,
  PlaylistCardDetailsContainer,
  VideoHeading,
} from "../styled/Cards.styled";

interface playlistCardProps {
  title: string;
  itemCount: number;
}

export default function PlaylistCard({ title, itemCount }: playlistCardProps) {
  return (
    <PlaylistCardContainer>
      <Link to="somehwere">
        <PlaylistCardPreview></PlaylistCardPreview>
        <PlaylistCardDetailsContainer>
          <VideoHeading>{title}</VideoHeading>
          <span>{itemCount} items</span>
        </PlaylistCardDetailsContainer>
      </Link>
    </PlaylistCardContainer>
  );
}
