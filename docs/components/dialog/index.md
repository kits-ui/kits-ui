# Dialog 按钮

## 基础用法

:::demo

```vue
<template>
  <div>
    <k-button type="line" @click="dialogVisible = true">点击弹窗</k-button>
    <k-dialog v-model="dialogVisible" title="默认弹窗1">
      <div>
        <p>测试1</p>
        <p>测试1测试1</p>
        <p>测试1测试1测试1</p>
      </div>
    </k-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref<boolean>(false);
</script>

<style scoped></style>
```

:::

## 自定义底部

使用 **footer** 的插槽来进行底部的自定义

:::demo

```vue
<template>
  <div>
    <k-button type="line" @click="dialogVisible = true">点击弹窗</k-button>
    <k-dialog v-model="dialogVisible" title="默认弹窗2">
      <div>
        <p>测试1</p>
        <p>测试1测试1</p>
        <p>测试1测试1测试1</p>
      </div>
      <template #footer>
        <k-button type="line" @click="dialogVisible = false">取消</k-button>
        <k-button @click="dialogVisible = false">确定</k-button>
      </template>
    </k-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref<boolean>(false);
</script>

<style scoped></style>
```

## :::

# Dialog API

## Dialog 属性

| 属性名  | 说明                        | 类型      | 可选值            | 默认值 |
| ------- | --------------------------- | --------- | ----------------- | ------ |
| v-model | 是否显示 Dialog             | `Boolean` | ----------------- | ---    |
| title   | Dialog 对话框 Dialog 的标题 | `string`  | -------------     | ---    |
