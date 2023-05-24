<template>
  <div>
    <k-waterfall :list="list"></k-waterfall>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref(['1', '2', '3', '4']);
</script>

<style scoped></style>
