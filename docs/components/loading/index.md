# Loading 加载

加载数据时显示动效。

## 区域加载

:::demo

```vue
<template>
  <k-loading v-model="loading">
    <table>
      <thead>
        <tr>
          <th>属性名</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dir</td>
          <td>文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左）</td>
          <td><code>string</code></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lang</td>
          <td>指定通知中所使用的语言。</td>
          <td><code>string</code></td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </k-loading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(true);
</script>
```

:::

## 全局加载

loading 组件内没有传入 slot 自动成为全屏的 loading

:::demo

```vue
<template>
  <k-button @click="loading = true">开启loading</k-button>
  <k-loading v-model="loading" text="全局loading,点击任意地方关闭" click-hide> </k-loading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(false);
</script>
```

:::

## 全局加载(函数调用)

loading 组件内没有传入 slot 自动成为全屏的 loading

:::demo

```vue
<template>
  <k-button @click="showMyLoading">开启loading</k-button>
</template>
<script setup lang="ts">
// fixme 导入不了
// import { showLoading } from 'kits-ui';
// const showMyLoading = () => showLoading({ text: '全局loading,点击任意地方关闭' });
const showMyLoading = () => {};
</script>
```

:::

## Loading API

```typescript
export interface LoadingOptions {
  modelValue: boolean | Ref<boolean>;
  clickHide?: boolean;
  text?: string | ComputedRef<string>;
  background?: string;
  customClass?: string;
  zIndex?: number;
}
export function showLoading(props: LoadingOptions): { close: () => void };
```

| 方法名        | 说明                           | 入参             |     | 出参                          |
| ------------- | ------------------------------ | ---------------- | --- | ----------------------------- |
| `showLoading` | 通过调用函数的方式打开 loading | `LoadingOptions` | -   | 返回一个带有 close 方法的对象 |

## Loading 属性

| 属性名             | 说明                     | 类型      | 可选值 | 默认值                |
| ------------------ | ------------------------ | --------- | ------ | --------------------- |
| modelValue/v-model | 显示 loading             | `boolean` | -      | -                     |
| text               | 指定通知中所使用的语言。 | `string`  | -      | 'loading...'          |
| background         | 遮罩背景色               | `string`  | -      | 'rgba(0, 0, 0, 0.38)' |
| customClass        | 自定义组件根元素 class   | ` string` | -      | -                     |
| clickHide          | 是否点击后隐藏           | `boolean` | -      | false                 |
| zIndex             | 组件层级                 | `number`  | -      | 1                     |

## Loading 插槽

| 插槽名  | 说明                                                                |     |
| ------- | ------------------------------------------------------------------- | --- |
| icon    | 图标位插槽；自定义 loading icon                                     | -   |
| text    | 文字位插槽；自定义 loading 文本                                     | -   |
| default | 默认插槽；要被 loading 遮罩遮住的目标，省略时会插到 body 下全屏显示 | -   |
