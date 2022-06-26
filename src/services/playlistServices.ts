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
    const result = await baseAxiosInstance().get("/playlists");
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
    const result = await baseAxiosInstance().get(`/playlists/${playlistID}`);
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

    const result = await baseAxiosInstance().post("/playlists", {
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
    const result = await baseAxiosInstance().delete(`/playlists/${playlistID}`);
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
    const result = await baseAxiosInstance().patch(
      `/playlists/${playlistID}/add`,
      {
        videoID,
      }
    );
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
    const result = await baseAxiosInstance().patch(
      `/playlists/${playlistID}/remove`,
      {
        videoID,
      }
    );
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  }
}
