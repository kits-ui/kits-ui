# Button 按钮

常用操作按钮

## 基础用法

:::demo 使用`color`、`hoverColor`、`type`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <u-button>default</u-button>
    <u-button color="#22c55e" hoverColor="#4ade80">绿色按钮</u-button>
    <u-button color="#6b7280" hoverColor="#9ca3af">灰色按钮</u-button>
    <u-button color="#eab308 " hoverColor="#facc15">黄色按钮</u-button>
    <u-button color="#ef4444" hoverColor="#f87171">红色按钮</u-button>
  </div>
  <div style="margin-bottom:20px;">
    <u-button type="insert">insert</u-button>
    <u-button color="#22c55e" hoverColor="#4ade80" type="insert">绿色按钮</u-button>
    <u-button color="#6b7280" hoverColor="#9ca3af" type="insert">灰色按钮</u-button>
    <u-button color="#eab308 " hoverColor="#facc15" type="insert">黄色按钮</u-button>
    <u-button color="#ef4444" hoverColor="#f87171" type="insert">红色按钮</u-button>
  </div>
</template>
```

<!-- <demo src="../../demo/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo> -->
