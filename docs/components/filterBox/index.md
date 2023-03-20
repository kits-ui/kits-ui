# 搜索面板

## 基础用法

:::demo

```vue
<template>
  <k-filter-box :filterData="data" @onSelectData="onSelectData"></k-filter-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
  {
    id: 'f9ff118f9bd94f2ab6b1afdcef7efa16',
    name: '分类1',
    childList: [
      {
        id: '9fc33fbc7503403dbbc58ac1c11789da',
        title: '标签1-1',
        name: '标签1-1',
      },
    ],
  },
  {
    id: '45446ae2aecf4a10b40df4253d6dece4',
    name: '分类2',
    childList: [
      {
        id: '259736e9b406451f9bd3eb85fe83155e',
        title: '标签2-1',
        name: '标签2-1',
      },
    ],
  },
  {
    id: 'd6f9f70df6184bc8ba29dd50d8841d89',
    name: '分类3',
    childList: [
      {
        id: '174622ef5f0f11ec94b70242ac140004',
        title: '标签3-1',
        name: '标签3-1',
      },
      {
        id: 'e9679319beb74e208b72b55f3a0fca6e',
        title: '标签3-2',
        name: '标签3-2',
      },
    ],
  },
  {
    id: '6d22479b128240f4be6dd7885e4d884c',
    name: '分类4',
    childList: [
      {
        id: 'dcb0a6daa7ef11ebbfb2000c299a2318',
        title: '标签4-1',
        name: '标签4-1',
      },
      {
        id: '345cc5f5b85411eb91ee000c299a2318',
        title: '标签4-2',
        name: '标签4-2',
      },
      {
        id: 'd88fd45d5f0c11ec94b70242ac140004',
        title: '标签4-3',
        name: '标签4-3',
      },
      {
        id: 'c6689a84ed2111ec8052000c299a2318',
        title: '标签4-4',
        name: '标签4-4',
      },
      {
        id: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: '标签4-5',
        name: '标签4-5',
      },
      {
        id: '6ebc6b8b5f0e11ec94b70242ac140004',
        title: '标签4-6',
        name: '标签4-6',
      },
      {
        id: '42733678ed2211ec8052000c299a2318',
        title: '标签4-7',
        name: '标签4-7',
      },
    ],
  },
]);

const onSelectData = (value) => {
  console.log(value);
};
</script>
```

:::

## Filter API

## 属性

| 属性名     | 说明              | 类型    | 可选值      | 默认值 |
| ---------- | ----------------- | ------- | ----------- | ------ |
| filterData | filterData 的数据 | `Array` | ----------- | -      |

## Events

| 方法         | 说明                         | 参数 |
| ------------ | ---------------------------- | ---- |
| onSelectData | 获取所选标签的 id 集合的回调 | --   |
