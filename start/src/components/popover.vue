<template>
  <k-popover title="点我干嘛呢？" trigger="click" position="right">
    <template #content>
      <k-calendar v-model="value" :first-day="1" @on-change="onChange"></k-calendar>
    </template>
    <template #title>
      <span>Title</span>
    </template>
    <k-button type="insert">点我</k-button>
  </k-popover>
  <k-popover title="摸我干嘛呢？" trigger="hover">
    <template #content>
      <k-calendar v-model="value" :first-day="1" @on-change="onChange"></k-calendar>
    </template>
    <template #title>
      <span>Title</span>
    </template>
    <k-button type="insert">摸我</k-button>
  </k-popover>
  <!-- <k-popover title="按住我干嘛呢？" trigger="longpress">
    <template #reference>
      <k-button type="insert">按住我</k-button>
    </template>
  </k-popover> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>

<style scoped></style>
