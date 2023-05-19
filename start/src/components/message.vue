<template>
  <k-button type="success" color="#22c55e" @click="clickMe">success</k-button>
  <k-button type="warning" color="#6b7280" @click="clickMe2">warning</k-button>
  <k-button type="info" color="#eab308" @click="clickMe3">info</k-button>
  <k-button type="error" color="#ef4444" @click="clickMe4">error</k-button>
</template>

<script setup lang="ts">
import KitsUI from '../../../packages/kits-ui/components';
const clickMe = () => {
  KitsUI.Message.success('success');
};
const clickMe2 = () => {
  KitsUI.Message.warning('warning');
};
const clickMe3 = () => {
  KitsUI.Message.info('info');
};
const clickMe4 = () => {
  KitsUI.Message.error('error');
};
</script>
<style scoped></style>
