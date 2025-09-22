import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chattrix-backend-tdbp.onrender.com",
  withCredentials: true,
});
