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
  SinglePlaylistDetailsContainer,
  SinglePlaylistNameContainer,
  VideoCardsContainerWithBackground,
} from "../../styled";
import { useUserData } from "../../contexts";
import { userDataActionTypes, videoCardInterface } from "../../interfaces";
import { deletePlaylist, getPlaylistVideos } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";

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
    getPlaylistVideos(
      playlistID,
      setIsLoading,
      (result) =>
        setPlaylistDetails({
          name: result.data.name,
          videos: result.data.videos,
        }),
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }, []);

  function handleDeletePlaylist(playlistID: string) {
    deletePlaylist(
      playlistID,
      () => {
        navigate(-1);
        userDataDispatcher({
          type: userDataActionTypes.DELETE_PLAYLIST,
          payload: { playlistID },
        });
      },
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }

  function toRender() {
    if (isLoading || !playlistDetails) {
      return <SinglePlaylistSkeleton />;
    } else if (playlistDetails?.videos.length === 0) {
      return (
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
      );
    } else {
      return (
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
          <VideoCardsContainerWithBackground>
            {playlistDetails.videos.map((video) => (
              <VerticleVideoCard
                title={video.title}
                uploadedOn={video.uploadedOn}
                url={video.url}
                _id={video._id}
                key={video._id}
              />
            ))}
          </VideoCardsContainerWithBackground>
        </>
      );
    }
  }

  return (
    <>
      <ToastContainer />
      <PageContainerMain>{toRender()}</PageContainerMain>
    </>
  );
}
