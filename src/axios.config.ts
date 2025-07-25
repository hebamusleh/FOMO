import axios from "axios";
import { BASE_URL } from "./services/api";

axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["lang"] = "ar";

export const setAccessToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = token;
};