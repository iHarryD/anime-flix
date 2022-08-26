import { useEffect, useRef, useState } from "react";
import {
  Backdrop,
  ButtonSpinner,
  EmptyPageTemplate,
  Modal,
  PageContainerMain,
  PageHeading,
  PlaylistCard,
  PlaylistCardLoadingSkeleton,
} from "../../components";
import {
  ExploreVideosContainer,
  PrimaryButton,
  VideoCardsContainerWithBackground,
  WhiteInput,
} from "../../styled";
import { useUserData } from "../../contexts";
import { userDataActionTypes } from "../../interfaces";
import { createNewPlaylist, getPlaylists } from "../../services";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  ClosePlaylistModalButton,
  NewPlaylistIconButton,
  NewPlaylistModal,
  PlaylistPageHeadingButtonContainer,
} from "../../styled/PlaylistPageComponents.styled";

export default function PlaylistPage() {
  const { userData, userDataDispatcher } = useUserData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreatingNewPlaylist, setIsCreatingNewPlaylist] =
    useState<boolean>(false);
  const [isNewPlaylistModalActive, setisNewPlaylistModalActive] =
    useState<boolean>(false);
  const newPlaylistInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (userData.playlists.length) return;
    getPlaylists(
      setIsLoading,
      (result) =>
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_PLAYLIST,
          payload: { updatedPlaylist: result.data },
        }),
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }, []);

  function toRender() {
    if (isLoading) {
      return (
        <ExploreVideosContainer>
          <PlaylistCardLoadingSkeleton />
        </ExploreVideosContainer>
      );
    } else if (userData.playlists.length === 0) {
      return <EmptyPageTemplate />;
    } else {
      return (
        <VideoCardsContainerWithBackground>
          {userData.playlists.map(({ name, videos, _id }) => (
            <PlaylistCard key={_id} name={name} videos={videos} _id={_id} />
          ))}
        </VideoCardsContainerWithBackground>
      );
    }
  }

  function handleCreatePlaylist() {
    if (
      newPlaylistInputRef.current === null ||
      newPlaylistInputRef.current.value.replaceAll(" ", "").length === 0
    )
      return;
    createNewPlaylist(
      newPlaylistInputRef.current.value,
      setIsCreatingNewPlaylist,
      (result) => {
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_PLAYLIST,
          payload: { updatedPlaylist: result.data },
        });
        if (newPlaylistInputRef.current) {
          newPlaylistInputRef.current.value = "";
        }
        setisNewPlaylistModalActive(false);
      }
    );
  }

  return (
    <>
      {isNewPlaylistModalActive && (
        <Backdrop>
          <Modal>
            <NewPlaylistModal>
              <ClosePlaylistModalButton
                onClick={() => setisNewPlaylistModalActive(false)}
              >
                <FontAwesomeIcon icon={faClose} />
              </ClosePlaylistModalButton>
              <WhiteInput
                ref={newPlaylistInputRef}
                placeholder="Playlist name"
              />
              <PrimaryButton
                disabled={isCreatingNewPlaylist}
                onClick={() => handleCreatePlaylist()}
              >
                {isCreatingNewPlaylist ? (
                  <ButtonSpinner colorHex="#fff" />
                ) : (
                  "Create"
                )}
              </PrimaryButton>
            </NewPlaylistModal>
          </Modal>
        </Backdrop>
      )}
      <PageContainerMain>
        <PageHeading>
          <PlaylistPageHeadingButtonContainer>
            Playlists
            <NewPlaylistIconButton
              title="Create new playlist"
              onClick={() => setisNewPlaylistModalActive(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </NewPlaylistIconButton>
          </PlaylistPageHeadingButtonContainer>
        </PageHeading>
        {toRender()}
      </PageContainerMain>
    </>
  );
}
