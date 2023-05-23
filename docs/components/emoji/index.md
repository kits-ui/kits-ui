# emoji 组件

## 基础用法

:::demo

```vue
<template>
  <div>
    <k-emoji @selected="selectEmoticon" :diyEmoji="diyEmoji"></k-emoji>
    <div class="iig">
      内容：
      <div v-html="html_"></div>
    </div>
    <br />
    <textarea
      style="width:100%;border:1px solid #eee; padding:10px 15px;"
      ref="myTextarea"
      v-model.trim="editorText"
      rows="6"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const editorText = ref('textarea');
const html_ = ref();

const diyEmoji = ref({
  '[色]': "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif'>",
  '[发呆]': "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif'>",
});
const myTextarea = ref(null);
const selectEmoticon = (data) => {
  if (data.type == 1) {
    // editorText.value = data.value;
    let value = editorText.value;
    let el = myTextarea.value;
    let startPos = el.selectionStart;
    let endPos = el.selectionEnd;
    let newValue =
      value.substring(0, startPos) + data.value + value.substring(endPos, value.length);
    editorText.value = newValue;
    if (el.setSelectionRange) {
      setTimeout(() => {
        let index = startPos + data.value.length;
        el.setSelectionRange(index, index);
        el.focus();
      }, 0);
    }
    html_.value = data.textReplaceEmoji(editorText.value);
  } else {
    // 发送自定义图片
  }
};
</script>
<style lang="scss" scoped>
img {
  display: inline-block;
}
</style>
```

## emoji API

## 属性

| 属性名   | 说明       | 类型     | 可选值      | 默认值                                                                                      |
| -------- | ---------- | -------- | ----------- | ------------------------------------------------------------------------------------------- |
| diyEmoji | 自定义表情 | `Object` | ----------- | {'[微笑]': "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif'>"} |

## Events

| 方法           | 说明         | 参数                                                    |
| -------------- | ------------ | ------------------------------------------------------- |
| selectEmoticon | 获取所选表情 | -- -value：表情代码 -textReplaceEmoji：转成内容文本方法 |
