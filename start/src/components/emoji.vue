<template>
  <div>
    <k-emoji :diyEmoji="diyEmoji"></k-emoji>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const diyEmoji = ref({
  '[色]': "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif'>",
  '[发呆]': "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif'>",
});
</script>

<style scoped></style>
