import axios, { AxiosError } from "axios";
import { axiosErrorHandler } from "./axiosErrorHandler";

export function getErrorMessage(errorBody: unknown) {
  if (axios.isAxiosError(errorBody))
    return axiosErrorHandler(errorBody as AxiosError<{ message: string }>);
  if (errorBody instanceof Error) return errorBody.message;
  return "Something went wrong.";
}
