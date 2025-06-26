import type { RouteRecordRaw } from 'vue-router'

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/home/index',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      icon: 'HomeFilled',
      title: '首页',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: true,
      isKeepAlive: true,
    },
  },
  {
    path: '/sys-manage/index',
    name: 'SysManage',
    component: () => import('@/views/sys-manage/index.vue'),
    meta: {
      icon: 'HomeFilled',
      title: '系统管理',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: true,
      isKeepAlive: true,
    },
  },
]
