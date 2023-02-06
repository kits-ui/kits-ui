# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <UButton>default</UButton>
    <UButton color="#22c55e" hoverColor="#4ade80">绿色按钮</UButton>
    <UButton color="#6b7280" hoverColor="#9ca3af">灰色按钮</UButton>
    <UButton color="#eab308 " hoverColor="#facc15">黄色按钮</UButton>
    <UButton color="#ef4444" hoverColor="#f87171">红色按钮</UButton>
  </div>
  <div style="margin-bottom:20px;">
    <UButton type="insert">insert</UButton>
    <UButton color="#22c55e" hoverColor="#4ade80" type="insert">绿色按钮</UButton>
    <UButton color="#6b7280" hoverColor="#9ca3af" type="insert">灰色按钮</UButton>
    <UButton color="#eab308 " hoverColor="#facc15" type="insert">黄色按钮</UButton>
    <UButton color="#ef4444" hoverColor="#f87171" type="insert">红色按钮</UButton>
  </div>
</template>
```
