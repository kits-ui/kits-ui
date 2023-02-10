# notification 通知

## 基础用法

:::demo

```vue
<template>
  <u-notification>
    <template #default="scope"><u-button type="insert">自定义按钮</u-button></template>
  </u-notification>
  <u-notification body="从右到左" dir="rtl">
    <template #default="scope"><u-button type="insert">从右到左</u-button></template>
  </u-notification>
  <u-notification body="从左到右" dir="ltr">
    <template #default="scope"><u-button type="insert">从左到右</u-button></template>
  </u-notification>
  <u-notification dir="ltr"></u-notification>
</template>
```

:::

# notification API

## notification 属性

| 属性名 | 说明                                                                       | 类型               | 可选值 | 默认值 |
| ------ | -------------------------------------------------------------------------- | ------------------ | ------ | ------ |
| dir    | 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左） | `string`           | -      | -      |
| lang   | 指定通知中所使用的语言。                                                   | `string`           | -      | -      |
| body   | 通知中额外显示的字符串                                                     | `string`           | -      | -      |
| tag    | 赋予通知一个 ID，以便在必要的时候对通知进行刷新、替换或移除。              | ` string` `number` | -      | -      |
| icon   | 一个图片的 URL，将被用于显示通知的图标。                                   | `string`           | -      | -      |
