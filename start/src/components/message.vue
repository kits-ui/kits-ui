<template>
  <k-button type="info" color="#6b7280" @click="clickMe3">info</k-button>
  <k-button type="success" color="#22c55e" @click="clickMe">success</k-button>
  <k-button type="warning" color="#eab308" @click="clickMe2">warning</k-button>
  <k-button type="error" color="#ef4444" @click="clickMe4">error</k-button>
</template>

<script setup lang="ts">
import { kMessage } from '../../../packages/kits-ui/index';
// import { getCurrentInstance } from 'vue';
const clickMe = () => {
  kMessage.success('success');
};
const clickMe2 = () => {
  kMessage.warning('warning');
};
const clickMe3 = () => {
  kMessage.info('info');
};
const clickMe4 = () => {
  kMessage.error('error', { closeVisible: true });
};
</script>
<style scoped></style>
