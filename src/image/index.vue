<template>
  <div ref="uImage" class="u-image">
    <img :src="props.src" alt="" @click="showPreview" />
    <div v-show="isShowPre" class="u-image-preview">
      <span class="u-image-preview-close" @click="close"></span>
      <span class="u-image-preview-prev" @click="switchImg('prev')">&lt;</span>
      <span class="u-image-preview-next" @click="switchImg('next')">&gt;</span>
      <div class="u-image-bar">
        <span @click="changeScale('reduce')">-</span>
        <span @click="changeScale('amplify')">+</span>
        <span class="left" @click="changeRotate('left')"></span>
        <span class="right" @click="changeRotate('right')"></span>
      </div>
      <img ref="previewImg" :src="currentShow" alt="" class="preview-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const isShowPre = ref<Boolean>(false);
const currentShow = ref<string>('');
const currentIndex = ref<number>(0);
const uImage = ref<any>();
const previewImg = ref<any>();
const scale = ref<number>(1);
const rotate = ref<number>(0);

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  fit: {
    type: String,
    default: '',
  },
  preview: {
    type: Array,
    default: () => [],
  },
});

const fit = computed(() => {
  return props.fit;
});

onMounted(() => {
  currentShow.value = props.preview[0] as string;
  currentIndex.value = 0;
  uImage.value.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      scale.value += e.deltaY * -0.0001;
      if (scale.value < 0.2) {
        scale.value = 0.2;
      } else if (scale.value > 3) {
        scale.value = 3;
      }
      console.log(scale);
      scale.value = Math.min(Math.max(0.125, scale.value), 4);
      previewImg.value.style.transform = `scale(${scale.value})`;
      previewImg.value.style.transition = `all 0.3s`;
    },
    { capture: true, passive: false },
  );
});

// 关闭
const close = () => {
  scale.value = 1;
  previewImg.value.style.transform = `scale(${scale.value})`;
  isShowPre.value = false;
  // document.body.style.overflowY = 'overlay';
};

// 左右切换
const switchImg = (value) => {
  scale.value = 1;
  rotate.value = 0;
  previewImg.value.style.transform = `scale(${scale.value})`;
  previewImg.value.style.transition = `none`;
  if (value === 'prev') {
    if (currentIndex.value === 0) {
      currentIndex.value = props.preview.length - 1;
    } else {
      currentIndex.value -= 1;
    }
  } else {
    if (currentIndex.value === props.preview.length - 1) {
      currentIndex.value = 0;
    } else {
      currentIndex.value += 1;
    }
  }
  currentShow.value = props.preview[currentIndex.value] as string;
};

const changeScale = (value: string) => {
  if (value === 'reduce') {
    scale.value -= 0.1;
  } else {
    scale.value += 0.1;
  }
  previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`;
  previewImg.value.style.transition = `all 0.3s`;
};

const changeRotate = (value: string) => {
  if (value === 'left') {
    rotate.value -= 90;
  } else {
    rotate.value += 90;
  }
  previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`;
  previewImg.value.style.transition = `all 0.3s`;
};

// 显示组件
const showPreview = () => {
  if (props.preview && props.preview.length !== 0) {
    isShowPre.value = true;
    // document.body.style.overflowY = 'hidden';
  } else {
    return;
  }
};
</script>

<style lang="scss" scoped>
.u-image {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: auto;

  img {
    width: inherit;
    height: inherit;
    object-fit: v-bind(fit);
  }
  .u-image-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // opacity: 0.5;
    background: #00000073;
    z-index: 999;
    & > span {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      background-color: #646464;
      cursor: pointer;
      color: #fff;
      font-size: 26px;
      z-index: 1000;
      user-select: none;
    }
    .u-image-preview-close {
      top: 65px;
      right: 65px;
      &::before {
        content: 'x';
      }
    }
    .u-image-preview-prev {
      top: 0;
      bottom: 0;
      left: 65px;
      margin: auto;
    }
    .u-image-preview-next {
      top: 0;
      bottom: 0;
      right: 65px;
      margin: auto;
    }
    .preview-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      object-fit: contain;
      transition: all 0.3s;
    }
    .u-image-bar {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 235px;
      height: 50px;
      border-radius: 25px;
      background-color: #00000085;
      & > span {
        display: flex;
        justify-content: center;
        // align-items: center;
        color: #fff;
        font-size: 16px;
        width: 22px;
        height: 22px;
        line-height: 16px;
        border-radius: 11px;
        border: 2px solid #fff;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
      }
      .left,
      .right {
        position: relative;
        border: none;
        &::before,
        &::after {
          display: inline-block;
          content: '';
          box-sizing: border-box;
        }
        &::before {
          position: absolute;
          border: 5px solid transparent;
          border-top-color: #fff;
          transform: rotate(20deg);
          top: 7px;
          left: -4px;
        }
        &::after {
          width: 22px;
          height: 22px;
          border-radius: 11px;
          border: 2px solid #fff;
        }
      }
      .right {
        &::before {
          position: absolute;
          border: 5px solid transparent;
          border-top-color: #fff;
          transform: rotate(-20deg);
          top: 7px;
          left: unset;
          right: -4px;
        }
      }
    }
  }
}
</style>
