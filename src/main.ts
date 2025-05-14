import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { initPinia } from "./store";
import { initRouter } from "./router";

async function setupApp() {
  const app = createApp(App);

  // 初始化 pinia
  initPinia(app);

  // 初始化 vue-router
  await initRouter(app);

  app.mount("#app");
}

setupApp();
