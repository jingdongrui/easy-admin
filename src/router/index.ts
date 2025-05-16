import type { App } from "vue";
import { type RouterHistory, createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { routes } from "./routes.builtin";

const { VITE_BASE_URL, VITE_ROUTER_MODE = "hash" } = import.meta.env;

const routerModeMap: Record<RouterMode, (base?: string) => RouterHistory> = {
  hash: createWebHashHistory,
  history: createWebHistory,
};

if (!(VITE_ROUTER_MODE in routerModeMap)) {
  throw new Error(`❌ Invalid router mode in .env ❌: ${VITE_ROUTER_MODE}`);
}

export const router = createRouter({
  history: routerModeMap[VITE_ROUTER_MODE](VITE_BASE_URL),
  routes: routes,
});
/** 安装 Vue Router */
export async function initRouter(app: App) {
  app.use(router);
  await router.isReady();
}
