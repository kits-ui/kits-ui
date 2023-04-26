<template>
  <kSlot :vnode="defaultSlot"></kSlot>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, nextTick, onUnmounted } from 'vue';
import { setStyle } from '../utils/index';
import createSlot from '../hooks/createSlots';
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
const triangle = ref<any>();
const currentTooltipHeight = ref<any>(0);
const dom = ref<any>();
const domStyle = ref<any>({});
const position = ref<string>();
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
  // 创建小三角
  triangle.value = document.createElement('span');
  triangle.value.className = 'tooltip-triangle';
  tooltipContent.value.innerHTML = props.content;
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
  position.value = props.position;
  // 获取兄弟节点定位信息
  const { top, left, right, height: dHeight, width: dWidth } = dom.value.getBoundingClientRect();
  domStyle.value = dom.value.getBoundingClientRect();
  const { offsetWidth: width } = tooltipContent.value;
  console.log(window.innerWidth - left - dWidth, right, dWidth / 2, width / 2);
  // 右边边界处理 在不满足tooltip宽度的情况下,先下边显示再不满足条件变为左边
  if (position.value === 'right') {
    if (
      window.innerWidth - left - dWidth >= width / 3 &&
      window.innerWidth - left - dWidth < width
    ) {
      position.value = 'bottom';
    } else if (
      window.innerWidth - left - dWidth >= 0 &&
      window.innerWidth - left - dWidth < width / 3
    ) {
      position.value = `bottom`;
    }
  }

  // 上边边界处理
  if (top < currentTooltipHeight.value) {
    if (position.value === 'top') {
      position.value = 'bottom';
    }
  }

  // 下边边界处理
  if (window.innerHeight - top - dHeight < currentTooltipHeight.value) {
    if (position.value === 'bottom') {
      position.value = 'top';
    }
  }

  if (position.value !== 'left' && window.innerWidth - left - dWidth < 0) {
    position.value = 'left';
  }

  // 提示框的top left信息
  let currentTop: any = null;
  let currentLeft: any = null;
  const currentPosition = position.value.split('-')[0];
  // 对于12方位的判断
  if (currentPosition === 'left' || currentPosition === 'right') {
    currentLeft = currentPosition === 'left' ? `${left - width - 10}px` : `${left + dWidth + 10}px`;
    if (position.value === `${currentPosition}-start`) {
      currentTop = `${top}px`;
    } else if (position.value === `${currentPosition}-end`) {
      currentTop = `${top - (currentTooltipHeight.value - dHeight)}px`;
    } else {
      currentTop = `${top - (currentTooltipHeight.value / 2 - dHeight / 2)}px`;
    }
  } else if (currentPosition === 'top' || currentPosition === 'bottom') {
    currentTop =
      currentPosition === 'top'
        ? `${top - currentTooltipHeight.value - 10}px`
        : `${top + dHeight + 10}px`;
    if (position.value === `${currentPosition}-start`) {
      currentLeft = `${left}px`;
    } else if (position.value === `${currentPosition}-end`) {
      currentLeft = `${left - (width - dWidth)}px`;
    } else {
      currentLeft = `${left - (width / 2 - dWidth / 2)}px`;
    }
  }
  setStyle(tooltipContent.value, {
    top: currentTop,
    left: currentLeft,
  });
  tooltipContent.value.className = `tooltip-content ${`tooltip-position-${position.value}`}`;
  // 定位后获取最新高度重新赋值
  currentTooltipHeight.value = tooltipContent.value.offsetHeight;
};

// watch(
//   () => currentTooltipHeight.value,
//   () => {
//     console.log(55);
//     setTooltipStyle();
//   },
// );
</script>
<style lang="scss" scoped>
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
  z-index: 90;
  white-space: nowrap;
  // &::before {
  //   position: fixed;
  //   inset: 0;
  //   margin: auto;
  //   content: '';
  //   width: 10px;
  //   height: 10px;
  //   border: 6px solid transparent;
  //   z-index: 1;
  //   box-sizing: border-box;
  // }
  &:hover {
    opacity: 1;
  }
  // &.tooltip-position-left {
  //   &::before {
  //     right: -12px;
  //     left: unset;
  //     border-left-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-top {
  //   &::before {
  //     bottom: -12px;
  //     top: unset;
  //     border-top-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-right {
  //   &::before {
  //     left: -12px;
  //     right: unset;
  //     border-right-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-bottom {
  //   &::before {
  //     bottom: unset;
  //     top: -12px;
  //     border-bottom-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-left-start {
  //   &::before {
  //     right: -12px;
  //     left: unset;
  //     border-left-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-left-end {
  //   &::before {
  //     right: -12px;
  //     left: unset;
  //     border-left-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-top-start {
  //   &::before {
  //     bottom: -12px;
  //     top: unset;
  //     border-top-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-top-end {
  //   &::before {
  //     bottom: -12px;
  //     top: unset;
  //     border-top-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-right-start {
  //   &::before {
  //     left: -12px;
  //     right: unset;
  //     border-right-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-right-end {
  //   &::before {
  //     left: -12px;
  //     right: unset;
  //     border-right-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-bottom-start {
  //   &::before {
  //     bottom: unset;
  //     top: -12px;
  //     border-bottom-color: rgb(26, 26, 26);
  //   }
  // }
  // &.tooltip-position-bottom-end {
  //   &::before {
  //     bottom: unset;
  //     top: -12px;
  //     border-bottom-color: rgb(26, 26, 26);
  //   }
  // }
  .tooltip-triangle {
    width: 10px;
    height: 6px;
    clip-path: polygon(50% 100%, 0% 0%, 0% 100%);
    background-color: #000;
  }
}
</style>
