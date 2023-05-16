<template>
  <i class="k-icon" :style="{ fontSize: props.size, color: props.color }">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
});
</script>
