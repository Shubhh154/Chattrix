import axios from "axios";

export const axiosInstance = axios.create({
  //baseURL: "https://chattrix-backend-tdbp.onrender.com",
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"
  withCredentials: true,
});
