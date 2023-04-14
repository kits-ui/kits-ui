# Tooltip 文字提示

## 基础用法

使用`color`、`type`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
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

---

# Tooltip API

## Tooltip 属性

| 属性名  | 说明     | 类型     | 可选值            | 默认值 |
| ------- | -------- | -------- | ----------------- | ------ |
| content | 文字内容 | `string` | ----------------- | ---    |
