<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'
import { staticRoutes } from '@/router/routes.static'
import { generateMenus } from '@/utils/menu'

const settings = useSettingsStore()
const themeStyle = computed(() => ({
  '--primary-color': settings.primaryColor,
}))
const menus = generateMenus(staticRoutes[0].children || [])
</script>

<template>
  <div class="layout-classic" :style="themeStyle">
    <aside class="sidebar">
      <ul>
        <li v-for="menu in menus" :key="menu.path">
          <span>{{ menu.icon ? '🟢' : '' }}{{ menu.title }}</span>
        </li>
      </ul>
    </aside>
    <div class="main">
      <header class="header">
        顶部
      </header>
      <section class="content">
        <slot />
      </section>
    </div>
  </div>
</template>

<style scoped>
.layout-classic {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 200px;
  background: var(--primary-color, #18a058);
  color: #fff;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  height: 60px;
  background: #f5f5f5;
}
.content {
  flex: 1;
  background: #fff;
  padding: 16px;
}
</style>
