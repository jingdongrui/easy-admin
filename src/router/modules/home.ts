import type { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: 'home/index',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      icon: 'HomeFilled',
      title: '首页',
      isAffix: true,
      isKeepAlive: true,
    },
  },
]

export default homeRoutes
