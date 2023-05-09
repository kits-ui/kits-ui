# Button 按钮

常用操作按钮

## 基础用法

使用`color`、`type`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-button>default</k-button>
    <k-button color="#22c55e">绿色按钮</k-button>
    <k-button color="#6b7280">灰色按钮</k-button>
    <k-button color="#eab308">黄色按钮</k-button>
    <k-button color="#ef4444">红色按钮</k-button>
  </div>
  <div style="margin-bottom:20px;">
    <k-button type="line">default</k-button>
    <k-button color="#22c55e" type="line">绿色按钮</k-button>
    <k-button color="#6b7280" type="line">灰色按钮</k-button>
    <k-button color="#eab308" type="line">黄色按钮</k-button>
    <k-button color="#ef4444" type="line">红色按钮</k-button>
  </div>
  <div style="margin-bottom:20px;">
    <k-button type="insert">insert</k-button>
    <k-button color="#22c55e" type="insert" direction="left">左->右</k-button>
    <k-button color="#6b7280" type="insert" direction="right">右->左</k-button>
    <k-button color="#eab308" type="insert" direction="top">上->下</k-button>
    <k-button color="#ef4444" type="insert" direction="bottom">下->上</k-button>
  </div>
</template>
```

:::

## 禁用状态

使用 `disabled` 属性来控制按钮是否为禁用。 该属性值为 Boolean 类型。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-button disabled>default</k-button>
    <k-button color="#22c55e" disabled>绿色按钮</k-button>
    <k-button color="#6b7280" disabled>灰色按钮</k-button>
    <k-button color="#eab308" disabled>黄色按钮</k-button>
    <k-button color="#ef4444" disabled>红色按钮</k-button>
  </div>
  <div style="margin-bottom:20px;">
    <k-button type="insert" disabled>insert</k-button>
    <k-button color="#22c55e" type="insert" direction="left" disabled>左->右</k-button>
    <k-button color="#6b7280" type="insert" direction="right" disabled>右->左</k-button>
    <k-button color="#eab308" type="insert" direction="top" disabled>上->下</k-button>
    <k-button color="#ef4444" type="insert" direction="bottom" disabled>下->上</k-button>
  </div>
</template>
```

:::

## 设置尺寸

使用 `size` 属性来定义按钮的具体尺寸。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-button disabled size="large">large</k-button>
    <k-button disabled size="default">default</k-button>
    <k-button disabled size="small">small</k-button>
    <k-button type="insert" direction="left" size="large">large</k-button>
    <k-button type="insert" direction="left" size="default">default</k-button>
    <k-button type="insert" direction="left" size="small">small</k-button>
    <k-button type="line" size="large">large</k-button>
    <k-button type="line" size="default">default</k-button>
    <k-button type="line" size="small">small</k-button>
  </div>
</template>
```

:::

---

# Button API

## Button 属性

| 属性名    | 说明                                | 类型      | 可选值                   | 默认值  |
| --------- | ----------------------------------- | --------- | ------------------------ | ------- |
| color     | 按钮背景色(支持渐变)                | `string`  | -----------------        | ---     |
| type      | 按钮类型(insert: 内部动效)          | `string`  | insert/line              | default |
| direction | 配合 insert 使用,控制动效的移动方向 | `string`  | top/ bottom/ left/ right | bottom  |
| disabled  | 按钮是否为禁用状态                  | `boolean` | false/ true              | false   |
| size      | 设置按钮尺寸                        | `string`  | large/default/small      | default |
