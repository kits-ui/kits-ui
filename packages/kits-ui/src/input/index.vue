<template>
  <div class="k-input">
    <input v-model="modelValue" class="input_inner" v-bind="$attrs" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:value']);
const modelValue = ref(props.modelValue);

// watch(modelValue, (newValue) => {
//   emit('update:value', newValue);
// });

const onInput = () => {
  emit('update:value', modelValue);
};
</script>
