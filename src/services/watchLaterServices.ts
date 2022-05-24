import baseAxiosInstance from "./baseAxiosInstance";

export async function getWatchLater(
  token: string,
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: any) => void,
  failureCallback?: (err: object) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().get("/watch-later/fetch", {
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
