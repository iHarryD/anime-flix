import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getHistory(
  token: string,
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().get("/history/fetch", {
      headers: {
        authorization: token,
      },
    });
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

export async function deleteHistory(
  token: string,
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().delete("/history/clear", {
      headers: {
        authorization: token,
      },
    });
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
