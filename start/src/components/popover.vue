<template>
  <k-popover position="top" theme="light">
    <k-calendar v-model="value" :first-day="1" @on-change="onChange"></k-calendar>
    <template #reference>
      <k-button type="insert">点我</k-button>
    </template>
  </k-popover>
  <k-popover position="bottom" theme="light">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>43</li>
      <li>4</li>
    </ul>
    <template #reference>
      <k-button type="insert">摸我</k-button>
    </template>
  </k-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>

<style scoped></style>
