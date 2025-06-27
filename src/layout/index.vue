<script setup lang="ts">
import { useSettingsStore } from '@/store/modules/settings'
import DefaultLayout from '@/layout/layoutTemplate/default.layout.vue'
import TopLayout from '@/layout/layoutTemplate/top.layout.vue'
// 未来可继续引入更多布局组件
// import CustomLayout from './custom.layout.vue'

const settings = useSettingsStore()

// 所有布局组件注册表
const layoutMap: Record<string, any> = {
  classic: DefaultLayout,
  top: TopLayout,
  // custom1: CustomLayout,
  // ...
}
</script>

<template>
  <component :is="layoutMap[settings.layoutType] || DefaultLayout" />
</template>

<style lang="scss" scoped></style>
