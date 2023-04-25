<template>
  <k-popover title="点我干嘛呢？" trigger="click" theme="light">
    <template #reference>
      <k-button type="insert">点我</k-button>
    </template>
  </k-popover>
  <k-popover title="摸我干嘛呢？" trigger="hover">
    <template #reference>
      <k-button type="insert">摸我</k-button>
    </template>
  </k-popover>
  <k-popover title="按住我干嘛呢？" trigger="longpress">
    <template #reference>
      <k-button type="insert">按住我</k-button>
    </template>
  </k-popover>
</template>

<script setup lang="ts"></script>

<style scoped></style>
