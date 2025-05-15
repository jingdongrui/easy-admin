<template>
  <div class="error-page">
    <h1>403</h1>
    <h2>抱歉，您没有访问该页面的权限</h2>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// 403 权限错误页面
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
    color: #f56c6c;
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