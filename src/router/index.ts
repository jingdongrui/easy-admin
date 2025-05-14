import type { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const mode: "hash" | "history" = import.meta.env.VITE_ROUTER_MODE;
const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
};

export const router = createRouter({
  history: routerMode[mode](),
  routes: [],
});
/** 安装 Vue Router */
export async function initRouter(app: App) {
  app.use(router);
  await router.isReady();
}
