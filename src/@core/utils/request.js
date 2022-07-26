import axios from "axios";
import APP_CONFIG from "../constants/app-config";
import { serverError } from "../constants/toasts-messages";

// export function getLocalAccessToken() {
//   const accessToken = localStorage.getItem("token");
//   return accessToken;
// }

const instance = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": "*",
    // withCredentials: false,
  },
});

instance.interceptors.request.use(
  (config) => {
    // const token = getLocalAccessToken();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    try {
      //   const token = getLocalAccessToken();
      if (err.code === "ERR_NETWORK" || err.code === "ECONNABORTED") {
        return err.code;
      }
      if (err.response.status === 503) {
        serverError();
      }
      if (err.response.status === 503) {
        serverError();
      }

      //   if (err.response.status === 401) {
      //     console.log("checked user Auth", err.response.status);
      //     logout();
      //   }
      return;
    } catch (_error) {
      // return Promise.reject(_error);
    }
  }
);

export default instance;
