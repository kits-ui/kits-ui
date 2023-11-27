<template>
  <div class="split-wrapper">
    <k-split v-model="triggerPosition" :max="1" mode="vertical" @on-move-end="handleMoveEnd">
      <template #top> hahhaha </template>
      <template #bottom> vue vue vue </template>
    </k-split>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const triggerPosition = ref(0.3);
const handleMoveEnd = () => {
  console.log('end');
};
</script>
<style scoped>
.split-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid red;
}
</style>
