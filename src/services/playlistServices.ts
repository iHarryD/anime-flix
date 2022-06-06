import { AxiosError, AxiosResponse } from "axios";
import React from "react";
import baseAxiosInstance from "./baseAxiosInstance";

export async function getPlaylists(
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().get("/playlist/fetch-all");
    if (successCallback) {
      successCallback(result);
    }
  } catch (err) {
    if (failureCallback) {
      failureCallback(err);
    }
    console.log(err);
  } finally {
    loadingState(false);
  }
}

export async function getPlaylistVideos(
  loadingState: React.SetStateAction<any>,
  playlistID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: AxiosError | Error) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().get(
      `/playlist/fetch-one?playlistID=${playlistID}`
    );
    if (successCallback) {
      successCallback(result);
    }
  } catch (err: any) {
    if (failureCallback) {
      failureCallback(err);
    }
  } finally {
    loadingState(false);
  }
}

export async function createNewPlaylist(
  loadingState: React.SetStateAction<any>,
  playlistName: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().patch("/playlist/create", {
      playlistName,
    });
    if (successCallback) {
      successCallback(result);
    }
  } catch (err) {
    if (failureCallback) {
      failureCallback(err);
    }
  } finally {
    loadingState(false);
  }
}

export async function deletePlaylist(
  playlistID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/playlist/delete", {
      playlistID,
    });
    if (successCallback) {
      successCallback(result);
    }
  } catch (err) {
    if (failureCallback) {
      failureCallback(err);
    }
  }
}

export async function addToPlaylist(
  playlistID: string,
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/playlist/add", {
      playlistID,
      videoID,
    });
    if (successCallback) {
      successCallback(result);
    }
  } catch (err) {
    if (failureCallback) {
      failureCallback(err);
    }
    console.log(err);
  }
}

export async function removeFromPlaylist(
  playlistID: string,
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/playlist/remove", {
      playlistID,
      videoID,
    });
    if (successCallback) {
      successCallback(result);
    }
  } catch (err) {
    if (failureCallback) {
      failureCallback(err);
    }
    console.log(err);
  }
}
