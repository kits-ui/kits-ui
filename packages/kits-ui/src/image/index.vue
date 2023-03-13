<template>
  <div class="k-image">
    <img
      :src="props.src"
      alt=""
      :style="{
        cursor: props.preview && props.preview.length === 0 ? 'auto' : 'pointer',
        '--k-image-fit': props.fit,
      }"
      @click="showPreview"
    />
    <div v-show="isShowPre" ref="uImagePreview" class="k-image-preview">
      <span class="k-image-preview-close" @click="close">
        <shut />
      </span>
      <span class="k-image-preview-prev" @click="switchImg('prev')">
        <arrowleft />
      </span>
      <span class="k-image-preview-next" @click="switchImg('next')">
        <arrowright />
      </span>
      <div class="k-image-bar">
        <narrow @click="changeScale('reduce')" />
        <enlarge @click="changeScale('amplify')" />
        <undo @click="changeRotate('left')" />
        <redo @click="changeRotate('right')" />
      </div>
      <img ref="previewImg" :src="currentShow" alt="" class="preview-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isShowPre = ref<Boolean>(false);
const currentShow = ref<string>('');
const currentIndex = ref<number>(0);
const uImagePreview = ref<any>();
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

onMounted(() => {
  currentShow.value = props.preview[0] as string;
  currentIndex.value = 0;
  uImagePreview.value.addEventListener(
    'wheel',
    (e: any) => {
      e.preventDefault();
      scale.value += e.deltaY * -0.0001;
      if (scale.value <= 0.2) {
        scale.value = 0.2;
      } else if (scale.value >= 2) {
        scale.value = 2;
      }
      scale.value = Math.min(Math.max(0.2, scale.value), 4);
      previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`;
      previewImg.value.style.transition = `all 0.3s`;
    },
    { capture: true, passive: false },
  );
});

/**
 * 关闭按钮
 */
const close = () => {
  scale.value = 1;
  rotate.value = 0;
  previewImg.value.style.transform = `scale(${scale.value})`;
  isShowPre.value = false;
  document.body.style.overflowY = 'overlay';
};

/**
 * 左右切换
 * @param value 参数: 前一个prev  下一个 next
 */
const switchImg = (value: string) => {
  scale.value = 1;
  rotate.value = 0;
  previewImg.value.style.transform = `scale(${scale.value})`;
  previewImg.value.style.transition = `none`;
  if (props.preview.length > 1) {
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
  } else {
    currentIndex.value = 0;
  }
  currentShow.value = props.preview[currentIndex.value] as string;
};

/**
 * 修改缩放大小
 * @param value 参数 放大或缩小
 */
const changeScale = (value: string) => {
  console.log();
  const currentScale = Number(scale.value.toFixed(1));
  if (value === 'reduce') {
    if (currentScale <= 0.2) {
      scale.value = 0.2;
    } else {
      scale.value -= 0.1;
    }
  } else {
    if (currentScale >= 2) {
      scale.value = 2;
    } else {
      scale.value += 0.1;
    }
  }
  previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`;
  previewImg.value.style.transition = `all 0.3s`;
};

/**
 * 修改旋转角度
 * @param value 参数: 左left 右right
 */
const changeRotate = (value: string) => {
  if (value === 'left') {
    rotate.value -= 90;
  } else {
    rotate.value += 90;
  }
  previewImg.value.style.transform = `scale(${scale.value}) rotate(${rotate.value}deg)`;
  previewImg.value.style.transition = `all 0.3s`;
};

/**
 * 打开组件
 */
const showPreview = () => {
  if (props.preview && props.preview.length !== 0) {
    isShowPre.value = true;
    currentIndex.value = props.preview.indexOf(props.src);
    currentShow.value = props.src;
    document.body.style.overflowY = 'hidden';
  } else {
    return;
  }
};
</script>
