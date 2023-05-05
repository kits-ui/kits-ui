<template>
  <popver :position="props.position" :theme="theme" name="tooltip" trigger="hover">
    <component :is="defaultSlot"></component>
    <template #content>
      {{ props.content }}
    </template>
  </popver>
</template>

<script setup lang="ts">
import popver from '../popver/popver.vue';
import { useSlots } from 'vue';

const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'top',
  },
  theme: {
    type: String,
    default: 'dark',
  },
});
</script>
