# Drawer 抽屉

## 基础用法

使用`k-drawer`来定义一个抽屉。

:::demo

```vue
<template>
  <div>
    <k-drawer v-model="isShow" :direction="direction">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </k-drawer>
    <k-button @click="showDrawer('top')">top to bottom</k-button>
    <k-button @click="showDrawer('right')">right to left</k-button>
    <k-button @click="showDrawer('bottom')">bottom to top</k-button>
    <k-button @click="showDrawer('left')">left to right</k-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref<boolean>(false);
const direction = ref<string>('');

const showDrawer = (value: string) => {
  direction.value = value;
  isShow.value = true;
};
</script>

<style scoped></style>
```

:::

---

# Drawer API

## Drawer 属性

| 属性名    | 说明             | 类型      | 可选值                | 默认值 |
| --------- | ---------------- | --------- | --------------------- | ------ |
| v-model   | 控制抽屉是否打开 | `boolean` | --------------------  | ----   |
| direction | 抽屉打开方向     | `string`  | top/bottom/left/right | right  |
