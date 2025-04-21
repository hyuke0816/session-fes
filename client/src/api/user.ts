import { API_PREFIX } from "../utils/Constants";
import HttpClient from "../utils/HttpClient";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.xsrfCookieName = "XSRF-Token";
axios.defaults.xsrfHeaderName = "X-XSRF-Token";

let requestUrl = "";

// TODO: 로그인 요청
export const postLogin = (id: string, pw: string) => {
  requestUrl = `${API_PREFIX}/login`;
  return HttpClient.post(requestUrl, { id, pw });
};
