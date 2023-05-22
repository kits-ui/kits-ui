# Message 消息提示

消息提示

## 基础用法

:::demo

```vue
<template>
  <k-button color="#22c55e" @click="clickMe">success</k-button>
  <k-button color="#6b7280" @click="clickMe3">info</k-button>
  <k-button color="#eab308" @click="clickMe2">warning</k-button>
  <k-button color="#ef4444" @click="clickMe4">error</k-button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// import kitsUi from 'kits-ui';
// const clickMe = () => {
//   KitsUI.Message.value.success('success');
// };
// const clickMe2 = () => {
//    KitsUI.Message.value.warning('warning');
// };
// const clickMe3 = () => {
//    KitsUI.Message.value.info('info');
// };
// const clickMe4 = () => {
//    KitsUI.Message.value.error('error');
// };
</script>
<style scoped></style>
```

:::

---

:::demo

```vue

```

:::

# Message API

## Message 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ---- | ---- | ------ | ------ |

## Message 插槽

| 名称 | 说明 |
| ---- | ---- |
