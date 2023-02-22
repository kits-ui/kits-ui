<template>
  <div class="u-image">
    <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  fit: {
    type: String,
    default: '',
  },
});

const fit = computed(() => {
  return props.fit;
});
</script>

<style lang="scss" scoped>
.u-image {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: auto;

  img {
    width: inherit;
    height: inherit;
    object-fit: v-bind(fit);
  }
}
</style>
