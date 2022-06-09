import axios from "axios";
import { axiosErrorHandler } from "./axiosErrorHandler";

export function getErrorMessage(errorBody: unknown) {
  if (axios.isAxiosError(errorBody)) return axiosErrorHandler(errorBody);
  if (errorBody instanceof Error) return errorBody.message;
  return "Something went wrong.";
}
