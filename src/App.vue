<script setup lang="ts">
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const size = ref('default')
</script>

<template>
  <ElConfigProvider :size="size" :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>

<style scoped>

</style>
