<template>
  <kSlot :vnode="defaultSlot"></kSlot>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue';
import { setStyle } from '../utils/index';
import createSlot from './createSlots';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
});

const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];
const tooltipContent = ref<any>();
const dom = ref<any>();
const prevSiblingDom = ref<any>({});

// 自定义template 内容mounted事件
const mountedCallFun = (args) => {
  console.log('mounted', args);
  dom.value = args;
};
// 自定义template 内容updated事件
const updatedCallFun = (args) => {
  console.log(args);
};
// 自定义template 内容unMounted卸载事件
const unmountedCallFun = (args) => {
  console.log(args);
};

const kSlot = createSlot({ mountedCallFun, updatedCallFun, unmountedCallFun });

onMounted(async () => {
  dom.value.addEventListener('mouseover', () => {
    init();
  });
  dom.value.addEventListener('mouseout', () => {
    document.body.removeChild(tooltipContent.value);
  });
});

const init = () => {
  // dom.value = tooltipContent.value.previousElementSibling;
  tooltipContent.value = document.createElement('div');
  tooltipContent.value.className = 'tooltip-content';
  tooltipContent.value.innerHTML = `${props.content}<span></span>`;
  console.log(document.body.contains(document.querySelector('.tooltip-content')));
  // 删除所有多余节点
  if (document.body.contains(document.querySelector('.tooltip-content'))) {
    document.body.removeChild(document.querySelector('.tooltip-content'));
  }
  document.body.append(tooltipContent.value);
  dom.value.classList.add('k-tooltips');
  // nextTick(() => {
  prevSiblingDom.value = dom.value.getBoundingClientRect();
  // 获取兄弟节点定位信息
  const width = tooltipContent.value.offsetWidth;
  const height = tooltipContent.value.offsetHeight;
  setStyle(tooltipContent.value, {
    top: `${prevSiblingDom.value.top - height - 10}px`,
    left: `${prevSiblingDom.value.left - (width / 2 - prevSiblingDom.value.width / 2)}px`,
  });
  // });
};
</script>
<style lang="scss">
.tooltip-content {
  position: absolute;
  width: auto;
  height: auto;
  background: rgb(26, 26, 26);
  color: #fff;
  padding: 5px 8px;
  box-sizing: border-box;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 5px #747474);
  // transition: opacity 0.3s;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    margin: auto;
    content: '';
    width: 8px;
    height: 8px;
    background: rgb(26, 26, 26);
    transform: rotate(45deg);
    // border-radius: 0px 0px 6px 0px;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
