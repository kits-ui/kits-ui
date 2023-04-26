<template>
  <div>
    <k-calendar v-model="value" :first-day="1" @on-change="onChange"></k-calendar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>
