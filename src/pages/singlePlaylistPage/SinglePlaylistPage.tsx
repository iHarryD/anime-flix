import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PageContainerMain,
  SinglePlaylistSkeleton,
  VerticleVideoCard,
} from "../../components";
import {
  IconOnlyButton,
  PlaylistItemTrashContainer,
  PlaylistVideosContainer,
  SinglePlaylistDetailsContainer,
  SinglePlaylistNameContainer,
} from "../../styled";
import { useUserData } from "../../contexts";
import { userDataActionTypes, videoCardInterface } from "../../interfaces";
import { deletePlaylist, getPlaylistVideos } from "../../services";

export default function SinglePlaylistPage() {
  const { playlistID } = useParams() as { playlistID: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playlistDetails, setPlaylistDetails] = useState<{
    name: string;
    videos: videoCardInterface[];
  } | null>(null);
  const { userDataDispatcher } = useUserData();

  useEffect(() => {
    getPlaylistVideos(playlistID, setIsLoading, (result) =>
      setPlaylistDetails({ name: result.data.name, videos: result.data.videos })
    );
  }, []);

  function handleDeletePlaylist(playlistID: string) {
    deletePlaylist(playlistID, () => {
      navigate(-1);
      userDataDispatcher({
        type: userDataActionTypes.DELETE_PLAYLIST,
        payload: { playlistID },
      });
    });
  }

  return (
    <PageContainerMain>
      {playlistDetails && !isLoading ? (
        <>
          <SinglePlaylistDetailsContainer>
            <SinglePlaylistNameContainer>
              <h2>{playlistDetails.name}</h2>
              <IconOnlyButton title="Edit playlist name">
                <FontAwesomeIcon icon={faEdit} />
              </IconOnlyButton>
            </SinglePlaylistNameContainer>
            <PlaylistItemTrashContainer>
              <p>{playlistDetails?.videos.length} items</p>
              <IconOnlyButton
                title="Delete playlist"
                onClick={() => handleDeletePlaylist(playlistID)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </IconOnlyButton>
            </PlaylistItemTrashContainer>
          </SinglePlaylistDetailsContainer>
          <PlaylistVideosContainer>
            {playlistDetails &&
              playlistDetails.videos.map((video) => (
                <VerticleVideoCard
                  title={video.title}
                  uploadedOn={video.uploadedOn}
                  url={video.url}
                  _id={video._id}
                  key={video._id}
                />
              ))}
          </PlaylistVideosContainer>
        </>
      ) : (
        <SinglePlaylistSkeleton />
      )}
    </PageContainerMain>
  );
}
