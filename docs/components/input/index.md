# Input 输入框

## 基础用法

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-input v-model="value" placeholder="请输入..." />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>('');
</script>
```

:::

---

# Input API

## Input 属性

| 属性名      | 说明               | 类型              | 可选值              | 默认值  |
| ----------- | ------------------ | ----------------- | ------------------- | ------- |
| v-model     | 绑定值             | `string`/`number` | -----------------   | ---     |
| placeholder | 占位文本           | `string`          | -----------         | --      |
| disabled    | 按钮是否为禁用状态 | `boolean`         | false/ true         | false   |
| size        | 设置按钮尺寸       | `string`          | large/default/small | default |
