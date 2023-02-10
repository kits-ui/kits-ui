# 搜索面板

## 基础用法

:::demo 使用 `onSelectData` 来接收所选标签的信息。

```vue
<template>
  <u-filter-box :filterData="data" :isClean="isClean" @onSelectData="onSelectData"></u-filter-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isClean = ref(true);
const data = ref([
  {
    id: 'f9ff118f9bd94f2ab6b1afdcef7efa16',
    parentId: null,
    name: 'aa',
    childList: [
      {
        id: '9fc33fbc7503403dbbc58ac1c11789da',
        parentId: '0',
        title: 'aaaaa66',
        name: 'aaaaaa',
      },
    ],
  },
  {
    id: '45446ae2aecf4a10b40df4253d6dece4',
    parentId: null,
    name: 'bb',
    childList: [
      {
        id: '259736e9b406451f9bd3eb85fe83155e',
        parentId: '0',
        title: 'bbbb',
        name: 'bbbb',
      },
    ],
  },
  {
    id: 'd6f9f70df6184bc8ba29dd50d8841d89',
    parentId: null,
    name: 'cc',
    childList: [
      {
        id: 'e9679319beb74e208b72b55f3a0fca6e',
        parentId: '0',
        title: 'cccc',
        name: 'cccc',
      },
    ],
  },
  {
    id: '6d22479b128240f4be6dd7885e4d884c',
    parentId: null,
    name: 'dd',
    childList: [
      {
        id: 'dcb0a6daa7ef11ebbfb2000c299a2318',
        parentId: '0',
        title: 'da',
        name: 'da',
      },
      {
        id: '345cc5f5b85411eb91ee000c299a2318',
        parentId: '0',
        title: 'db',
        name: 'db',
      },
      {
        id: 'd88fd45d5f0c11ec94b70242ac140004',
        parentId: '612b28fdb85411eb91ee000c299a2318',
        title: 'dc-a',
        name: 'dc',
      },
      {
        id: 'c6689a84ed2111ec8052000c299a2318',
        parentId: '0',
        title: 'dd',
        name: 'dd',
      },
      {
        id: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        parentId: '0',
        title: 'de',
        name: 'de',
      },
      {
        id: '6ebc6b8b5f0e11ec94b70242ac140004',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'df-a',
        name: 'df',
      },
      {
        id: '42733678ed2211ec8052000c299a2318',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'dg-a',
        name: 'dg',
      },
      {
        id: '796e392f5f0e11ec94b70242ac140004',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'dh-a',
        name: 'dh',
      },
      {
        id: 'b8c1aa45ed2211ec8052000c299a2318',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'di-a',
        name: 'di',
      },
      {
        id: '612b28fdb85411eb91ee000c299a2318',
        parentId: '0',
        title: 'dj',
        name: 'dj',
      },
      {
        id: '8990cdd15f0e11ec94b70242ac140004',
        parentId: '345cc5f5b85411eb91ee000c299a2318',
        title: 'dk-a',
        name: 'dk',
      },
      {
        id: '000db46ced2311ec8052000c299a2318',
        parentId: '0',
        title: 'dl',
        name: 'dl',
      },
      {
        id: 'f5e40f8c5f0e11ec94b70242ac140004',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'dm-a',
        name: 'dm',
      },
      {
        id: '146f518fed2311ec8052000c299a2318',
        parentId: '0',
        title: 'dn',
        name: 'dn',
      },
      {
        id: '174622ef5f0f11ec94b70242ac140004',
        parentId: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: 'do-a',
        name: 'do',
      },
    ],
  },
]);

const onSelectData = (value) => {
  console.log(value);
};
</script>
```
