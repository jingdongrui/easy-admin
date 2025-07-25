<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settings = useSettingsStore()
const themeStyle = computed(() => ({
  '--primary-color': settings.primaryColor,
}))
</script>

<template>
  <div class="layout-classic" :style="themeStyle">
    <aside class="sidebar">
      侧边栏
    </aside>
    <div class="main">
      <header class="header">
        顶部
      </header>
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
