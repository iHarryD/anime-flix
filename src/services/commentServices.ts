import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getComments(
  videoID: string,
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get(`/videos/${videoID}/comments`);
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function postComment(
  videoID: string,
  comment: string,
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().post(
      `/videos/${videoID}/comments`,
      {
        comment,
      }
    );
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}
