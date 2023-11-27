<template>
  <div class="demo">
    <div class="split-wrapper">
      <div class="left"></div>
      <k-split-group mode="horizontal"></k-split-group>
      <div class="middle">
        <p>ssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      </div>
      <k-split-group mode="horizontal"></k-split-group>
      <div class="right">
        <p>ssssssssssssssssssssssssssssssssssssssssssssssssss</p>
      </div>
    </div>
    <div class="split-wrapper">
      <div class="top"></div>
      <k-split-group mode="vertical"></k-split-group>
      <div class="middle"></div>
      <k-split-group mode="vertical"></k-split-group>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.demo {
  display: flex;
  gap: 50px;
}

.split-wrapper {
  text-align: left;
  width: 600px;
  height: 400px;
  border: 1px solid red;
}
.left,
.right {
  background: red;
  p {
    width: 100%;
    white-space: wrap;
    word-break: break-all;
  }
}
.top,
.bottom {
  background: rgba(122, 243, 227, 0.582);
}
</style>
