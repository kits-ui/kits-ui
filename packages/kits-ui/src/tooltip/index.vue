<template>
  <kSlot :vnode="defaultSlot"></kSlot>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, nextTick, onUnmounted } from 'vue';
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
  // console.log('mounted', args);
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
  window.addEventListener('mouseover', mouseoverFn);
  window.addEventListener('mousemove', mousemoverFn);
  window.addEventListener('scroll', scrollFn);
  // window.addEventListener('mouseout', (e) => {
  //   outTarget = e.target;
  //   // if (tooltipContent.value) {
  //   //   if (e.target === dom.value && overTarget === tooltipContent.value) {
  //   //     tooltipContent.value.style.opacity = 1;
  //   //   } else {
  //   //     tooltipContent.value.style.opacity = 0;
  //   //   }
  //   // }
  // });
});

onUnmounted(() => {
  window.removeEventListener('mouseover', mouseoverFn);
  window.removeEventListener('mousemove', mousemoverFn);
  window.removeEventListener('scroll', scrollFn);
});

const mouseoverFn = (e) => {
  if (e.target === dom.value) {
    init();
  }
};

const mousemoverFn = (e) => {
  if (tooltipContent.value) {
    if (e.target === dom.value || e.target === tooltipContent.value) {
      tooltipContent.value.style.opacity = 1;
    } else {
      tooltipContent.value.style.opacity = 0;
    }
  }
};

const scrollFn = () => {
  if (tooltipContent.value) {
    tooltipContent.value.style.opacity = 0;
  }
};

const init = () => {
  // dom.value = tooltipContent.value.previousElementSibling;
  tooltipContent.value = document.createElement('div');
  tooltipContent.value.className = 'tooltip-content';
  tooltipContent.value.innerHTML = `${props.content}`;
  // 删除所有多余节点
  if (document.body.contains(document.querySelector('.tooltip-content'))) {
    document.body.removeChild(document.querySelector('.tooltip-content'));
  }
  document.body.append(tooltipContent.value);
  dom.value.classList.add('k-tooltip');
  prevSiblingDom.value = dom.value.getBoundingClientRect();
  nextTick(() => {
    // 获取兄弟节点定位信息
    const width = tooltipContent.value.offsetWidth;
    const height = tooltipContent.value.offsetHeight;
    setStyle(tooltipContent.value, {
      top: `${prevSiblingDom.value.top - height - 10}px`,
      left: `${prevSiblingDom.value.left - (width / 2 - prevSiblingDom.value.width / 2)}px`,
    });
    console.log(prevSiblingDom.value.top, prevSiblingDom.value.top - height - 10);
  });
};
</script>
<style lang="scss">
.tooltip-content {
  opacity: 0;
  position: fixed;
  width: auto;
  height: auto;
  background: rgb(26, 26, 26);
  color: #fff;
  padding: 5px 8px;
  box-sizing: border-box;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px #747474);
  transition: opacity 0.3s;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15px;
    margin: auto;
    content: '';
    width: 12px;
    height: 12px;
    border: 8px solid transparent;
    border-top-color: rgb(26, 26, 26);
    z-index: 1;
    box-sizing: border-box;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
