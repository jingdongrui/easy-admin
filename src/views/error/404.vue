<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>抱歉，您访问的页面不存在</h2>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// 404 页面不存在错误页面
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 6rem;
    color: #909399;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #606266;
    margin-bottom: 2rem;
  }

  a {
    color: #409eff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
