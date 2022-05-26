import { playlistInterface } from "./playlist.interface";

export interface userDataInterface {
  playlists: playlistInterface[];
  watchLater: string[];
}

export enum userDataActionTypes {
  CREATE_PLAYLIST = "CREATE_PLAYLIST",
  DELETE_PLAYLIST = "DELETE_PLAYLIST",
  POPULATE_PLAYLIST = "POPULATE_PLAYLIST",
  REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST",
  ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST",
  REMOVE_FROM_WATCHLATER = "REMOVE_FROM_WATCHLATER",
  ADD_TO_WATCHLATER = "ADD_TO_WATCHLATER",
  POPULATE_WATCHLATER = "POPULATE_WATCHLATER",
  CLEAR_WATCHLATER = "CLEAR_WATCHLATER",
}

interface SolePlaylistActions {
  type:
    | userDataActionTypes.CREATE_PLAYLIST
    | userDataActionTypes.DELETE_PLAYLIST;
  payload: {
    playlistName: string;
  };
}

interface PlaylistVideoActions {
  type:
    | userDataActionTypes.ADD_TO_PLAYLIST
    | userDataActionTypes.REMOVE_FROM_PLAYLIST;
  payload: {
    playlistName: string;
    videoID: string;
  };
}

interface SoleWatchLaterActions {
  type: userDataActionTypes.CLEAR_WATCHLATER;
}

interface WatchLaterVideoActions {
  type:
    | userDataActionTypes.ADD_TO_WATCHLATER
    | userDataActionTypes.REMOVE_FROM_WATCHLATER;
  payload: {
    videoID: string;
  };
}

interface UpdatePlaylistAction {
  type: userDataActionTypes.POPULATE_PLAYLIST;
  payload: {
    updatedPlaylist: playlistInterface[];
  };
}

interface UpdateWatchLatertAction {
  type: userDataActionTypes.POPULATE_WATCHLATER;
  payload: {
    updatedWatchLater: string[];
  };
}

export type userDataActions =
  | SolePlaylistActions
  | PlaylistVideoActions
  | SoleWatchLaterActions
  | WatchLaterVideoActions
  | UpdatePlaylistAction
  | UpdateWatchLatertAction;

export interface userDataContextInterface {
  userData: userDataInterface;
  userDataDispatcher: React.Dispatch<userDataActions>;
}
