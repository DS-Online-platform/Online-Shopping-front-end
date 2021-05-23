import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/online",
  headers,
});

export default axiosInstance;
