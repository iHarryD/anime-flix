import axios from "axios";

export default function baseAxiosInstance() {
  return axios.create({
    baseURL: "https://b-anime-flix.vercel.app/api",
  });
}
