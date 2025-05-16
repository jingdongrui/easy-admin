<template>
  <div class="login-container">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-item">
          <input type="text" v-model="username" placeholder="用户名" />
        </div>
        <div class="form-item">
          <input type="password" v-model="password" placeholder="密码" />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  // TODO: 实现登录逻辑
  console.log("登录信息：", {
    username: username.value,
    password: password.value
  });
  // 登录成功后跳转到首页
  await router.push("/");
};
</script>

<style lang="scss" scoped>
$primary-color: #409eff;
$border-color: #dcdfe6;
$text-color: #303133;
$bg-color: #f5f7fa;

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $bg-color;

  .login-box {
    width: 400px;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      color: $text-color;
      margin-bottom: 2rem;
    }

    .form-item {
      margin-bottom: 1rem;

      input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid $border-color;
        border-radius: 4px;
        outline: none;
        transition: border-color 0.2s;

        &:focus {
          border-color: $primary-color;
        }
      }
    }
  }
}

input:focus {
  border-color: #409eff;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #66b1ff;
}
</style>
