<template>
  <component
    :is="defaultSlot"
    :id="`k-${props.name}-${idNum}`"
    :class="`k-${props.name}`"
    @click="(e) => props.trigger === 'click' && clickFn(e)"
    @mouseenter="(e) => props.trigger === 'hover' && mouseenterFn(e)"
    @mouseout="(e) => props.trigger === 'hover' && mouseoutFn()"
  ></component>
  <Teleport to="body">
    <transition :duration="300">
      <div v-if="isShow" ref="popver" :class="[`k_${props.name}`, props.theme]">
        <div
          :id="`${props.name}-${idNum}`"
          ref="popverContent"
          :class="`${props.name}-content`"
          :style="{ width: props.name === 'tooltip' ? 'fit-content' : `${props.width}px` }"
        >
          <div v-if="props.name !== 'tooltip'" name="title" :class="`${props.name}-title`">
            {{ props.title }}
          </div>
          <slot name="content">{{ props.content }}</slot>
        </div>
        <span
          v-if="props.arrow"
          ref="triangle"
          :class="[`${props.name}-triangle`, currentPosition]"
        ></span>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, useSlots, nextTick, onUnmounted, watch } from 'vue';
import { setStyle, setIdNum } from '../utils/index';
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
  arrow: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 150,
  },
  title: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: false,
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
const idNum = ref<number>(0);

watch(
  () => props.visible,
  (newVal) => {
    console.log(newVal);
    if (!newVal) {
      popver.value.style.opacity = '0';
      popver.value.style.visibility = 'hidden';
      // isShow.value = false;
    }
  },
);

onMounted(() => {
  idNum.value = setIdNum();
  // 鼠标移入目标元素的操作
  window.addEventListener('mouseover', mouseoverFn);
  // 鼠标在目标元素与提示框中移动的操作
  window.addEventListener('mousemove', mousemoverFn);
  // 点击事件
  window.addEventListener('mousedown', mousedownFn);
  // 滚动事件时的操作
  window.addEventListener('scroll', scrollFn);
});

onUnmounted(() => {
  window.removeEventListener('mouseover', mouseoverFn);
  window.removeEventListener('mousemove', mousemoverFn);
  window.addEventListener('click', mousedownFn);
  window.removeEventListener('scroll', scrollFn);
});

/**
 * 全局鼠标移入事件
 * @param e 事件对象
 */
const mouseoverFn = (e) => {
  if (props.trigger !== 'hover') {
    return;
  }
  if (e.target === dom.value) {
    init();
  }
  if (popverContent.value) {
    if (popverContent.value.contains(e.target)) {
      popver.value.style.opacity = '1';
      popver.value.style.visibility = 'visible';
    } else {
      popver.value.style.opacity = '0';
      popver.value.style.visibility = 'hidden';
    }
  }
};

/**
 * 全局鼠标移动事件
 * @param e 事件对象
 */
const mousemoverFn = (e) => {
  if (props.trigger !== 'hover') {
    return;
  }
  if (popverContent.value) {
    if (e.target === dom.value || popverContent.value.contains(e.target)) {
      popver.value.style.opacity = '1';
      popver.value.style.visibility = 'visible';
    }
  }
};

/**
 * 全局鼠标点击事件
 * @param e 事件对象
 */
const mousedownFn = (e) => {
  if (props.trigger === 'hover') {
    return;
  }
  if (popverContent.value) {
    if (!props.visible) {
      if (e.target !== dom.value && !popverContent.value.contains(e.target)) {
        popver.value.style.opacity = '0';
        popver.value.style.visibility = 'hidden';
        isShow.value = false;
      }
    }
    // if (popverContent.value.contains(e.target)) {
    //   popver.value.style.opacity = '1';
    //   popver.value.style.visibility = 'visible';
    // } else {
    //   popver.value.style.opacity = '0';
    //   popver.value.style.visibility = 'hidden';
    // }
  }
};

/**
 * 目标dom鼠标移入事件
 * @param e 事件对象
 */
const mouseenterFn = (e) => {
  dom.value = e.target;
  nextTick(async () => {
    isShow.value = true;
    await init();
  });
};

/**
 * 目标元素点击事件
 * @param e 事件对象
 */
const clickFn = (e) => {
  if (props.trigger === 'hover') {
    return;
  }
  dom.value = e.target;
  nextTick(async () => {
    isShow.value = true;
    await init();
    if (popverContent.value) {
      popver.value.style.opacity = '1';
      popver.value.style.visibility = 'visible';
    }
  });
};

/**
 * 目标元素鼠标移出事件
 */
const mouseoutFn = () => {
  popver.value.style.opacity = '0';
  popver.value.style.visibility = 'hidden';
};

/**
 * 全局滚动监听
 */
const scrollFn = () => {
  if (dom.value) {
    init();
  }
};

/**
 * 初始化
 */
const init = () => {
  nextTick(async () => {
    await settooltipStyle();
  });
};

/**
 * 方位判断
 */
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
    if (props.arrow) {
      triangleLeft = `${left + width / 2 - 5}px`;
      triangleTop = currentPosition.value === 'top' ? `${top - 10}px` : `${top + height}px`;
    }
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
    if (props.arrow) {
      triangleLeft = currentPosition.value === 'left' ? `${left - 10}px` : `${left + width}px`;
      triangleTop = `${top + height / 2 - 5}px`;
    }
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

  props.arrow &&
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
