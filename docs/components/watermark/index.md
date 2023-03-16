# Watermark 水印组件

## 基础用法

基础的水印用法

:::demo

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%"></k-watermark>
  </div>
</template>
```

:::

## 配置项

使用配置的水印

:::demo 使用 options 配置项,来更改水印的角度(rotate) 间隔(textWidth, textHeight) 颜色(textColor) 透明度(opacity) 以及 文字内容(waterMarkText)

```vue
<template>
  <div class="block" style="width: 100%; height: 400px;">
    <k-watermark width="100%" height="100%" :options="options" />
  </div>
</template>

<script setup lang="ts">
const options = {
  waterMarkText: '6666666666',
  textColor: 'red',
  textWidth: 170,
  textHeight: 80,
  opacity: 0.1,
  rotate: '-20deg',
};
</script>
```

:::

---
