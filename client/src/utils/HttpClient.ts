import { persistor } from "../store";
import axios, { AxiosResponse } from "axios";

const baseURL = (() => {
  return process.env.REACT_APP_API_URL || "http://localhost:8080";
})();

const HttpClient = axios.create({
  baseURL,
  timeout: 100000,
  withCredentials: true,
});

export default HttpClient;
