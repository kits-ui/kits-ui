<template>
  <div class="u-image">
    <img
      :src="props.src"
      alt=""
      :style="{ cursor: props.preview && props.preview.length === 0 ? 'auto' : 'pointer' }"
      @click="showPreview"
    />
    <div v-show="isShowPre" ref="uImagePreview" class="u-image-preview">
      <span class="u-image-preview-close" @click="close">
        <u-icon type="shut" />
      </span>
      <span class="u-image-preview-prev" @click="switchImg('prev')">
        <u-icon type="arrowleft" />
      </span>
      <span class="u-image-preview-next" @click="switchImg('next')">
        <u-icon type="arrowright" />
      </span>
      <div class="u-image-bar">
        <u-icon type="narrow" @click="changeScale('reduce')" />
        <u-icon type="enlarge" @click="changeScale('amplify')" />
        <u-icon type="undo" @click="changeRotate('left')" />
        <u-icon type="redo" @click="changeRotate('right')" />
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

const fit = computed(() => {
  return props.fit;
});

onMounted(() => {
  currentShow.value = props.preview[0] as string;
  currentIndex.value = 0;
  uImagePreview.value.addEventListener(
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

/**
 * 修改缩放大小
 * @param value 参数 放大或缩小
 */
const changeScale = (value: string) => {
  if (value === 'reduce') {
    scale.value -= 0.1;
  } else {
    scale.value += 0.1;
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
