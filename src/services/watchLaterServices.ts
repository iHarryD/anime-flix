import baseAxiosInstance from "./baseAxiosInstance";

export async function getWatchLater(
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().get("/watch-later/fetch");
    if (result.status === 200 && successCallback) {
      successCallback(result.data);
    }
  } catch (err: unknown) {
    if (failureCallback) {
      failureCallback(err as object);
    }
    console.log(err);
  } finally {
    loadingState(false);
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

export async function removeFromWatchLater(
  videoID: string,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    const result = await baseAxiosInstance().patch(
      `/watch-later/remove?videoID=${videoID}`
    );
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
