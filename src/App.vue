<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
</script>

<template>
  <!-- <div class="s">
    <router-view />
  </div> -->
  <ElConfigProvider :size="size" :z-index="zIndex">
    <app />
  </ElConfigProvider>
</template>

<style scoped>
.s {
  font-weight: 600;

  background: #d3e3fd;

  font-size: 33px;

  border: 1px solid rgb(51, 255, 255);
}
</style>
