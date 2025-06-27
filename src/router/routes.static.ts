import type { RouteRecordRaw } from 'vue-router'

// 自动导入 modules 目录下所有 ts 文件
const modules = import.meta.glob('./modules/*.ts', { eager: true })

// 合并所有模块的默认导出
const children: RouteRecordRaw[] = Object.values(modules)
  .map((mod: any) => mod.default)
  .flat()

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children,
  },
]
