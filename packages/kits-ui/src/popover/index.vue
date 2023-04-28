<template>
  <div class="k-popover">
    <Tooltip v-bind="$attrs">
      <component :is="referenceSlot"></component>
      <template #content>
        <slot>
          <component :is="defaultSlot"></component>
        </slot>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';
import Tooltip from '../tooltip/index.vue';
// const props = defineProps({
//   trigger: {
//     type: String,
//     default: 'click',
//   },
// });
const slots = useSlots();
const referenceSlot = slots.reference && slots.reference()[0];
const defaultSlot = slots.default && slots.default()[0];
</script>
