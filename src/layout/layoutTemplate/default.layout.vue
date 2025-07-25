<script setup lang="ts">
</script>

<template>
  <div class="default_layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.default_layout {
  // display: flex;
  height: 100vh;
  background: #fff;
}
</style>
