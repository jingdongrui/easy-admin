import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

/** 安装初始化 pinia */
export function initPinia(app: App) {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate); // 持久化插件
  app.use(pinia);
}
