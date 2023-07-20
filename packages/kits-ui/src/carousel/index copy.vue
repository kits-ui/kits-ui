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
        :class="currentIndex - 1 === i ? 'actived' : ''"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useSlots, ref } from 'vue';
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
});
const slots = useSlots();
const defaultSlot: any = slots.default && slots.default()[0];
const kCarouselList = ref<any>();
const kCarouselItem = ref<any>();
const kCarousel = ref<any>();
const kCarouselItemList = ref<any>();
const currentIndex = ref<number>(0);
const direction = ref<string>('');

onMounted(async () => {
  await init();
  await kCarouseAnimate();
});

/**
 * 初始化样式
 */
const init = () => {
  const { height, width } = kCarousel.value.getBoundingClientRect();
  // 使用ref的形式无法统一处理补位,因此使用dom操作
  kCarouselItemList.value = document.getElementsByClassName('k-carousel-item');
  // 遍历item设置宽高
  Array.from(kCarouselItemList.value).map((item: any) => {
    setStyle(item, {
      width: `${width}px`,
      height: `${height}px`,
    });
  });
  // 根据direction来设置list的宽高
  if (props.direction === 'top' || props.direction === 'bottom') {
    direction.value = 'horizontal';
    setStyle(kCarouselList.value, { width: `${width * defaultSlot?.children.length + width}px` });
    // 设置每小块的宽度
    kCarousel.value.style.setProperty('--k-carousel-item-w', width);
  } else {
    direction.value = 'vertical';
    setStyle(kCarouselList.value, {
      height: `${height * defaultSlot?.children.length + height}px`,
    });
    // 设置每小块的高度
    kCarousel.value.style.setProperty('--k-carousel-item-h', height);
  }
};

const kCarouseAnimate = async () => {
  // if (currentIndex.value === 2) {
  // }
  console.log(direction.value);
  currentIndex.value += 1;
  if (currentIndex.value === kCarouselItemList.value.length) {
    setTimeout(() => {
      setStyle(kCarouselList.value, { transition: `none` });
      setStyle(kCarouselList.value, {
        transform: direction.value === 'horizontal' ? `translateX(0)` : `translateY(0)`,
      });
      currentIndex.value = 0;
      kCarouseAnimate();
    }, props.duration);
  } else {
    setTimeout(() => {
      setStyle(kCarouselList.value, { transition: `transform ${props.duration / 1000}s` });
      setStyle(kCarouselList.value, {
        transform:
          direction.value === 'horizontal'
            ? `translateX(-${(100 / kCarouselItemList.value.length) * currentIndex.value}%)`
            : `translateY(-${(100 / kCarouselItemList.value.length) * currentIndex.value}%)`,
      });
      kCarouseAnimate();
    }, props.duration);
  }
};
</script>

<style scoped></style>
