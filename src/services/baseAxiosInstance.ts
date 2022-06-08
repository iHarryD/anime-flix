import axios from "axios";

export function baseAxiosInstance() {
  return axios.create({
    baseURL: "http://127.0.0.1:3001/api",
  });
}
