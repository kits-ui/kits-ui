<template>
  <div class="block">
    <k-image style="width: 100px; height: 100px" :src="url1" :preview="previewList"></k-image>
  </div>
  <div class="block">
    <k-image style="width: 100px; height: 100px" :src="url2" :preview="previewList"></k-image>
  </div>
</template>

<script setup lang="ts">
const url1 = 'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg';
const url2 =
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg';
const previewList = [
  'https://bpic.588ku.com/back_pic/05/97/87/485eb1743d74926.jpg',
  'https://pic.huke88.com/product-make/cover/2018-11-01/5B30B8A4-FCEC-8634-1BB3-6F911AE7EDA5.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg',
];
</script>
