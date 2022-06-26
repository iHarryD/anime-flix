import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getHistory(
  loadingState?: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/history");
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

export async function getAllHistoryVideos(
  loadingState?: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/history/fetch-videos");
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

export async function addToHistory(
  videoID: string,
  loadingState?: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().post(
      `/history?videoID=${videoID}`
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

export async function deleteHistory(
  loadingState?: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().delete("/history");
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
