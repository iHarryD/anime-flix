import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { baseAxiosInstance } from "./baseAxiosInstance";

export async function fetchAllVideos(
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/video/fetch-all");
    if (result.status === 200 && successCallback) successCallback(result);
  } catch (err: unknown) {
    if (failureCallback) failureCallback(err as object);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function fetchVideo(
  videoID: string,
  loadingState?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get(
      `/video/fetch?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function likeVideo(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/video/like?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  }
}

export async function dislikeVideo(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/video/dislike?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  }
}

export async function removeLike(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/video/remove-like?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  }
}

export async function removeDislike(
  videoID: string,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/video/remove-dislike?videoID=${videoID}`
    );
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  }
}
