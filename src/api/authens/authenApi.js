import { request } from "../requestApi";
// import { notification } from "ant-design-vue";

const SERVICE = "/authen/api/Authen";

export function Login(loginModel) {
  const url = `${SERVICE}/Login`;
  return request("POST", url, loginModel, false);
}

export async function GetAll() {
  const url = `${SERVICE}/AuthenGetAll`;
  // notification.warning({
  //   message: "Notification Title",
  //   description:
  //     "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  //   onClick: () => {
  //     console.log("Notification Clicked!");
  //   },
  //   style: { border: "1px solid red" },
  // });
  const result = await request("POST", url, {}, true);
  return result;
}

export function Register(registerModel) {
  const url = `${SERVICE}/Register`;

  return request("POST", url, registerModel, false);
}

export function Logout() {
  const url = `${SERVICE}/Logout`;
  const result = request("POST", url, null, true);
  if (result.status === 200) {
    console.log("set token logout");
    localStorage.setItem("AccessToken", null);
    localStorage.setItem("RefreshToken", null);
  }
  return result;
}
