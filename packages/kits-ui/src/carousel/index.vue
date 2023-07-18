<template>
  <div ref="kCarousel" class="k-carousel">
    <div ref="kCarouselList" class="k-carousel-list" :class="props.direction">
      <div
        ref="kCarouselItem"
        v-for="(item, i) in defaultSlot?.children"
        :key="i"
        class="k-carousel-item"
      >
        <component :is="item"></component>
      </div>
      <!-- 补第一位 -->
      <div ref="kCarouselItem" class="k-carousel-item">
        <component :is="defaultSlot?.children[0]"></component>
      </div>
    </div>
    <div class="k-carousel-indicators" :class="props.direction">
      <span v-for="(item, i) in defaultSlot?.children" :key="i"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useSlots, ref, watch } from 'vue';
import { setStyle } from '../utils/index';

const props = defineProps({
  direction: {
    type: String,
    default: 'bottom',
  },
  speed: {
    type: Number,
    default: 1.5,
  },
});
const slots = useSlots();
const defaultSlot: any = slots.default && slots.default()[0];
const kCarouselList = ref<any>();
const kCarouselItem = ref<any>();
const kCarousel = ref<any>();

watch(
  () => kCarouselList.value && getComputedStyle(kCarouselList.value).transform,
  (value) => {
    console.log(value);
    // getComputedStyle(kCarouselList.value).transform;
  },
);

onMounted(() => {
  // 传递变量(写在行内会暴露在页面伤)
  kCarousel.value.style.setProperty('--k-carousel-s', defaultSlot?.children.length);
  kCarousel.value.style.setProperty('--k-carousel-speed', `${props.speed}s`);

  const { height, width } = kCarousel.value.getBoundingClientRect();
  // 使用ref的形式无法统一处理补位,因此使用dom操作
  const kCarouselItem: any = document.getElementsByClassName('k-carousel-item');
  // 遍历item设置宽高
  Array.from(kCarouselItem).map((item: any) => {
    setStyle(item, {
      width: `${width}px`,
      height: `${height}px`,
    });
  });
  // 根据direction来设置list的宽高
  if (props.direction === 'top' || props.direction === 'bottom') {
    setStyle(kCarouselList.value, { width: `${width * defaultSlot?.children.length + width}px` });
    // 设置每小块的宽度
    kCarousel.value.style.setProperty('--k-carousel-item-w', width);
  } else {
    setStyle(kCarouselList.value, { height: `${height * defaultSlot?.children.length}px` });
    // 设置每小块的高度
    kCarousel.value.style.setProperty('--k-carousel-item-h', height);
  }

  console.log(getComputedStyle(kCarouselList.value).transform);
});
</script>

<style scoped></style>
