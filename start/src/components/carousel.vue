<template>
  <div style="width: 500px; height: 300px; margin: auto">
    <k-carousel :interval="3000" :autoplay="true" :arrow="'display'">
      <div v-for="item in 5" :key="item" class="content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  background-color: beige;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 5px #000, 3px -3px 3px #6cd7c8;
}
</style>
