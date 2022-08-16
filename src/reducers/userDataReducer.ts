import {
  userDataActions,
  userDataActionTypes,
  userDataInterface,
} from "../interfaces";

export default function userDataReducer(
  state: userDataInterface,
  action: userDataActions
) {
  switch (action.type) {
    case userDataActionTypes.DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist._id !== action.payload.playlistID
        ),
      };
    case userDataActionTypes.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload.playlistID) {
            if (!playlist.videos.includes(action.payload.playlistID)) {
              playlist.videos.push(action.payload.videoID);
            }
          }
          return playlist;
        }),
      };
    case userDataActionTypes.REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload.playlistID) {
            playlist.videos = playlist.videos.filter(
              (id) => id !== action.payload.videoID
            );
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
        playlists: action.payload.updatedPlaylist,
      };
    case userDataActionTypes.POPULATE_WATCHLATER:
      return { ...state, watchLater: action.payload.updatedWatchLater };
    case userDataActionTypes.POPULATE_HISTORY:
      return { ...state, watchLater: action.payload.updatedHistory };
    default:
      return state;
  }
}
