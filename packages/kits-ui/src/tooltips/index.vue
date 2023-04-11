<template>
  <slot></slot>
  <div class="tooltip-content" ref="tooltipContent">
    {{ props.content }}
    <span></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
});
const tooltipContent = ref<any>();
const dom = ref<any>();
const prevSiblingTop = ref<number>(0);
const prevSiblingLeft = ref<number>(0);
const prevSiblingWidth = ref<number>(0);
const prevSiblingHeight = ref<number>(0);

onMounted(async () => {
  await init();
});

watch(
  () => {
    return {
      top: prevSiblingTop,
      left: prevSiblingLeft,
    };
  },
  (newVal) => {
    console.log(newVal, 1111);
  },
);

const init = () => {
  dom.value = tooltipContent.value.previousElementSibling;
  dom.value.classList.add('k-tooltips');
  // 获取兄弟节点定位信息
  prevSiblingTop.value = dom.value.offsetTop;
  prevSiblingLeft.value = dom.value.offsetLeft;
  prevSiblingWidth.value = dom.value.offsetWidth;
  prevSiblingHeight.value = dom.value.offsetHeight;
  const width = tooltipContent.value.offsetWidth;
  const height = tooltipContent.value.offsetHeight;
  // prevSiblingLeft - width / 2 - prevSiblingWidth / 2
  console.log(
    prevSiblingLeft,
    width,
    prevSiblingWidth.value / 2,
    width / 2 - prevSiblingWidth.value / 2,
    prevSiblingLeft.value - (width / 2 - prevSiblingWidth.value / 2),
  );
  setStyle(tooltipContent.value, {
    top: `${prevSiblingTop.value - height - 10}px`,
    left: `${prevSiblingLeft.value - (width / 2 - prevSiblingWidth.value / 2)}px`,
  });
};

const setStyle = (obj: any, json: any) => {
  let styleStr = '';
  for (let i in json) {
    styleStr += `${i}: ${json[i]};`;
  }
  obj.setAttribute('style', styleStr);
};
</script>
<style lang="scss">
.tooltip-content {
  position: absolute;
  opacity: 0;
  width: auto;
  height: auto;
  background: rgb(26, 26, 26);
  color: #fff;
  padding: 5px 8px;
  box-sizing: border-box;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 5px #747474);
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    margin: auto;
    content: '';
    width: 8px;
    height: 8px;
    background: rgb(26, 26, 26);
    transform: rotate(45deg);
    // border-radius: 0px 0px 6px 0px;
  }
  &:hover {
    opacity: 1;
  }
}
</style>
