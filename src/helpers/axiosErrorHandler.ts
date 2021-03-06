import { AxiosError } from "axios";

export function axiosErrorHandler(
  error: AxiosError<{ message: string } | undefined>
) {
  const errorMessageFromServer = error.response?.data?.message;
  if (errorMessageFromServer) {
    return errorMessageFromServer as string;
  }
  switch (error.response?.status) {
    case 400:
      return "Data validation failed.";
    case 401:
      return "You need to login.";
    case 403:
      return "Prohibited action.";
    case 404:
      return "Requested data not found.";
    case 408:
      return "Request timeout. Try again later.";
    default:
      return "Something went wrong.";
  }
}
