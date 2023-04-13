# emoji 组件

## 基础用法

:::demo

```vue
<template>
  <div>
    <k-emoji @selected="selectEmoticon"></k-emoji>
    <div v-html="html_"></div>
    <textarea style="width:100%" ref="myTextarea" v-model.trim="editorText" rows="6" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const editorText = ref('textarea');
const html_ = ref();

const myTextarea = ref(null);
const selectEmoticon = (data) => {
  html_.value = data.textReplaceEmoji(data.value);
  if (data.type == 1) {
    editorText.value = data.value;
    // let value = editorText.value;
    // let el = myTextarea;
    // let startPos = el.selectionStart;
    // let endPos = el.selectionEnd;
    // let newValue =
    //   value.substring(0, startPos) + data.value + value.substring(endPos, value.length);
    // editorText.value = newValue;
    // if (el.setSelectionRange) {
    //   setTimeout(() => {
    //     let index = startPos + data.value.length;
    //     el.setSelectionRange(index, index);
    //     el.focus();
    //   }, 0);
    // }
  } else {
    // 发送自定义图片
  }
};
</script>
```
