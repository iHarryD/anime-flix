import {
  faCircleCheck as faSCircleCheck,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as faRCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { verticallyExpandingVariant } from "../../variants/expandingVariant";
import Modal from "../modal/Modal";
import { IconOnlyButton } from "../styled/Buttons.styled";
import {
  NewPlaylistButton,
  NewPlaylistInput,
  PlaylistModalContainer,
  PlaylistModalHeadingButtonContainer,
  PlaylistModalListItem,
} from "../styled/PlaylistModalComponents.styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import { playlistModalProps } from "../../interfaces/playlistModal.interface";
import {
  addToPlaylist,
  createNewPlaylist,
  removeFromPlaylist,
} from "../../services/playlistServices";
import { useUserData } from "../../contexts/UserDataContext";
import { userDataActionTypes } from "../../interfaces/userContext.interface";
import ButtonSpinner from "../buttonSpinner/ButtonSpinner";

export default function PlaylistModal({
  videoID,
  closePlaylistModal,
}: playlistModalProps) {
  const playlistNameInputRef = useRef<HTMLInputElement | null>(null);
  const [isNewPlaylistInputVisible, setIsNewPlaylistInputVisible] =
    useState<boolean>(false);
  const [isCreatingNewPlaylist, setIsCreatingNewPlaylist] =
    useState<boolean>(false);
  const { userData, userDataDispatcher } = useUserData();
  const { playlists } = userData;

  useEffect(() => console.log(playlists), [playlists]);

  function handleCreatePlaylist() {
    if (playlistNameInputRef.current === null) return;
    if (!playlistNameInputRef.current.value.replaceAll(" ", "")) return;
    createNewPlaylist(
      playlistNameInputRef.current.value,
      setIsCreatingNewPlaylist,
      (result) => {
        userDataDispatcher({
          type: userDataActionTypes.POPULATE_PLAYLIST,
          payload: { updatedPlaylist: result.data },
        });
      }
    );
  }

  function handleAddToPlaylist(playlistID: string, videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.ADD_TO_PLAYLIST,
      payload: { playlistID, videoID },
    });
    addToPlaylist(playlistID, videoID, undefined, () =>
      userDataDispatcher({
        type: userDataActionTypes.REMOVE_FROM_PLAYLIST,
        payload: { playlistID, videoID },
      })
    );
  }

  function handleRemoveFromPlaylist(playlistID: string, videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.REMOVE_FROM_PLAYLIST,
      payload: { playlistID, videoID },
    });
    removeFromPlaylist(playlistID, videoID, undefined, () =>
      userDataDispatcher({
        type: userDataActionTypes.ADD_TO_PLAYLIST,
        payload: { playlistID, videoID },
      })
    );
  }

  return (
    <Backdrop>
      <Modal>
        <PlaylistModalContainer>
          <PlaylistModalHeadingButtonContainer>
            <h3>Playlists</h3>
            <IconOnlyButton onClick={() => closePlaylistModal()}>
              <FontAwesomeIcon icon={faClose} />
            </IconOnlyButton>
          </PlaylistModalHeadingButtonContainer>
          {playlists.length > 0 && (
            <ul>
              {playlists.map((playlist) => (
                <PlaylistModalListItem key={playlist._id}>
                  {playlist.name}
                  {playlist.videos.includes(videoID) ? (
                    <IconOnlyButton
                      title={`Remove from ${playlist.name}`}
                      onClick={() =>
                        handleRemoveFromPlaylist(playlist._id, videoID)
                      }
                    >
                      <FontAwesomeIcon icon={faSCircleCheck} />
                    </IconOnlyButton>
                  ) : (
                    <IconOnlyButton
                      title={`Add to ${playlist.name}`}
                      onClick={() => handleAddToPlaylist(playlist._id, videoID)}
                    >
                      <FontAwesomeIcon icon={faRCircleCheck} />
                    </IconOnlyButton>
                  )}
                </PlaylistModalListItem>
              ))}
            </ul>
          )}
          {isNewPlaylistInputVisible ? (
            <>
              <AnimatePresence>
                <motion.div
                  variants={verticallyExpandingVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <NewPlaylistInput
                    ref={playlistNameInputRef}
                    type="text"
                    placeholder="Playlist name"
                  />
                </motion.div>
              </AnimatePresence>
              <NewPlaylistButton onClick={() => handleCreatePlaylist()}>
                {isCreatingNewPlaylist ? (
                  <ButtonSpinner colorHex="#fff" />
                ) : (
                  "Create"
                )}
              </NewPlaylistButton>
            </>
          ) : (
            <NewPlaylistButton
              onClick={() => setIsNewPlaylistInputVisible(true)}
            >
              Create new playlist
            </NewPlaylistButton>
          )}
        </PlaylistModalContainer>
      </Modal>
    </Backdrop>
  );
}
