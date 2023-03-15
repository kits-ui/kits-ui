<template>
  <div
    ref="watermark"
    class="k-watermark"
    :style="{ width: props.width, height: props.height }"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

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

const watermark = ref<any>();
onMounted(() => {
  init();
});

const init = () => {
  let myStyles = Array.from(document.styleSheets).filter((p: any) => {
    return p.ruleName === 'k-watermark';
  });
  console.log(myStyles, 5555555);
  myStyles.forEach((style) => {
    if (style.cssRules.length > 1) style.deleteRule(1);
  });

  const params = {
    waterMarkText: 'kits-ui',
    textColor: 'black',
    textWidth: '150',
    textHeight: '100',
    opacity: 0.5,
    rotate: -30,
  };
  const options = Object.assign(params, props.options);
  console.log(options, 8877777222);
  const url = `data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" version="1.1" width="${options.textWidth}" height="${options.textHeight}" stroke="${options.textColor}"><text x="20" y="20" >${options.waterMarkText}</text> </svg>`;
  const s: any = document.styleSheets[document.styleSheets.length - 1];
  s.ruleName = props.name;
  s.insertRule(
    `.k-watermark::before { background: url('${url}'); opacity: ${options.opacity}; translate: -1000vw -1000vh; rotate: ${options.rotate}deg; }`,
    0,
  );
};
</script>
