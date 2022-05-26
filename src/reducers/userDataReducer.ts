import {
  userDataActions,
  userDataActionTypes,
  userDataInterface,
} from "../interfaces/userContext.interface";

export default function userDataReducer(
  state: userDataInterface,
  action: userDataActions
) {
  switch (action.type) {
    case userDataActionTypes.CREATE_PLAYLIST:
      return {
        ...state,
        playlists: [
          ...state.playlists,
          { name: action.payload.playlistName, videos: [] },
        ],
      };
    case userDataActionTypes.DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist.name !== action.payload.playlistName
        ),
      };
    case userDataActionTypes.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist.name === action.payload.playlistName) {
            if (action.payload.videoID) {
              playlist.videos.push(action.payload.videoID);
            }
          }
          return playlist;
        }),
      };
    case userDataActionTypes.REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist.name === action.payload.playlistName) {
            if (action.payload.videoID) {
              playlist.videos.slice(
                playlist.videos.indexOf(action.payload.videoID)
              );
            }
          }
          return playlist;
        }),
      };
    case userDataActionTypes.ADD_TO_WATCHLATER:
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload.videoID],
      };
    case userDataActionTypes.REMOVE_FROM_WATCHLATER:
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (id) => id !== action.payload.videoID
        ),
      };
    case userDataActionTypes.CLEAR_WATCHLATER:
      return {
        ...state,
        watchLater: [],
      };
    case userDataActionTypes.POPULATE_PLAYLIST:
      return {
        ...state,
        playlists: [...action.payload.updatedPlaylist],
      };
    case userDataActionTypes.POPULATE_WATCHLATER:
      return { ...state, watchLater: [...action.payload.updatedWatchLater] };
    default:
      return state;
  }
}
