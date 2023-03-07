# AuthCode 验证码

常用验证码生成

## 基础用法

基础的函数用法

:::demo

```vue
<template>
  <k-auth-code ref="authCodeRef" v-model:code="authCode"></k-auth-code>
  <div class="py-4">
    <k-button type="insert" @click="reset">重新生成</k-button>
    <div>{{ authCode }}</div>
  </div>
</template>
<script lang="ts">
// 在md中好像 setup语法糖不生效
// import { reactive, ref, watch } from 'vue';
// const authCode = ref('');
// const authCodeRef = ref(null)
// // watch(
// //   () => authCode.value,
// //   (n, o) => {
// //     console.log({ n, o });
// //   },
// // );
// const onInput = (e) => {
//   console.log(e);
//   // authCode.value = e;
// };
// const reset = ()=>{
//   console.log(authCodeRef);
//   authCodeRef.value.createCodeHandle()
// }
import { reactive, ref, watch } from 'vue';
export default {
  data() {
    return {};
  },
  setup() {
    const authCode = ref('');
    const authCodeRef = ref(null);
    watch(authCode, async (n, o) => {
      console.log({ n, o });
    });
    const reset = () => {
      authCodeRef.value.createCodeHandle();
    };
    return {
      authCode,
      authCodeRef,
      reset,
    };
  },
};
</script>
```

:::

---

# AuthCode API

| 方法名           | 说明                | 入参 | 出参 |     |
| ---------------- | ------------------- | ---- | ---- | --- |
| createCodeHandle | 实例方法 生产验证码 | -    | -    |

## AuthCode 属性

| 属性名 | 说明               | 类型     | 可选值 | 默认值 |
| ------ | ------------------ | -------- | ------ | ------ |
| height | 高度               | `number` | -      | 36     |
| width  | 宽度               | `number` | -      | 90     |
| count  | 随机生成验证码数量 | `number` | -      | 4      |
| codes  | 自定义生成的验证码 | `array`  | -      | []     |
