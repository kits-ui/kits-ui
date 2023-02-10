# AuthCode 验证码

常用验证码生成

## 基础用法

基础的函数用法

:::demo

```vue
<template>
  <u-auth-code ref="authCodeRef" @input="onInput"></u-auth-code>
  <div>{{ authCode }}</div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
const authCode = ref('');
watch(
  () => authCode.value,
  (n, o) => {
    console.log({ n, o });
  },
);
const onInput = (e) => {
  console.log(e);
  authCode.value = e;
};
</script>
```
