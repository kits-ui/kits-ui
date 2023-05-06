# Tooltip 文字提示

## 基础用法

使用`position` 属性来定义 tooltip 显示的方向。

:::demo

```vue
<template>
  <div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="我是左边提示" position="left">
        <k-button>left</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="我是上边提示" position="top">
        <k-button>top</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="我是右边提示" position="right">
        <k-button>right</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="我是下边提示" position="bottom">
        <k-button>bottom</k-button>
      </k-tooltip>
    </div>
  </div>
</template>
```

:::

## 箭头

使用 **arrow**属性来控制是否需要显示箭头
:::demo

```vue
<template>
  <div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="有箭头">
        <k-button>有箭头</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 10px">
      <k-tooltip content="没有箭头" :arrow="false">
        <k-button>没有箭头</k-button>
      </k-tooltip>
    </div>
  </div>
</template>
```

:::

## 主题

Tooltip 组件内置了两个主题：light 和 dark。自定义主题通过添加非内置类名来实现
::: tip

建议您使用自定义主题时不要使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素， 弹出箭头的样式需要单独设置，当它到渐变背景颜色时，会看起来很奇怪。
:::

:::demo 通过设置 theme 属性来修改主题，默认值为 dark.

```vue
<template>
  <div style="margin-bottom:20px;">
    <div style="display: inline-block;margin: 0 15px">
      <k-tooltip content="我是light主题" theme="light">
        <k-button>light</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 15px">
      <k-tooltip content="我是dark主题">
        <k-button>dark</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 15px">
      <k-tooltip content="我是自定义线性渐变主题" theme="custom1">
        <k-button>自定义主题线性渐变示例</k-button>
      </k-tooltip>
    </div>
    <div style="display: inline-block;margin: 0 15px">
      <k-tooltip content="我是自定义主题" theme="custom2">
        <k-button>自定义主题</k-button>
      </k-tooltip>
    </div>
  </div>
</template>
<style>
.k_tooltip.custom1 {
  --k-tooltip-bg: linear-gradient(135deg, #c8df8bf8 10%, #2bc0ac 100%);
}
.k_tooltip.custom2 {
  --k-tooltip-bg: #ddf8f4;
}
</style>
```

:::

---

# Tooltip API

## Tooltip 属性

| 属性名   | 说明             | 类型      | 可选值                | 默认值 |
| -------- | ---------------- | --------- | --------------------- | ------ |
| content  | 文字内容         | `string`  | -----------------     | ---    |
| position | 提示框显示发方向 | `string`  | top/right/bottom/left | top    |
| theme    | 提示框的主题     | `string`  | -----------------     | dark   |
| arrow    | 是否显示箭头     | `boolean` | -----------------     | true   |
