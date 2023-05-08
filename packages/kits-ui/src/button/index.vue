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
import { onMounted, ref } from 'vue';
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
  }
};

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
  return classStr;
};

const handleClick = (e) => {
  console.log(e);
  e.stopPropagation();
  emits('click', e);
};
</script>
