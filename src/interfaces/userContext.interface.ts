import { playlistInterface } from "./playlist.interface";

export interface userDataInterface {
  playlists: playlistInterface[];
  watchLater: string[];
  history: string[];
}

export enum userDataActionTypes {
  DELETE_PLAYLIST = "DELETE_PLAYLIST",
  POPULATE_PLAYLIST = "POPULATE_PLAYLIST",
  REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST",
  ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST",
  REMOVE_FROM_WATCHLATER = "REMOVE_FROM_WATCHLATER",
  ADD_TO_WATCHLATER = "ADD_TO_WATCHLATER",
  POPULATE_WATCHLATER = "POPULATE_WATCHLATER",
  CLEAR_WATCHLATER = "CLEAR_WATCHLATER",
  POPULATE_HISTORY = "POPULATE_HISTORY",
  ADD_TO_HISTORY = "ADD_TO_HISTORY",
  REMOVE_FROM_HISTORY = "REMOVE_FROM_HISTORY",
  CLEAR_HISTORY = "CLEAR_HISTORY",
}

interface DeletePlaylistAction {
  type: userDataActionTypes.DELETE_PLAYLIST;
  payload: {
    playlistID: string;
  };
}

interface PlaylistVideoActions {
  type:
    | userDataActionTypes.ADD_TO_PLAYLIST
    | userDataActionTypes.REMOVE_FROM_PLAYLIST;
  payload: {
    playlistID: string;
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

interface UpdateHistoryActions {
  type: userDataActionTypes.POPULATE_HISTORY;
  payload: {
    updatedHistory: string[];
  };
}

interface SoloHistoryActions {
  type: userDataActionTypes.CLEAR_HISTORY;
}

interface HistoryVideoActions {
  type:
    | userDataActionTypes.ADD_TO_HISTORY
    | userDataActionTypes.REMOVE_FROM_HISTORY;
  payload: {
    videoID: string;
  };
}

export type userDataActions =
  | DeletePlaylistAction
  | PlaylistVideoActions
  | SoleWatchLaterActions
  | WatchLaterVideoActions
  | UpdatePlaylistAction
  | UpdateWatchLatertAction
  | UpdateHistoryActions
  | SoloHistoryActions
  | HistoryVideoActions;

export interface userDataContextInterface {
  userData: userDataInterface;
  userDataDispatcher: React.Dispatch<userDataActions>;
}
