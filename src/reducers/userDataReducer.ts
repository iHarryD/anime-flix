import {
  userDataActions,
  userDataActionTypes,
  userDataInterface,
} from "../interfaces/userContext.interface";

export default function userDataReducer(
  state: userDataInterface,
  action: userDataActions
) {
  const { type, payload } = action;
  switch (type) {
    case userDataActionTypes.CREATE_PLAYLIST:
      if (payload?.playlistName) break;
      return {
        ...state,
        playlists: [
          ...state.playlists,
          { name: payload?.playlistName, videos: [] },
        ],
      };
    case userDataActionTypes.DELETE_PLAYLIST:
      if (payload?.playlistName) break;
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist.name !== payload?.playlistName
        ),
      };
    case userDataActionTypes.ADD_TO_PLAYLIST:
      if (payload?.playlistName && payload?.videoID) break;
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist.name === payload?.playlistName) {
            if (payload.videoID) {
              playlist.videos.push(payload.videoID);
            }
          }
          return playlist;
        }),
      };
    case userDataActionTypes.REMOVE_FROM_PLAYLIST:
      if (payload?.playlistName && payload?.videoID) break;
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist.name === payload?.playlistName) {
            if (payload.videoID) {
              playlist.videos.slice(playlist.videos.indexOf(payload.videoID));
            }
          }
          return playlist;
        }),
      };
    case userDataActionTypes.ADD_TO_WATCHLATER:
      if (!payload?.videoID) break;
      return {
        ...state,
        watchLater: [...state.watchLater, payload?.videoID],
      };
    case userDataActionTypes.REMOVE_FROM_WATCHLATER:
      if (payload?.videoID) break;
      return {
        ...state,
        watchLater: state.watchLater.filter((id) => id !== payload?.videoID),
      };
    case userDataActionTypes.POPULATE_PLAYLIST:
      if (!payload?.updatedPlaylist) break;
      return {
        ...state,
        playlists: [...payload?.updatedPlaylist],
      };
    case userDataActionTypes.POPULATE_WATCHLATER:
      if (!payload?.updatedWatchLater) break;
      return { ...state, watchLater: [...payload?.updatedWatchLater] };
    default:
      return state;
  }
}
