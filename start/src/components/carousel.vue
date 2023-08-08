<template>
  <div style="width: 500px; height: 300px; margin: auto">
    <k-carousel
      :interval="1000"
      :autoplay="true"
      :arrow="'display'"
      @change="carouselChange"
      @prev="prev"
      @next="next"
    >
      <div v-for="item in 5" :key="item" class="content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<script setup lang="ts">
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
