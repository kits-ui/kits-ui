# Image 组件

## 基础用法

:::demo

```vue
<template>
  <div class="block" v-for="fit in fits" :key="fit">
    <u-image style="width: 100px; height: 100px" :src="url" :fit="fit"></u-image>
    <span class="general-span">{{ fit }}</span>
  </div>
</template>

<script setup lang="ts">
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
const url =
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg';
</script>
```

:::

## 大图预览

:::demo

```vue
<template>
  <div class="block">
    <u-image style="width: 100px; height: 100px" :src="url1" :preview="previewList"></u-image>
  </div>
  <div class="block">
    <u-image style="width: 100px; height: 100px" :src="url2" :preview="previewList"></u-image>
  </div>
</template>

<script setup lang="ts">
const url1 = 'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg';
const url2 =
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg';
const previewList = [
  'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg',
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg',
];
</script>
```

:::

# Image API

## Image 属性

| 属性名  | 说明                                        | 类型     | 可选值                                     | 默认值 |
| ------- | ------------------------------------------- | -------- | ------------------------------------------ | ------ |
| src     | 图片来源路径                                | `string` | ------------------------                   | -      |
| fit     | 图片适应容器框的方式，同原生 object-fit     | `string` | fill / contain / cover / none / scale-down | -      |
| preview | 开启大图预览功能,同时需要传入需要预览的列表 | `Array`  | ------------------------                   | -      |
