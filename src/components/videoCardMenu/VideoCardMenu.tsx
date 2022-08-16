import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useUserData } from "../../contexts";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { userDataActionTypes } from "../../interfaces";
import {
  addToPlaylist,
  addToWatchLater,
  removeFromPlaylist,
  removeFromWatchLater,
} from "../../services";
import {
  StyledVideoCardMenu,
  MenuItem,
  MenuItemWithNestedMenu,
  PlaylistMenu,
  IconOnlyButton,
} from "../../styled";

export function VideoCardMenu({ videoID }: { videoID: string }) {
  const [isPlaylistMenuActive, setIsPlaylistMenuActive] =
    useState<boolean>(false);
  const hideMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const { userData, userDataDispatcher } = useUserData();

  function handleHidePlaylistMenu() {
    if (hideMenuTimeout.current !== null) {
      clearTimeout(hideMenuTimeout.current);
    }
    hideMenuTimeout.current = setTimeout(() => {
      setIsPlaylistMenuActive(false);
    }, 500);
  }

  function handleAddToWatchLater(videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.ADD_TO_WATCHLATER,
      payload: { videoID },
    });
    addToWatchLater(videoID, undefined, (err) => {
      userDataDispatcher({
        type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
        payload: { videoID },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
  }

  function handleRemoveFromWatchLater(videoID: string) {
    userDataDispatcher({
      type: userDataActionTypes.REMOVE_FROM_WATCHLATER,
      payload: { videoID },
    });
    removeFromWatchLater(videoID, undefined, (err) => {
      userDataDispatcher({
        type: userDataActionTypes.ADD_TO_WATCHLATER,
        payload: { videoID },
      });
      toast.error(getErrorMessage(err), toastEmitterConfig);
    });
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
    setIsPlaylistMenuActive(false);
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
    setIsPlaylistMenuActive(false);
  }

  return (
    <StyledVideoCardMenu>
      {userData.watchLater.includes(videoID) ? (
        <MenuItem onClick={() => handleRemoveFromWatchLater(videoID)}>
          Remove from watch later
        </MenuItem>
      ) : (
        <MenuItem onClick={() => handleAddToWatchLater(videoID)}>
          Add to watch later
        </MenuItem>
      )}
      <MenuItemWithNestedMenu>
        <span>Handle video in playlists</span>
        <IconOnlyButton
          onMouseOver={() => setIsPlaylistMenuActive(true)}
          onMouseLeave={() => handleHidePlaylistMenu()}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </IconOnlyButton>
        {isPlaylistMenuActive && (
          <PlaylistMenu
            onMouseOver={() => {
              setIsPlaylistMenuActive(true);
              if (hideMenuTimeout.current !== null) {
                clearTimeout(hideMenuTimeout.current);
              }
            }}
            onMouseLeave={() => setIsPlaylistMenuActive(false)}
          >
            {userData.playlists.map((playlist) =>
              playlist.videos.includes(videoID) ? (
                <MenuItem
                  key={playlist._id}
                  onClick={() =>
                    handleRemoveFromPlaylist(playlist._id, videoID)
                  }
                >
                  Remove from {playlist.name}
                </MenuItem>
              ) : (
                <MenuItem
                  key={playlist._id}
                  onClick={() => handleAddToPlaylist(playlist._id, videoID)}
                >
                  Add to {playlist.name}
                </MenuItem>
              )
            )}
          </PlaylistMenu>
        )}
      </MenuItemWithNestedMenu>
    </StyledVideoCardMenu>
  );
}
