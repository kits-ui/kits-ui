<template>
  <button
    class="k-button font-semibold"
    :class="btnClass()"
    :disabled="props.disabled"
    :style="{ backgroundColor: props.color }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#2bc0ac',
  },
  type: {
    type: String,
    default: 'default',
  },
  direction: {
    type: String,
    default: 'bottom',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['click']);

const btnClass = () => {
  let classStr = 'default';
  if (props.type === 'insert') {
    classStr = `insert ${props.direction}`;
  }
  if (typeof props.disabled === 'boolean' && props.disabled) {
    classStr += ' is-disabled';
  }
  return classStr;
};

const handleClick = (e) => {
  console.log(e);
  e.stopPropagation();
  emits('click', e);
};
</script>
