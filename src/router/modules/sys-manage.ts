import type { RouteRecordRaw } from 'vue-router'

const sysManageRoutes: RouteRecordRaw[] = [
  {
    path: 'sys-manage/index',
    name: 'SysManage',
    component: () => import('@/views/sys-manage/index.vue'),
    meta: {
      icon: 'HomeFilled',
      title: '系统管理',
      isAffix: true,
      isKeepAlive: true,
    },
  },
]

export default sysManageRoutes
