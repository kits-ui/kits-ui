<template>
  <kSlot :vnode="defaultSlot"></kSlot>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, nextTick, onUnmounted, watch } from 'vue';
import { setStyle } from '../utils/index';
import createSlot from './createSlots';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'top',
  },
});

const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];
const tooltipContent = ref<any>();
const currentTooltipHeight = ref<any>(0);
const dom = ref<any>();
const outTarget = ref<any>();

// 自定义template 内容mounted事件
const mountedCallFun = (args) => {
  // console.log('mounted', args);
  dom.value = args;
};

const kSlot = createSlot({ mountedCallFun });

onMounted(async () => {
  // 鼠标移入目标元素的操作
  window.addEventListener('mouseover', mouseoverFn);
  // 鼠标在目标元素与提示框中移动的操作
  window.addEventListener('mousemove', mousemoverFn);
  // 鼠标移出提示框后的操作
  window.addEventListener('mouseout', mouseoutFn);
  // 滚动事件时的操作
  window.addEventListener('scroll', scrollFn);
});

onUnmounted(() => {
  window.removeEventListener('mouseover', mouseoverFn);
  window.removeEventListener('mousemove', mousemoverFn);
  window.removeEventListener('mouseout', mouseoutFn);
  window.removeEventListener('scroll', scrollFn);
});

const mouseoverFn = (e) => {
  if (e.target === dom.value) {
    init();
  }
  if (tooltipContent.value) {
    if (e.target === tooltipContent.value && outTarget.value === dom.value) {
      tooltipContent.value.style.opacity = 1;
    } else {
      tooltipContent.value.style.transition = 'unset';
      tooltipContent.value.style.opacity = 0;
      tooltipContent.value.style.left = '-9999px';
    }
  }
};

const mousemoverFn = (e) => {
  if (tooltipContent.value) {
    if (e.target === dom.value || e.target === tooltipContent.value) {
      tooltipContent.value.style.opacity = 1;
    }
  }
};

const mouseoutFn = (e) => {
  if (e.target === dom.value) {
    outTarget.value = e.target;
  }
  if (tooltipContent.value && e.target === tooltipContent.value) {
    document.body.removeChild(tooltipContent.value);
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
  tooltipContent.value.classList.add(`tooltip-position-${props.position}`);
  tooltipContent.value.innerHTML = `${props.content}`;
  // 删除所有多余节点
  if (document.body.contains(document.querySelector('.tooltip-content'))) {
    document.body.removeChild(document.querySelector('.tooltip-content'));
  }
  document.body.append(tooltipContent.value);
  dom.value.classList.add('k-tooltip');
  currentTooltipHeight.value = tooltipContent.value.offsetHeight;
  nextTick(async () => {
    await setTooltipStyle();
    console.log(currentTooltipHeight.value);
  });
};

const setTooltipStyle = () => {
  // 获取兄弟节点定位信息
  const { top, left, height: dHeight, width: dWidth } = dom.value.getBoundingClientRect();
  const { offsetWidth: width } = tooltipContent.value;
  console.log(width, currentTooltipHeight.value, 55663322);
  console.dir(tooltipContent.value);
  switch (props.position) {
    case 'left':
      setStyle(tooltipContent.value, {
        top: `${top - (currentTooltipHeight.value / 2 - dHeight / 2)}px`,
        left: `${left - width - 10}px`,
      });
      break;
    case 'top':
      setStyle(tooltipContent.value, {
        top: `${top - currentTooltipHeight.value - 10}px`,
        left: `${left - (width / 2 - dWidth / 2)}px`,
      });
      break;
    case 'right':
      setStyle(tooltipContent.value, {
        top: `${top - (currentTooltipHeight.value / 2 - dHeight / 2)}px`,
        left: `${left + dWidth + 10}px`,
      });
      break;
    case 'bottom':
      setStyle(tooltipContent.value, {
        top: `${top + dHeight + 10}px`,
        left: `${left - (width / 2 - dWidth / 2)}px`,
      });
      break;
  }
  // 定位后获取最新高度重新赋值
  currentTooltipHeight.value = tooltipContent.value.offsetHeight;
};

watch(
  () => currentTooltipHeight.value,
  () => {
    setTooltipStyle();
  },
);
</script>
