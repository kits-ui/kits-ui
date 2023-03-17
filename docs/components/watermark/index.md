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

# Watermark API

## Watermark 属性

| 属性名  | 说明       | 类型     | 可选值      | 默认值 |
| ------- | ---------- | -------- | ----------- | ------ |
| width   | 水印的宽度 | `string` | ----------- | 100vw  |
| height  | 水印的高度 | `string` | ----------- | 100vh  |
| options | 水印配置项 | `Object` | ---------   | -      |

## options 属性

| 属性名        | 说明                                              | 类型     | 可选值   | 默认值  |
| ------------- | ------------------------------------------------- | -------- | -------- | ------- |
| waterMarkText | 水印的内容                                        | `string` | -------- | kits-ui |
| textColor     | 水印的颜色(仅支持单词所支持的颜色,例如 red black) | `string` | -        | black   |
| textWidth     | 水印内容的宽度                                    | `string` | -        | 150     |
| textHeight    | 水印内容的高度                                    | `string` | -        | 100     |
| opacity       | 水印内容的透明度(0 - 1)                           | `number` | -        | 0.5     |
| rotate        | 水印内容的旋转角度                                | `string` | -        | -30deg  |
