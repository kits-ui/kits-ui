# Popover 气泡框

常用于展示鼠标 hover 或者 click 时的提示信息与 tooltip 类似,并具有一部分相同属性。

## 基础用法

:::demo

```vue
<template>
  <div class="k-popover-group">
    <k-popover position="top" theme="light" title="Title">
      这是click触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>click button</k-button>
      </template>
    </k-popover>
    <k-popover position="right" theme="light" trigger="hover" title="Title">
      这是hover触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>hover button</k-button>
      </template>
    </k-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>
```

:::

---

## 自定义内容

可以在 Popover 中嵌套其它组件或者结构
::: tip
自定义内容中如涉及点击事件,则需要配合 **visible** 属性来控制气泡框的关闭,具体使用可参考下方案例
:::

:::demo

```vue
<template>
  <k-popover position="right" theme="light" :width="510" :visible="visible">
    <k-emoji @selected="selectEmoticon"></k-emoji>
    <template #reference>
      <k-button @click="visible = true">click button</k-button>
    </template>
  </k-popover>
  <div v-html="html_"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);

const editorText = ref('textarea');
const html_ = ref();

const selectEmoticon = (data) => {
  console.log(data);
  html_.value = data.textReplaceEmoji(data.value);
  if (data.type == 1) {
    editorText.value = data.value;
    visible.value = false;
  }
};
</script>
```

:::

# Popover API

## Popover 属性

| 属性名  | 说明                       | 类型      | 可选值           | 默认值 |
| ------- | -------------------------- | --------- | ---------------- | ------ |
| trigger | 触发方式                   | `string`  | hover click----- | click  |
| arrow   | 是否显示箭头               | `boolean` | ---------------- | true   |
| width   | 设置默认宽度               | `number`  | ---------------- | 150    |
| title   | 气泡框的 title             | `string`  | ---------------- | -----  |
| visible | 特殊情况下控制气泡框的关闭 | `boolean` | ---------------- | false  |

## Popover 插槽

| 名称      | 说明                        |
| --------- | --------------------------- |
| default   | 自定义内容                  |
| reference | 触发 Popover 显示的元素内容 |
