import { faAdd } from "@fortawesome/free-solid-svg-icons";
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
import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";

export default function PlaylistModal() {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState<boolean>(false);
  return (
    <Backdrop>
      <Modal>
        <PlaylistModalContainer>
          <PlaylistModalHeadingButtonContainer>
            <h3>Playlists</h3>
            <IconOnlyButton onClick={() => setIsCreatingPlaylist(true)}>
              <FontAwesomeIcon icon={faAdd} />
            </IconOnlyButton>
          </PlaylistModalHeadingButtonContainer>
          {isCreatingPlaylist && (
            <AnimatePresence>
              <motion.div
                variants={verticallyExpandingVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <NewPlaylistInput type="text" placeholder="Playlist name" />
                <NewPlaylistButton>Create</NewPlaylistButton>
              </motion.div>
            </AnimatePresence>
          )}
          <ul>
            <PlaylistModalListItem>Important</PlaylistModalListItem>
            <PlaylistModalListItem>Time pass</PlaylistModalListItem>
          </ul>
        </PlaylistModalContainer>
      </Modal>
    </Backdrop>
  );
}
