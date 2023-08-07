<template>
  <div id="watermark">
    <k-watermark width="50vw" height="300px" :options="options">
      <div class="content">
        <div style="background-color: #fff; width: 300px; margin: auto">
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
          <div>我是内容我是内容我是内容</div>
        </div>
      </div>
    </k-watermark>
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
  opacity: 0.1,
  rotate: '-20deg',
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
// .content {
//   width: 100%;
//   height: 100%;
//   color: red;
//   font-weight: 600;
// }
</style>
