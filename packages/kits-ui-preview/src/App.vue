<script setup lang="ts">
const url =
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg';
</script>

<template>
  <k-icon type="star"></k-icon>
  <k-button type="insert" direction="left">我是按钮</k-button>
  <k-image style="width: 100px; height: 100px" :src="url" :preview="[url]"></k-image>
  <edit />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
pre {
  white-space: pre;
}
</style>
