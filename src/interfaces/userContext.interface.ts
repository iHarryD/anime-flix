import React from "react";
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
}

export interface userDataActions {
  type: userDataActionTypes;
  payload?: {
    playlistName?: string;
    videoID?: string;
    updatedPlaylist?: playlistInterface[];
    updatedWatchLater?: string[];
  };
}

export interface userDataContextInterface {
  userData: userDataInterface;
  userDataDispatcher: React.Dispatch<
    React.Reducer<userDataInterface, userDataActions>
  >;
}
