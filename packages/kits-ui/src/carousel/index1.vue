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
    default: 2500,
  },
});
const slots = useSlots();
const defaultSlot: any = slots.default && slots.default()[0];
const kCarouselList = ref<any>();
const kCarouselItem = ref<any>();
const kCarousel = ref<any>();
const kCarouselClientRect = reactive<any>({});
const kCarouselItemList = ref<any>();
const currentIndex = ref<number>(0);
const direction = ref<string>('');
const timer = ref<any>();
let left: any = 0;

onMounted(async () => {
  const { height, width } = kCarousel.value.getBoundingClientRect();
  kCarouselClientRect.width = width;
  kCarouselClientRect.height = height;
  await init();
  kCarouseAnimate();
  // await setTimeoutFn();

  // window.addEventListener('mouseover', (e: any) => {
  //   if (e.target.classList[0] === 'k-carousel-indicators-item') {
  //     const activedSpanList: any = document.getElementsByClassName('k-carousel-indicators-item');
  //     Array.from(activedSpanList).forEach((element: any) => {
  //       element.classList.remove('actived');
  //     });
  //     e.target.classList.add('actived');
  //     currentIndex.value = Number(e.target.dataset.key);
  //     clearTimeout(timer.value);
  //     kCarouseAnimate();
  //   }
  // });
  // window.addEventListener('mouseout', (e: any) => {
  //   if (e.target.className === 'k-carousel-indicators-item actived') {
  //     setTimeoutFn();
  //   }
  // });
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
  if (left <= -(kCarouselItemList.value.length - 1) * kCarouselClientRect.width) {
    left = 0;
  }
  currentIndex.value += 1;

  setStyle(kCarouselList.value, {
    left: `${left}px`,
  });
  let n: number = left % kCarouselClientRect.width === 0 ? props.duration : 10;
  left -= 10;
  timer.value = setTimeout(() => {
    kCarouseAnimate();
  }, n);
};

// const setTimeoutFn = () => {
//   kCarouseAnimate();
//   timer.value = setTimeout(() => {
//     setTimeoutFn();
//   }, props.duration);
// };
</script>

<style scoped></style>
