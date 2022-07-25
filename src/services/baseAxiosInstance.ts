import axios from "axios";

export function baseAxiosInstance() {
  return axios.create({
    baseURL: "https://roc8-b-anime-flix.vercel.app/api",
  });
}
