import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./plugins/router.js";

import { createPinia } from "pinia";
const pinia = createPinia();

import setupInterceptors from "./api/setupInterceptors";
setupInterceptors();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
