<!-- <script setup lang="ts"></script> -->

<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const layoutThemeColor = useStorage('layout-theme-color', '#243db9') // 默认主题色
</script>

<template>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
  </div>

  <div class="mb-4">
    <el-button plain>
      Plain
    </el-button>
    <el-button type="primary" plain>
      Primary
    </el-button>
    <el-button type="success" plain>
      Success
    </el-button>
    <el-button type="info" plain>
      Info
    </el-button>
    <el-button type="warning" plain>
      Warning
    </el-button>
    <el-button type="danger" plain>
      Danger
    </el-button>
  </div>

  <div class="mb-4">
    <el-button round>
      Round
    </el-button>
    <el-button type="primary" round>
      Primary
    </el-button>
    <el-button type="success" round>
      Success
    </el-button>
    <el-button type="info" round>
      Info
    </el-button>
    <el-button type="warning" round>
      Warning
    </el-button>
    <el-button type="danger" round>
      Danger
    </el-button>
  </div>
</template>
