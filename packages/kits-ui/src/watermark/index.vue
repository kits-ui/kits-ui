<template>
  <div ref="kWatermark" class="k-watermark">
    <slot></slot>
    <div ref="watermarkText" class="watermarkText"></div>
  </div>
</template>

<script setup lang="ts">
import { /*computed,*/ onMounted, ref } from 'vue';
import type { watemarkParams } from '../types/index.types';
import { setStyle } from '../utils/index';

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
    default: 'auto',
  },
  options: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const kWatermark = ref<any>();
const watermarkText = ref<any>();

onMounted(() => {
  // 默认属性与props合并以props为主
  const params = Object.assign(
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

  // 获取当前水印的父元素
  const parentDom = kWatermark.value.parentNode;

  init(params);
  // 观察器配置选项
  const options = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  // 创建观察器
  const observer: any = new MutationObserver(async (mutationsList) => {
    for (let mutation of mutationsList) {
      // childlist的监测
      if (mutation.type === 'childList') {
        console.log('有子元素被删除了.');
        observer.disconnect();
        parentDom.appendChild(kWatermark.value);
        kWatermark.value.appendChild(watermarkText.value);
        observer.observe(kWatermark.value.parentNode, options);
      } else if (mutation.type === 'attributes') {
        // 停止观察
        observer.disconnect();
        init(params);
        observer.observe(kWatermark.value, options);
        console.log('水印样式已重置....');
      }
    }
  });
  // 开始观察节点
  observer.observe(kWatermark.value.parentNode, options);
});

const init = (params: watemarkParams) => {
  // 设置水印本体样式
  setStyle(watermarkText.value, {
    background: `url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="${params.textWidth}" height="${params.textHeight}" stroke="${params.textColor}"><text x="20" y="20" >${params.waterMarkText}</text> </svg>')`,
    opacity: params.opacity,
    rotate: params.rotate,
    width: '400vw',
    height: '400vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    'pointer-events': 'none',
  });
  // 水印外层样式
  setStyle(kWatermark.value, {
    width: props.width,
    height: props.height,
    position: 'absolute',
    'z-index': 5,
    inset: 0,
    margin: 'auto',
    overflow: 'hidden',
    'pointer-events': 'none',
  });
};
</script>
