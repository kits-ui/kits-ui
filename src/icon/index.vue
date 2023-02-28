<template>
  <i :class="classIconName"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
});

const classIconName = computed(() => {
  return `i-simple-line-icons-${props.type}`;
});
</script>

<style scoped>
i {
  display: inline-block;
}
</style>
