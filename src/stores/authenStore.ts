import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const authenStore = defineStore("user", () => {
  const isLogin = useLocalStorage("isLogin", false);

  function userLogin() {
    isLogin.value = true;
  }

  function userLogout() {
    localStorage.setItem("AccessToken", "");
    localStorage.setItem("RefreshToken", "");
    isLogin.value = false;
  }

  return { isLogin, userLogin, userLogout };
});
