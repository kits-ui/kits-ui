<template>
  <div>
    <k-drawer v-model="isShow" :direction="direction">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </k-drawer>
    <k-button @click="showDrawer('top')">top</k-button>
    <k-button @click="showDrawer('right')">right</k-button>
    <k-button @click="showDrawer('bottom')">bottom</k-button>
    <k-button @click="showDrawer('left')">left</k-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref<boolean>(false);
const direction = ref<string>('');

const showDrawer = (value: string) => {
  direction.value = value;
  isShow.value = true;
};
</script>

<style scoped></style>
