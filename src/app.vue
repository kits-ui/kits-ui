<template>
  <div>
    <u-button>按钮</u-button>
    <u-button type="insert">按钮</u-button>
    <u-filter-box type="insert">按钮</u-filter-box>
    <u-auth-code></u-auth-code>
    <u-image :src="url" :preview="previewList"></u-image>
  </div>
</template>
<script setup lang="ts">
const url = 'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg';
const previewList = [
  'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg',
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg',
];
</script>
