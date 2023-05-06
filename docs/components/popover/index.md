# Popover 气泡框

气泡框

## 基础用法

基础的函数用法

:::demo

```vue
<template>
  <div style="width: 60%;display: flex;justify-content:space-around;">
    <k-popover position="top" theme="light">
      这是click触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>click button</k-button>
      </template>
    </k-popover>
    <k-popover position="right" theme="light" trigger="hover">
      这是hover触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>hover button</k-button>
      </template>
    </k-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>
```

:::

---

# Popover API

## Popover 属性

| 属性名  | 说明     | 类型      | 可选值           | 默认值 |
| ------- | -------- | --------- | ---------------- | ------ |
| trigger | 触发方式 | `string`  | hover click----- | click  |
| arrow   | 触发方式 | `boolean` | ---------------- | true   |
| width   | 触发方式 | `number`  | ---------------- | 150    |
| title   | 触发方式 | `string`  | ---------------- | -----  |

## Popover 属性

| 名称      | 说明                        | 参数 |
| --------- | --------------------------- | ---- |
| default   | 自定义菜单内容              | -    |
| reference | 触发 Popover 显示的元素内容 | -    |
