<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello UniApp!')
</script>

<template>
  <view class="flex w-full min-h-screen flex-center">
    <text class="text-2xl">{{ title }}</text>
    <i class="ml-2 text-4xl i-ant-design-wechat text-teal-500"></i>
  </view>
</template>
