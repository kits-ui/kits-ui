# Loading 加载

加载数据时显示动效。

`kits-ui` 提供了两种调用 `Loading` 组件的方法：组件和服务。  
对于组件，只需要绑定 boolean 值即可。  
默认状况下，Loading 遮罩会插入到插槽的子节点。如果组件内默认插槽是空的，可以使遮罩插入至 Dom 中的 body 上。

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

## 全屏加载

loading 组件内没有传入 slot 自动成为全屏的 loading

:::demo

```vue
<template>
  <k-button @click="loading = true">开启loading</k-button>
  <k-loading v-model="loading" text="全局loading,点击任意地方关闭" close-on-click> </k-loading>
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
// fixme 文档内导入不了
// import { showLoading } from 'kits-ui';
// const showMyLoading = () => showLoading({ text: '全局loading,点击任意地方关闭' });
const showMyLoading = () => {};
</script>
```

:::

## 渲染模式

组件提供了`insert(插入)`、`wrap(包裹)`两种渲染模式：

- `insert`：在插入模式下会把 loading 插入到 loading 的插槽下，如果插槽内有多个根元素也只会对第一个根元素生效
- `wrap`: 包裹模式下会把插槽内所有的元素用 div 包裹起来

**默认模式是 `insert`。**

### insert

该例子的 loading 组件包裹了两个 table，但只对第一个 table 生效

:::demo

```vue
<template>
  <k-loading v-model="loading" mode="insert">
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

### wrap

该例子的 loading 组件包裹了两个 table，对两个 table 都会生效

:::demo

```vue
<template>
  <k-loading v-model="loading" mode="wrap">
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

## 具名插槽

### icon

插入 icon 插槽，替换 loading icon

:::demo

```vue
<template>
  <k-loading v-model="loading" close-on-click>
    <template #icon>
      <div class="loading-rotate" style="width:50px"><sync /></div>
    </template>
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
      </tbody>
    </table>
  </k-loading>
  <k-button @click="fullScreenLoading = true">全屏loading</k-button>
  <k-loading v-model="fullScreenLoading" close-on-click>
    <template #icon>
      <div class="loading-rotate" style="width:50px"><sync /></div>
    </template>
  </k-loading>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(true);
const fullScreenLoading = ref(false);
</script>
```

:::

### text

插入 text 插槽，替换 loading text

:::demo

```vue
<template>
  <k-loading v-model="loading" close-on-click>
    <template #text>
      <div>更换text</div>
      <div>更换text</div>
    </template>
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

## Loading API

```typescript
export interface LoadingOptions {
  modelValue: boolean | Ref<boolean>;
  closeOnClick?: boolean;
  text?: string | ComputedRef<string>;
  background?: string;
  customClass?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
}
export function showLoading(props: LoadingOptions): { close: () => void };
```

| 方法名        | 说明                           | 入参             |     | 出参                          |
| ------------- | ------------------------------ | ---------------- | --- | ----------------------------- |
| `showLoading` | 通过调用函数的方式打开 loading | `LoadingOptions` | -   | 返回一个带有 close 方法的对象 |

## Loading 属性

| 属性名               | 说明                                                                                | 类型      | 可选值            | 默认值                |
| -------------------- | ----------------------------------------------------------------------------------- | --------- | ----------------- | --------------------- |
| modelValue / v-model | 显示 loading                                                                        | `boolean` | -                 | -                     |
| text                 | 指定通知中所使用的语言。                                                            | `string`  | -                 | 'loading...'          |
| background           | 遮罩背景色                                                                          | `string`  | -                 | 'rgba(0, 0, 0, 0.38)' |
| customClass          | 自定义组件根元素 class                                                              | ` string` | -                 | -                     |
| clickOnClick         | 点击后关闭 loading                                                                  | `boolean` | -                 | false                 |
| zIndex               | 组件层级                                                                            | `number`  | -                 | 100                   |
| mode                 | 组件渲染模式：`insert`插入到 slot 中，`wrap`创建一个 div 包裹住 slot,默认是`insert` | `string`  | `insert` / `wrap` | 1                     |

## Loading 插槽

| 插槽名  | 说明                                                                |     |
| ------- | ------------------------------------------------------------------- | --- |
| icon    | 图标位插槽；自定义 loading icon                                     | -   |
| text    | 文字位插槽；自定义 loading 文本                                     | -   |
| default | 默认插槽；要被 loading 遮罩遮住的目标，省略时会插到 body 下全屏显示 | -   |
