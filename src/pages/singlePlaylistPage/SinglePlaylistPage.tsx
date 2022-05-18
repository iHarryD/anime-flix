import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import { IconOnlyButton } from "../../components/styled/Buttons.styled";
import {
  PlaylistItemTrashContainer,
  PlaylistVideosContainer,
  SinglePlaylistDetailsContainer,
  SinglePlaylistNameContainer,
} from "../../components/styled/SinglePlaylistPageComponents.styled";
import { VerticleVideoCard } from "../../components/videoCards/VideoCards";

export default function SinglePlaylistPage() {
  return (
    <PageContainerMain>
      <div>
        <SinglePlaylistDetailsContainer>
          <SinglePlaylistNameContainer>
            <h2>Playlist 1</h2>
            <IconOnlyButton title="Edit playlist name">
              <FontAwesomeIcon icon={faEdit} />
            </IconOnlyButton>
          </SinglePlaylistNameContainer>
          <PlaylistItemTrashContainer>
            <p>10 items</p>
            <IconOnlyButton title="Delete playlist">
              <FontAwesomeIcon icon={faTrash} />
            </IconOnlyButton>
          </PlaylistItemTrashContainer>
        </SinglePlaylistDetailsContainer>
      </div>
      <PlaylistVideosContainer>
        {[
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
          {
            title: "My video",
            url: "https://www.youtube.com/embed/DMSeibTVeRs",
            uploadDate: new Date("2022-05-12T14:30:49.983+00:00"),
          },
        ].map((video) => (
          <VerticleVideoCard
            title={video.title}
            uploadDate={video.uploadDate}
            url={video.url}
          />
        ))}
      </PlaylistVideosContainer>
    </PageContainerMain>
  );
}
