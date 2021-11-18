import axios from "axios";

// export const baseURL = "http://localhost:3001";
export const baseURL = "https://dfbsgjh96zmqv.cloudfront.net";

export const axiosInstance = axios.create({
  baseURL,
});
