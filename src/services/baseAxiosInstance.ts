import axios from "axios";

export function baseAxiosInstance() {
  return axios.create({
    baseURL: "https://b-anime-flix.vercel.app/api",
  });
}
