<template>
  <popver
    :position="props.position"
    :theme="props.theme"
    name="popover"
    :trigger="props.trigger"
    :arrow="props.arrow"
    :width="props.width"
    :title="props.title"
    :visible="props.visible"
  >
    <component :is="referenceSlot"></component>
    <template #content>
      <slot>
        <component :is="defaultSlot"></component>
      </slot>
    </template>
  </popver>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import popver from '../popver/popver.vue';
const props = defineProps({
  trigger: {
    type: String,
    default: 'click',
  },
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
    default: 'light',
  },
  name: {
    type: String,
    default: 'popver',
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 150,
  },
  title: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: false,
  },
});
const slots = useSlots();
const referenceSlot = slots.reference && slots.reference()[0];
const defaultSlot = slots.default && slots.default()[0];
</script>
