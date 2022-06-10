import { AxiosError, AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getPlaylists(
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/playlist/fetch-all");
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function getPlaylistVideos(
  playlistID: string,
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: AxiosError | Error) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get(
      `/playlist/fetch-one?playlistID=${playlistID}`
    );
    if (successCallback) successCallback(result);
  } catch (err: any) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function createNewPlaylist(
  playlistName: string,
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: any) => void
) {
  try {
    if (loadingState) loadingState(true);

    const result = await baseAxiosInstance().patch("/playlist/create", {
      playlistName,
    });
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
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
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
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
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
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
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  }
}
