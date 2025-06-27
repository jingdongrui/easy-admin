import type { RouteRecordRaw } from 'vue-router'

export interface MenuItem {
  path: string
  title?: string
  icon?: string
  children?: MenuItem[]
}

export function generateMenus(routes: RouteRecordRaw[]): MenuItem[] {
  return routes
    .filter(route => !route.meta?.isHide)
    .map(route => ({
      path: route.path,
      title: route.meta?.title as string | undefined,
      icon: route.meta?.icon as string | undefined,
      children: route.children ? generateMenus(route.children) : undefined,
    }))
}
