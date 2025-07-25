<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useSettingsStore } from '@/store/modules/settings'

const settings = useSettingsStore()
const themeStyle = computed(() => ({
  '--primary-color': settings.primaryColor,
}))
const size = ref('default')
</script>

<template>
  <ElConfigProvider :size="size" :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>

<style scoped>

</style>
