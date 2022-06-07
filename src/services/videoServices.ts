import baseAxiosInstance from "./baseAxiosInstance";

export async function likeVideo(
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/video/like", {
      videoID,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result.data);
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
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/video/dislike", {
      videoID,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result.data);
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
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/video/remove-like", {
      videoID,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result.data);
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
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch("/video/remove-dislike", {
      videoID,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result.data);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  }
}
