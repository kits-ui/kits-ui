# Popconfirm 气泡确认框

常用于点击元素后进行一下操作时需要提醒用户的场景中

## 基础用法

点击某个元素弹出一个简单的气泡确认框
:::demo

```vue
<template>
  <div class="k-popover-group">
    <k-popconfirm title="是否确认要进行后续操作?" :width="180">
      <template #reference>
        <k-button type="insert">操作</k-button>
      </template>
    </k-popconfirm>
  </div>
</template>
```

:::

---

## 自定义内容

可以通过属性来自定义气泡框中提示内容以及按钮文本

:::demo

```vue
<template>
  <div>
    <k-popconfirm
      position="bottom"
      cancelText="close"
      confirmText="ok"
      @cancel="cancel"
      @confirm="confirm"
      title="Are you sure you want to proceed with the subsequent operation?"
      :width="300"
    >
      <template #reference>
        <k-button type="insert">click ok</k-button>
      </template>
    </k-popconfirm>
  </div>
</template>

<script setup lang="ts">
const cancel = () => {
  console.log('cancel');
};
const confirm = () => {
  console.log('confirm');
};
</script>
```

:::

# Popconfirm API

## Popconfirm 属性

| 属性名      | 说明             | 类型     | 可选值           | 默认值 |
| ----------- | ---------------- | -------- | ---------------- | ------ |
| width       | 设置默认宽度     | `number` | ---------------- | 150    |
| title       | 气泡确认框的内容 | `string` | ---------------- | -----  |
| cancelText  | 取消按钮文本     | `string` | ---------------- | -----  |
| confirmText | 确认按钮文本     | `string` | ---------------- | -----  |

## Popconfirm 事件

| 名称    | 说明             | 类型       | 默认值 |
| ------- | ---------------- | ---------- | ------ |
| cancel  | 点击取消按钮触发 | `function` | -----  |
| confirm | 点击确认按钮触发 | `function` | -----  |

## Popconfirm 插槽

| 名称      | 说明                       |
| --------- | -------------------------- |
| reference | 触发 Popconfirm 显示的元素 |
