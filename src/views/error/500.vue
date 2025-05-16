<template>
  <div class="error-page">
    <h1>500</h1>
    <h2>抱歉，服务器出现了问题</h2>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// 500 服务器内部错误页面
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
