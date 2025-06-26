<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settings = useSettingsStore()
const themeStyle = computed(() => ({
  '--primary-color': settings.primaryColor,
}))
</script>

<template>
  <div class="layout-top" :style="themeStyle">
    <header class="header">
      顶部菜单
    </header>
    <section class="content">
      <slot />
    </section>
  </div>
</template>

<style scoped>
.layout-top {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  height: 60px;
  background: var(--primary-color, #18a058);
  color: #fff;
}
.content {
  flex: 1;
  background: #fff;
  padding: 16px;
}
</style>
