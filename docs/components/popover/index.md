# Popover 气泡框

气泡框

## 基础用法

基础的函数用法

:::demo

```vue
<template>
   <k-popover title="点我干嘛呢？" trigger="click">
    <template #reference>
      <k-button type="insert">点我</k-button>
    </template>
  </k-popover>
  <k-popover title="摸我干嘛呢？" trigger="hover">
    <template #reference>
      <k-button type="insert">摸我</k-button>
    </template>
  </k-popover>
  <k-popover title="按住我干嘛呢？" trigger="longpress">
    <template #reference>
      <k-button type="insert">按住我</k-button>
    </template>
  </k-popover>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';

</script>
```

:::

---

# Popover API

| 方法名           | 说明                | 入参 | 出参 |     |
| ---------------- | ------------------- | ---- | ---- | --- |

## Popover 属性

| 属性名 | 说明               | 类型     | 可选值 | 默认值 |
| ------ | ------------------ | -------- | ------ | ------ |
| trigger | 触发方式               | `string` | hover click longpress   | click     |


## Popover 属性

| 名称 | 说明               | 参数 |
| ------ | ------------------ | -------- |
| default | 自定义菜单内容      |   -  |
| reference | 触发 Popover 显示的元素内容      |   -  |
