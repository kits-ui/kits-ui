<template>
  <div>
    <k-drawer v-model="isShow" direction="right">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </k-drawer>
    <k-button @click="() => (isShow = true)">open</k-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref<boolean>(false);
</script>

<style scoped></style>
