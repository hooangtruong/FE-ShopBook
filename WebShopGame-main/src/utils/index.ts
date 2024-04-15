import axios, { AxiosRequestHeaders } from "axios";
import { API } from "@/lib/constants";
// interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
//   authorization: string;
// }

const instance = axios.create({
  baseURL: API,
  timeout: 5000,
});

export default instance;

instance.interceptors.request.use(
  function (config: any) {
    const dataToken = window.localStorage.getItem("token");
    let token = dataToken?.slice(1, -1);
    config.headers = {
      token: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
