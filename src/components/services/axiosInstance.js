import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8082/Shopping_Platform/rest/",
});

export default axiosInstance;
