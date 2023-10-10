import axios from "axios";

const instance = axios.create({
  baseURL: "http://188.166.210.217:8000",
  // baseURL: "https://localhost:7091",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
