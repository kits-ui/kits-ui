<template>
  <k-popover position="top" theme="light" :width="100">
    <k-calendar v-model="value" :first-day="1" @on-change="onChange"></k-calendar>
    <template #reference>
      <k-button type="insert">点我</k-button>
    </template>
  </k-popover>
  <k-popover position="bottom" theme="light" title="666" trigger="hover">
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
  <k-popover position="right" theme="light" title="666" :visible="visible">
    <k-emoji @selected="selectEmoticon"></k-emoji>
    <template #reference>
      <k-button type="insert" @click="visible = true">摸我</k-button>
    </template>
  </k-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const visible = ref(false);
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};

const editorText = ref('textarea');
const html_ = ref();

const selectEmoticon = (data) => {
  console.log(data);
  html_.value = data.textReplaceEmoji(data.value);
  if (data.type == 1) {
    editorText.value = data.value;
    visible.value = false;
  }
};
</script>

<style scoped></style>
