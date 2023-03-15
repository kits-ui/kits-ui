<template>
  <div id="watermark">
    <k-watermark width="50vw" height="30vh" :options="options" />
  </div>
  <div id="watermark1">
    <k-watermark width="50vw" height="30vh" :options="options1" name="mmm" />
  </div>
</template>

<script setup lang="ts">
const options = {
  waterMarkText: '6666666666',
  textColor: 'black',
  textWidth: 170,
  textHeight: 80,
};
const options1 = {
  waterMarkText: '22222231',
  textColor: 'red',
  textWidth: 170,
  textHeight: 80,
};
</script>

<style scoped lang="scss">
#watermark {
  position: relative;
  width: 50vw;
  height: 80vh;
}
#watermark1 {
  position: relative;
  width: 50vw;
  height: 80vh;
}
</style>
