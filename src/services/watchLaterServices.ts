import { AxiosError, AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getWatchLater(
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: any) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/watch-later/fetch");
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function getWatchLaterVideos(
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: any) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/watch-later/fetch-videos");
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err: any) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function addToWatchLater(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: any) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/watch-later/add?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) successCallback(result.data);
  } catch (err: any) {
    if (failureCallback) failureCallback(err);
  }
}

export async function removeFromWatchLater(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: any) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/watch-later/remove?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) successCallback(result.data);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err);
  }
}
