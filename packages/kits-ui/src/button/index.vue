<template>
  <button
    :id="idNum"
    ref="kButton"
    class="k-button font-semibold"
    :class="btnClass()"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { setStyle, setIdNum } from '../utils/index';
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
  size: {
    type: String,
    default: 'default',
  },
});

const emits = defineEmits(['click']);
const kButton = ref<any>();
const idNum = ref<any>();

onMounted(() => {
  init();
});

const init = () => {
  idNum.value = setIdNum();
  kButton.value.style.setProperty('--k-button-color', props.color);
  if (props.type !== 'line') {
    setStyle(kButton.value, {
      background: props.color,
    });
  } else {
    console.log(54123123, 'line');
    setStyle(kButton.value, {
      background: 'unset',
    });
  }
};

watch(
  () => props.type,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      init();
    }
  },
);

const btnClass = () => {
  let classStr = 'default';
  if (props.type === 'insert') {
    classStr = `insert ${props.direction}`;
  } else if (props.type === 'line') {
    classStr = `line`;
  } else {
    classStr = 'default';
  }
  if (typeof props.disabled === 'boolean' && props.disabled) {
    classStr += ' is-disabled';
  }
  if (props.size !== 'default') {
    classStr += ` ${props.size}`;
  }
  return classStr;
};

const handleClick = (e) => {
  e.stopPropagation();
  emits('click', e);
};
</script>
