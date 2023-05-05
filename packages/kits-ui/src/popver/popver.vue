<template>
  <component
    :is="defaultSlot"
    :class="`k-${props.name}`"
    @click="(e) => props.trigger === 'click' && clickFn(e)"
    @mouseenter="(e) => props.trigger === 'hover' && mouseoverFn(e)"
    @mouseout="(e) => props.trigger === 'hover' && mouseoutFn(e)"
  ></component>
  <Teleport to="body">
    <transition :duration="300">
      <div v-if="isShow" ref="popver" class="k_popver" :class="props.theme">
        <div ref="popverContent" class="popver-content">
          <slot name="content">{{ props.content }}</slot>
        </div>
        <span ref="triangle" class="popver-triangle" :class="currentPosition"></span>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, nextTick, onUnmounted } from 'vue';
import { setStyle } from '../utils/index';
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'top',
  },
  theme: {
    type: String,
    default: 'dark',
  },
  name: {
    type: String,
    default: 'popver',
  },
  trigger: {
    type: String,
    default: 'click',
  },
});

const slots = useSlots();
const defaultSlot = slots.default && slots.default()[0];
const popver = ref<any>();
const popverContent = ref<any>();
const triangle = ref<any>();
const dom = ref<any>();
const currentPosition = ref<string>();
const isShow = ref<boolean>(false);

onMounted(() => {
  // 鼠标移入目标元素的操作
  // window.addEventListener('mouseenter', mouseoverFn);
  // 鼠标在目标元素与提示框中移动的操作
  // window.addEventListener('mousemove', mousemoverFn);
  // window.addEventListener('mouseleave', mouseleaveFn, true);
  // 滚动事件时的操作
  window.addEventListener('scroll', scrollFn);
});

onUnmounted(() => {
  // window.removeEventListener('mouseenter', mouseoverFn);
  // window.removeEventListener('mousemove', mousemoverFn);
  // window.removeEventListener('mouseleave', mouseleaveFn);
  window.removeEventListener('scroll', scrollFn);
});

const mouseoverFn = (e) => {
  dom.value = e.target;
  nextTick(async () => {
    isShow.value = true;
    await init();
    if (dom.value) {
      // popver.value.style.opacity = '1';
      // popver.value.style.visibility = 'visible';
    }
  });
};

const clickFn = (e) => {
  dom.value = e.target;
  nextTick(async () => {
    isShow.value = true;
    await init();
  });
};
// const mousemoverFn = (e) => {
//   if (tooltipContent.value) {
//     if (e.target === dom.value || e.target === tooltipContent.value) {
//       tooltip.value.style.opacity = '1';
//       tooltip.value.style.visibility = 'visible';
//     }
//   }
// };

// const mouseleaveFn = (e) => {
//   console.log(e.target);
//   if (tooltipContent.value) {
//     if (e.target === tooltipContent.value) {
//       tooltip.value.style.opacity = '0';
//       tooltip.value.style.visibility = 'hidden';
//     }
//   }
// };

const mouseoutFn = (e) => {
  console.log(e.target);
  if (popverContent.value) {
    if (e.target === popverContent.value) {
      popver.value.style.opacity = '0';
      popver.value.style.visibility = 'hidden';
    }
  }
};

const scrollFn = () => {
  if (dom.value) {
    if (props.name !== 'tooltip') {
      init();
    } else {
      isShow.value = false;
    }
  }
};

const init = () => {
  console.log(dom.value);
  dom.value.classList.add('k-tooltip');
  nextTick(async () => {
    await settooltipStyle();
  });
};

const settooltipStyle = () => {
  currentPosition.value = props.position;
  // 获取兄弟节点定位信息
  const { top, left, height, width } = dom.value.getBoundingClientRect();
  const { offsetWidth: tWidth, offsetHeight: tHeight } = popverContent.value;

  // 上边边界处理
  if (top < tHeight + 10) {
    if (currentPosition.value === 'top') {
      currentPosition.value = 'bottom';
    }
  }

  // 下边边界处理
  if (window.innerHeight - top - height < tHeight + 10) {
    if (currentPosition.value === 'bottom') {
      currentPosition.value = 'top';
    }
  }

  // 左边边界处理
  if (left < (tWidth + 10) / 2) {
    if (currentPosition.value === 'left') {
      currentPosition.value = 'right';
    }
  }

  // 右边边界处理
  if (window.innerWidth - left - width < (tWidth + 10) / 2) {
    if (currentPosition.value === 'right') {
      currentPosition.value = 'left';
    }
  }

  // 提示框的top left信息
  let triangleTop: any = null;
  let triangleLeft: any = null;
  let currentTop: any = null;
  let currentBottom: any = 'unset';
  let currentLeft: any = null;
  let currentRight: any = 'unset';

  // 横向挤压判断
  console.log(props.position);
  if (currentPosition.value === 'top' || currentPosition.value === 'bottom') {
    // 小三角定位
    triangleLeft = `${left + width / 2 - 5}px`;
    triangleTop = currentPosition.value === 'top' ? `${top - 10}px` : `${top + height}px`;
    // 提示框top/bottom
    currentTop =
      currentPosition.value === 'top' ? `${top - 10 - tHeight}px` : `${top + height + 10}px`;
    if (window.innerWidth - left - width / 2 <= tWidth / 2) {
      currentRight = '0';
      currentLeft = `unset`;
    } else if (window.innerWidth - left - width / 2 > tWidth / 2 && left + width / 2 < tWidth / 2) {
      currentLeft = `0px`;
    } else {
      currentLeft = `${left - (tWidth - width) / 2}px`;
    }
  }
  // 纵向挤压判断
  if (currentPosition.value === 'left' || currentPosition.value === 'right') {
    // 小三角定位
    triangleLeft = currentPosition.value === 'left' ? `${left - 10}px` : `${left + width}px`;
    triangleTop = `${top + height / 2 - 5}px`;
    // 提示框top/bottom
    currentLeft =
      currentPosition.value === 'left' ? `${left - tWidth - 10}px` : `${left + width + 10}px`;
    if (window.innerHeight - top - height / 2 <= tHeight / 2 - height / 2) {
      currentBottom = '0';
      currentTop = `unset`;
    } else if (
      window.innerHeight - top - height / 2 > tHeight / 2 - height / 2 &&
      top + height / 2 < tHeight / 2 - height / 2
    ) {
      currentTop = `0px`;
    } else {
      currentTop = `${top + height / 2 - tHeight / 2}px`;
    }
  }

  setStyle(triangle.value, {
    top: triangleTop,
    left: triangleLeft,
  });
  setStyle(popverContent.value, {
    top: currentTop,
    bottom: currentBottom,
    left: currentLeft,
    right: currentRight,
  });
};
</script>
