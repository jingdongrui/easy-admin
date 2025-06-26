<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'

const settings = useSettingsStore()
const color = ref(settings.primaryColor)
</script>

<template>
  <div>
    <div style="margin-bottom: 16px;">
      <button @click="settings.setLayoutType('classic')">
        左侧菜单布局
      </button>
      <button @click="settings.setLayoutType('top')">
        顶部菜单布局
      </button>
      <button @click="settings.setTheme('light')">
        浅色主题
      </button>
      <button @click="settings.setTheme('dark')">
        深色主题
      </button>
      <input v-model="color" type="color" style="vertical-align: middle; margin-left: 8px;" @change="settings.setPrimaryColor(color)">
      <span style="margin-left: 8px;">主题色</span>
    </div>
    <div>this is home sys-manage</div>
  </div>
</template>

<style scoped lang="scss"></style>
