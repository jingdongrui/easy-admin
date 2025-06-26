import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    layoutType: 'classic', // 'classic' | 'top'
    theme: 'light', // 'light' | 'dark' | 'custom'
    primaryColor: '#18a058', // 主题主色
  }),
  actions: {
    setLayoutType(type: 'classic' | 'top') {
      this.layoutType = type
    },
    setTheme(theme: 'light' | 'dark' | 'custom') {
      this.theme = theme
    },
    setPrimaryColor(color: string) {
      this.primaryColor = color
    },
  },
})
