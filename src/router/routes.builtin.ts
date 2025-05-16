import type { RouteRecordRaw } from "vue-router";

/* 页面中的一些固定路由，错误页等 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    redirect: "/appRoot",
    children: []
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error/403.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue")
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/500.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/404"
  }
];
