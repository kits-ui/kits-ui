<template>
  <div ref="kCarousel" class="k-carousel">
    <div ref="kCarouselList" class="k-carousel-list" :class="props.direction">
      <div
        ref="kCarouselItem"
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-item"
        :data-key="i"
      >
        <component :is="item"></component>
      </div>
      <!-- 补第一位 -->
      <div ref="kCarouselItem" class="k-carousel-item">
        <component :is="defaultSlot?.children[0]"></component>
      </div>
    </div>
    <div class="k-carousel-indicators" :class="props.direction">
      <span
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-indicators-item"
        :data-key="i - 1"
        :class="currentIndex === i ? 'actived' : ''"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useSlots, ref, reactive } from 'vue';
import { setStyle } from '../utils/index';

const props = defineProps({
  direction: {
    type: String,
    default: 'bottom',
  },
  duration: {
    type: Number,
    default: 1500,
  },
  interval: {
    type: Number,
    default: 1500,
  },
});
const slots = useSlots();
const defaultSlot: any = slots.default && slots.default()[0];
const kCarouselList = ref<any>();
const kCarouselItem = ref<any>();
const kCarousel = ref<any>();
const kCarouselClientRect = reactive<any>({});
const kCarouselItemList = ref<any>();
const currentIndex = ref<number>(-1);
const direction = ref<string>('');
const timer = ref<any>();

onMounted(async () => {
  const { height, width } = kCarousel.value.getBoundingClientRect();
  kCarouselClientRect.width = width;
  kCarouselClientRect.height = height;
  await init();
  await setTimeoutFn();

  window.addEventListener('mouseover', (e: any) => {
    if (e.target.classList[0] === 'k-carousel-indicators-item') {
      const activedSpanList: any = document.getElementsByClassName('k-carousel-indicators-item');
      Array.from(activedSpanList).forEach((element: any) => {
        element.classList.remove('actived');
      });
      e.target.classList.add('actived');
      currentIndex.value = Number(e.target.dataset.key);
      clearTimeout(timer.value);
      kCarouseAnimate();
    }
  });
  window.addEventListener('mouseout', (e: any) => {
    if (e.target.className === 'k-carousel-indicators-item actived') {
      setTimeoutFn();
    }
  });

  document.addEventListener('visibilitychange', (e) => {
    console.log(e, 666);
    if (document.hidden) {
      clearTimeout(timer.value);
    } else {
      setTimeoutFn();
    }
  });
});

/**
 * 初始化样式
 */
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
  if (props.direction === 'top' || props.direction === 'bottom') {
    direction.value = 'horizontal';
    setStyle(kCarouselList.value, {
      width: `${
        kCarouselClientRect.width * defaultSlot?.children.length + kCarouselClientRect.width
      }px`,
    });
    // 设置每小块的宽度
    kCarousel.value.style.setProperty('--k-carousel-item-w', kCarouselClientRect.width);
  } else {
    direction.value = 'vertical';
    setStyle(kCarouselList.value, {
      height: `${
        kCarouselClientRect.height * defaultSlot?.children.length + kCarouselClientRect.height
      }px`,
    });
    // 设置每小块的高度
    kCarousel.value.style.setProperty('--k-carousel-item-h', kCarouselClientRect.height);
  }
};

const kCarouseAnimate = () => {
  currentIndex.value += 1;
  setStyle(kCarouselList.value, { transition: `left ${props.duration / 1000}s` });
  setStyle(kCarouselList.value, {
    left: `calc(-${kCarouselClientRect.width}px * ${currentIndex.value})`,
  });
  console.log(currentIndex.value);
  if (currentIndex.value > 5) {
    currentIndex.value = 0;
    setStyle(kCarouselList.value, { transition: `none` });
    setStyle(kCarouselList.value, {
      left: `0px`,
    });
  }
};

const setTimeoutFn = () => {
  let n = props.interval;
  if (currentIndex.value === 5) {
    document.getElementsByClassName('k-carousel-indicators-item')[0].classList.add('actived');
    // n = 0;
  }
  if (currentIndex.value === 5 || currentIndex.value === 6) {
    n = props.interval / 2;
  }
  if (currentIndex.value === -1) {
    n = 0;
  }
  timer.value = setTimeout(async () => {
    await kCarouseAnimate();
    setTimeoutFn();
  }, n);
};
</script>

<style scoped></style>
