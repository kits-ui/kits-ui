<template>
  <div class="k-watermark" :style="{ width: props.width, height: props.height }">
    <div ref="watermarkText" class="watermarkText"></div>
  </div>
</template>

<script setup lang="ts">
import { /*computed,*/ onMounted, ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'k-watermark',
  },
  width: {
    type: String,
    default: '100vw',
  },
  height: {
    type: String,
    default: '100vh',
  },
  options: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const watermarkText = ref<any>();
const params = ref<any>({});

onMounted(() => {
  init();
});

const init = () => {
  params.value = Object.assign(
    {
      waterMarkText: 'kits-ui',
      textColor: 'black',
      textWidth: '150',
      textHeight: '100',
      opacity: 0.5,
      rotate: '-30deg',
    },
    props.options,
  );
  watermarkText.value.style.background = `url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="${params.value.textWidth}" height="${params.value.textHeight}" stroke="${params.value.textColor}"><text x="20" y="20" >${params.value.waterMarkText}</text> </svg>')`;
  watermarkText.value.style.opacity = params.value.opacity;
  watermarkText.value.style.rotate = params.value.rotate;
};
</script>
<style scoped>
.k-watermark {
  font-weight: 700;
}
</style>
