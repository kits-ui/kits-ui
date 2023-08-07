<template>
  <div ref="kCarousel" class="k-carousel">
    <div ref="kCarouselList" class="k-carousel-list" :class="props.direction">
      <!-- 补最后一位 -->
      <div class="k-carousel-item">
        <component :is="defaultSlot?.children[defaultSlot?.children.length - 1]"></component>
      </div>
      <div
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-item"
        :data-key="i"
      >
        <component :is="item"></component>
      </div>
      <!-- 补第一位 -->
      <div class="k-carousel-item">
        <component :is="defaultSlot?.children[0]"></component>
      </div>
    </div>
    <div
      v-if="props.direction === 'horizontal' && props.arrow === 'display'"
      class="prev"
      @click="prev"
    >
      <arrowleft></arrowleft>
    </div>
    <div
      v-if="props.direction === 'horizontal' && props.arrow === 'display'"
      class="next"
      @click="next"
    >
      <arrowright></arrowright>
    </div>
    <div class="k-carousel-indicators" :class="props.direction">
      <span
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-indicators-item"
        :class="currentIndex === i + 1 ? 'actived' : ''"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useSlots, ref, reactive, PropType } from 'vue';
import { setStyle } from '../utils/index';
import { arrowleft, arrowright } from '../icon/index';

const props = defineProps({
  // 箭头是否显示
  arrow: {
    type: String,
    default: 'none',
  },
  // 轮播的方向
  direction: {
    type: String,
    default: 'horizontal',
  },
  duration: {
    type: Number,
    default: 1000,
  },
  interval: {
    type: Number as PropType<number>,
    validator: (value: number) => {
      return value >= 1000 && value <= 5000; // 自定义验证规则，设置最小值为1000，最大值为5000
    },
    default: 1200,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
});
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

onMounted(async () => {
  const { height, width } = kCarousel.value.getBoundingClientRect();
  kCarouselClientRect.width = width;
  kCarouselClientRect.height = height;
  await init();
  await setTimeoutFn();
  // 监听过渡结束
  kCarouselList.value.addEventListener('transitionend', () => {
    // 触发下一页按钮 并判断是否是补第一页(最后一页)
    if (currentType.value === 'next' && currentIndex.value >= kCarouselItemList.value.length - 1) {
      setStyle(kCarouselList.value, {
        transition: `none`,
        [currentDirection.value]: `-${
          currentDirection.value === 'left' ? kCarouselClientRect.width : kCarouselClientRect.height
        }px`,
      });
      currentIndex.value = 1;
      console.log(currentIndex.value);
    }
    // 触发上一页按钮 并判断是否是补最后一页(第一页)
    if (currentType.value === 'prev' && currentIndex.value < 1) {
      setStyle(kCarouselList.value, {
        transition: `none`,
        [currentDirection.value]: `-${
          (currentDirection.value === 'left'
            ? kCarouselClientRect.width
            : kCarouselClientRect.height) *
          (kCarouselItemList.value.length - 2)
        }px`,
      });
      // 假设当前数组内容为  5 1 2 3 4 5 1 那么 -2 是将当前页从1定位到5,需要走一个补5 一个补1
      currentIndex.value = kCarouselItemList.value.length - 2;
    }
  });
  // 监测离开页面暂停自动轮播
  document.addEventListener('visibilitychange', (e) => {
    console.log(e, 666);
    if (document.hidden) {
      clearTimeout(timer.value);
    } else {
      setTimeoutFn();
    }
  });
});

const init = () => {
  // 使用ref的形式无法统一处理补位,因此使用dom操作
  kCarouselItemList.value = document.getElementsByClassName('k-carousel-item');
  // 遍历item设置宽高
  Array.from(kCarouselItemList.value).map((item: any) => {
    setStyle(item, {
      width: `${kCarouselClientRect.width}px`,
      height: `${kCarouselClientRect.height}px`,
    });
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

/**
 * 上一页
 */
const prev = throttled(() => {
  currentType.value = 'prev';
  switchPage();
}, 1050);

/**
 * 下一页
 */
const next = throttled(() => {
  currentType.value = 'next';
  switchPage();
}, 1050);

/**
 * 切换回调
 */
const switchPage = () => {
  if (currentType.value === 'next') {
    currentIndex.value += 1;
  } else {
    currentIndex.value -= 1;
  }
  setStyle(kCarouselList.value, {
    transition: `${currentDirection.value} ${props.duration / 1000}s`,
    [currentDirection.value]: `calc(-${
      currentDirection.value === 'left' ? kCarouselClientRect.width : kCarouselClientRect.height
    }px * ${currentIndex.value})`,
  });
};

const setTimeoutFn = () => {
  if (props.autoplay) {
    let n = props.interval;
    timer.value = setTimeout(() => {
      next();
      setTimeoutFn();
    }, n);
  } else {
    return;
  }
};
</script>

<style scoped></style>
