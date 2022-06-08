import { Dispatch, SetStateAction } from "react";
import baseAxiosInstance from "./baseAxiosInstance";

export async function getWatchLater(
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/watch-later/fetch");
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err as object);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function addToWatchLater(
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/watch-later/add?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) successCallback(result.data);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err as object);
  }
}

export async function removeFromWatchLater(
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/watch-later/remove?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) successCallback(result.data);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err as object);
  }
}
