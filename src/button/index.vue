<template>
  <button class="u-button px-4 py-1 font-semibold cursor-pointer m-1" :class="btnClass()">
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

// defineOptions({
//   name: "UButton",
// });

const props = defineProps({
  color: {
    type: String,
    default: '#2bc0ac',
  },
  hoverColor: {
    type: String,
    default: '#40d9c4',
  },
  type: {
    type: String,
    default: 'default',
  },
});

const color = computed(() => {
  return props.color;
});
const hoverColor = computed(() => {
  return props.hoverColor;
});

const btnClass = () => {
  if (props.type === 'default') {
    return `
      shadow-md
      border-none
      text-white
      default
    `;
  } else if (props.type === 'insert') {
    return 'insert';
  }
};
</script>
<style lang="scss">
.u-button {
  border-radius: 5px;
  background-color: v-bind(color);
  transition: all 0.3s ease;
  &::after {
    transition: all 0.3s ease;
  }
  &.default:hover {
    background-color: v-bind(hoverColor);
  }
  &.insert {
    position: relative;
    color: #fff;
    z-index: 1;
    border: none;
    overflow: hidden;
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 0;
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 5px;
      background-color: v-bind(hoverColor);
    }
    &:hover::after {
      bottom: 0;
      top: auto;
      height: 100%;
    }
    &:active {
      top: 2px;
    }
  }
}
</style>
