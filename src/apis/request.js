import Axios from "axios";

let baseUrl = "http://127.0.0.1:8081/v1/";

console.log(baseUrl);
const axios = Axios.create({ baseURL: baseUrl });

/**
 * Axios interceptor for adding the Authorization header to every request.
 *
 * This gets the token from localStorage and adds it to the Authorization header.
 */

axios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("session-token");
    // if (token) {
    //   config.headers = { ...config.headers, Authorization: `${token}` };
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
