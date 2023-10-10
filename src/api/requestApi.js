import axiosInstance from "./baseApi";
import { Notification } from "../helpers/notification";
import { authenStore } from "../stores/authenStore";

const getToken = function () {
  return localStorage.getItem("AccessToken");
};

export async function request(method, url, data, auth = false) {
  const headers = {};
  if (auth) {
    headers["Authorization"] = `Bearer ${getToken()}`;
  }
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      headers,
    });
    return response;
  } catch (err) {
    console.log("err ==> ", err);

    if (err.response.status === 500) {
      if (err.response.data.message == "Invalid client request") {
        console.log("Token Expire");
        localStorage.setItem("targetUrl", window.location.pathname);

        const userAuthen = authenStore();
        userAuthen.userLogout();
        window.location.href = "/401page";
      } else {
        Notification("error", "Notification error", err.response.data.message);
      }
    }

    return err;
  }
}
