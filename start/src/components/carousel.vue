<template>
  <div style="width: 500px; height: 300px; margin: auto">
    <k-carousel
      :interval="1500"
      :autoplay="true"
      :arrow="true"
      direction="vertical"
      @change="carouselChange"
      @prev="prev"
      @next="next"
      ref="aaasdddd"
    >
      <div v-for="item in 5" :key="item" class="content">
        {{ item }}
      </div>
    </k-carousel>
    <k-button @click="jump">点击跳转第四页</k-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const aaasdddd = ref();

const jump = () => {
  aaasdddd.value.moveTo(4);
};

const carouselChange = (current) => {
  console.log(current, 'currentcurrentcurrentcurrent');
};
const prev = () => {
  console.log('prevprevprevprevprevprevprev');
};
const next = () => {
  console.log('nextnextnextnextnextnextnextnext');
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #b8e4de96;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #000, -1px 1px 1px #000, 1px -1px 1px #fff;
}
</style>
