<template>
  <div ref="kCarousel" class="k-carousel">
    <div ref="kCarouselList" class="k-carousel-list" :class="props.direction">
      <div
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-item"
        :data-key="i"
      >
        <component :is="item"></component>
      </div>
    </div>
    <arrowleft
      v-if="props.direction === 'horizontal' && props.arrow"
      ref="leftArrow"
      class="kCarouselPrev"
      @click="prev"
    >
    </arrowleft>
    <arrowright
      v-if="props.direction === 'horizontal' && props.arrow"
      ref="rightArrow"
      class="kCarouselNext"
      @click="next"
    ></arrowright>
    <div v-if="indicators" class="k-carousel-indicators" :class="props.direction">
      <span
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        ref="kCarouselIndicatorsItem"
        :data-key="i"
        class="k-carousel-indicators-item"
        :class="currentIndex === i + 1 ? 'actived' : ''"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useSlots, ref, reactive, PropType } from 'vue';
import { setStyle } from '../utils/index';
import { arrowleft, arrowright } from '../icon/index';

const props = defineProps({
  defaultValue: {
    type: Number,
    default: 1,
  },
  // 箭头是否显示
  arrow: {
    type: Boolean,
    default: true,
  },
  // 轮播的方向
  direction: {
    type: String,
    default: 'horizontal',
  },
  // 动画时间,不对外开放
  duration: {
    type: Number,
    default: 1000,
  },
  // 轮播间隔
  interval: {
    type: Number as PropType<number>,
    validator: (value: number) => {
      return value >= 1200 && value <= 15000; // 自定义验证规则，设置最小值为1200，最大值为15000
    },
    default: 2000,
  },
  // 是否自动轮播
  autoplay: {
    type: Boolean,
    default: true,
  },
  // 是否显示指示器
  indicators: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['change', 'prev', 'next', 'moveTo']);
const slots = useSlots();
const defaultSlot: any = slots.default && slots.default()[0];

// 获取整个kCarousel的dom
const kCarousel = ref<any>();
// 定义list
const kCarouselList = ref<any>();
// 获取整个item的集合
const kCarouselItemList = ref<any>();
// 定义轮播区域大小相关盒子
const kCarouselClientRect = reactive<any>({});
// 根据当前轮播方向衍生的过渡运行方向
const currentDirection = ref<string>('left');
// 当前item
const currentIndex = ref<number>(1);
// 当前点击的方向按钮
const currentType = ref<string>('');
// 自动轮播定时器
const timer = ref<any>();
// 指示器dom
const kCarouselIndicatorsItem = ref<any>();
// 左右按钮
const leftArrow = ref<any>();
const rightArrow = ref<any>();

onMounted(async () => {
  currentIndex.value = props.defaultValue;
  const { height, width } = kCarousel.value.getBoundingClientRect();
  kCarouselClientRect.width = width;
  kCarouselClientRect.height = height;
  await init();
  await setTimeoutFn();
  //   // 监听过渡结束
  //   kCarouselList.value.addEventListener('transitionend', transitionendFn);
  // 监测离开页面暂停自动轮播
  window.addEventListener('visibilitychange', visibilitychangeFn);
  window.addEventListener('mouseover', mouseoverFn);
  window.addEventListener('click', clickFn);
  window.addEventListener('mouseout', mouseoutFn);
});

const moveTo = (value: number) => {
  console.log(value, 'valuevaluevaluevaluevalue');
  kCarouselList.value &&
    setStyle(kCarouselList.value, {
      transition: `${currentDirection.value} ${props.duration / 1000}s`,
      [currentDirection.value]: `calc(-${
        currentDirection.value === 'left' ? kCarouselClientRect.width : kCarouselClientRect.height
      }px * ${value})`,
    });
  currentIndex.value = value;
  emit('change', value);
};

defineExpose({
  moveTo,
});
onUnmounted(() => {
  // kCarouselList.value?.removeEventListener('transitionend', transitionendFn);
  window.removeEventListener('visibilitychange', visibilitychangeFn);
  window.removeEventListener('mouseover', mouseoverFn);
  window.removeEventListener('click', clickFn);
  window.removeEventListener('mouseout', mouseoutFn);
});

/**
 * 监听离开页面回调
 */
const visibilitychangeFn = (e: any) => {
  console.log(e, 666);
  if (document.hidden) {
    clearTimeout(timer.value);
  } else {
    setTimeoutFn();
  }
};

/**
 * 监听鼠标移入回调
 */
const mouseoverFn = (e: any) => {
  // 非当前轮播子元素直接退出
  if (!kCarousel.value?.contains(e.target)) {
    return;
  }
  // 判断指示器悬浮
  kCarouselIndicatorsItem.value?.forEach((element: any, i: number) => {
    if (e.target === element) {
      // currentIndex.value = Number(e.target.dataset.key);
      clearTimeout(timer.value);
      timer.value = null;
      moveTo(i + 1);
    }
  });
  // 判断是否鼠标悬浮左右箭头
  if (
    e.target === leftArrow.value?.$el ||
    e.target === leftArrow.value?.$el.contains(e.target) ||
    e.target === rightArrow.value?.$el ||
    e.target === rightArrow.value?.$el.contains(e.target)
  ) {
    clearTimeout(timer.value);
    timer.value = null;
  }
};

/**
 * 监听点击回调
 */
const clickFn = (e: any) => {
  if (
    e.target === leftArrow.value?.$el ||
    e.target === leftArrow.value?.$el.contains(e.target) ||
    e.target === rightArrow.value?.$el ||
    e.target === rightArrow.value?.$el.contains(e.target)
  ) {
    clearTimeout(timer.value);
    timer.value = null;
  }
};

/**
 * 监听鼠标移出回调
 */
const mouseoutFn = (e: any) => {
  // 非当前轮播子元素直接退出
  if (!kCarousel.value?.contains(e.target)) {
    return;
  }
  if (
    e.target.className === 'k-carousel-indicators-item actived' ||
    e.target === leftArrow.value?.$el ||
    e.target === rightArrow.value?.$el
  ) {
    setTimeoutFn();
  }
};

// /**
//  * 初始化
//  */
const init = () => {
  console.log(kCarouselList.value);
  const firstCloneNode = kCarouselList.value.firstElementChild.cloneNode(true);
  const lastCloneNode = kCarouselList.value.lastElementChild.cloneNode(true);
  kCarouselList.value.appendChild(firstCloneNode);
  kCarouselList.value.insertBefore(lastCloneNode, kCarouselList.value.firstElementChild);
  // 获取所有item
  kCarouselItemList.value = Array.from(kCarouselList.value.children).map((item: any) => {
    if (item.className === 'k-carousel-item') {
      setStyle(item, {
        width: `${kCarouselClientRect.width}px`,
        height: `${kCarouselClientRect.height}px`,
      });
      return item;
    }
  });
  // 根据direction来设置list的宽高
  if (props.direction === 'horizontal') {
    currentDirection.value = 'left';
    setStyle(kCarouselList.value, {
      width: `${
        kCarouselClientRect.width * defaultSlot?.children.length + kCarouselClientRect.width * 2
      }px`,
      left: `-${kCarouselClientRect.width}px`,
    });
    // 设置每小块的宽度
  } else {
    currentDirection.value = 'top';
    setStyle(kCarouselList.value, {
      height: `${
        kCarouselClientRect.height * defaultSlot?.children.length + kCarouselClientRect.height * 2
      }px`,
      top: `-${kCarouselClientRect.height}px`,
    });
    // 设置每小块的高度
  }
  // 初始定位
  // switchPage();
  // kCarousel.value.style.setProperty('--k-carousel-item-h', kCarouselClientRect.height);
};

const throttled = (fn: any, delay: number) => {
  let oldtime = Date.now();
  return function (...args) {
    let newtime = Date.now();
    if (newtime - oldtime >= delay) {
      fn.apply(null, args);
      oldtime = Date.now();
    }
  };
};

// /**
//  * 上一页
//  */
const prev = throttled(() => {
  currentType.value = 'prev';
  console.log(currentIndex.value, 4545646);
  if (currentIndex.value === 1) {
    kCarouselList.value &&
      setStyle(kCarouselList.value, {
        transition: `none`,
        [currentDirection.value]: `calc(-${
          currentDirection.value === 'left' ? kCarouselClientRect.width : kCarouselClientRect.height
        }px * ${defaultSlot?.children.length + 1})`,
      });
    // 读取dom 强制渲染
    kCarouselList.value.clientHeight;
    moveTo(defaultSlot?.children.length);
  } else {
    moveTo(currentIndex.value - 1);
  }
  // switchPage();
  if (!timer.value) {
    emit('prev');
  }
}, 1000);

// /**
//  * 下一页
//  */
const next = throttled(() => {
  currentType.value = 'next';
  console.log(currentIndex.value, 2312312312);
  if (currentIndex.value === defaultSlot?.children.length) {
    console.log('dasdas');
    kCarouselList.value &&
      setStyle(kCarouselList.value, {
        transition: `none`,
        [currentDirection.value]: `calc(-${
          currentDirection.value === 'left' ? kCarouselClientRect.width : kCarouselClientRect.height
        }px * ${0})`,
      });
    // 读取dom 强制渲染
    kCarouselList.value.clientHeight;
    moveTo(1);
  } else {
    moveTo(currentIndex.value + 1);
  }
  // switchPage();
  if (!timer.value) {
    emit('next');
  }
}, 1000);

const setTimeoutFn = () => {
  if (props.autoplay) {
    timer.value = setTimeout(() => {
      next();
      setTimeoutFn();
    }, props.interval);
  } else {
    return;
  }
};
</script>

<style scoped></style>
