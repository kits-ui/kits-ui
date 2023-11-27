<template>
  <div
    ref="splitGroupMove"
    class="k-split-group"
    :class="props.mode === 'horizontal' ? 'horizontal' : 'vertical'"
    @mousedown.prevent="handleMouseDown"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { setStyle } from '../utils/index';

const props = defineProps({
  mode: {
    type: String,
    default: 'horizontal',
  },
});

const splitGroupMove = ref<any>();

onMounted(() => {
  // console.log(splitList.length, splitGroupMove.value.offsetWidth, splitGroupMove.value.getBoundingClientRect());
  setTimeout(() => {
    const splitList = [];
    console.log(splitGroupMove.value.parentElement.childNodes);
    splitGroupMove.value.parentElement.childNodes.forEach((ele: Element) => {
      console.log(ele, ele.className);
      if (ele.className && ele.className.includes('k-split-group')) {
        splitList.push(ele);
      }
    });
    let styleObj = {};
    setStyle(splitGroupMove.value.parentElement, {
      display: 'flex',
      justifyContent: 'space-between',
      flexShrink: '0',
    });
    if (props.mode === 'horizontal') {
      styleObj = {
        width: `calc((100% - ${splitList.length * splitGroupMove.value.offsetWidth}px) / ${
          splitList.length + 1
        })`,
      };
      setStyle(splitGroupMove.value.previousElementSibling, styleObj);
      setStyle(splitGroupMove.value.nextElementSibling, styleObj);
    } else {
      setStyle(splitGroupMove.value.parentElement, {
        flexDirection: 'column',
      });
      styleObj = {
        height: `calc((100% - ${splitList.length * splitGroupMove.value.offsetHeight}px) / ${
          splitList.length + 1
        })`,
      };
      setStyle(splitGroupMove.value.previousElementSibling, styleObj);
      setStyle(splitGroupMove.value.nextElementSibling, styleObj);
    }
  }, 500);
});

// 鼠标单击触发拖拽事件
const handleMouseDown = () => {
  document.addEventListener('mousemove', handleMousemove);
  document.addEventListener('mouseup', handleMouseup);
};

const handleMousemove = (e: any) => {
  // 获取当前组件左右两边dom元素信息
  const { left: pLeft, top: pTop } =
    splitGroupMove.value.previousElementSibling.getBoundingClientRect();
  const { left: nLeft, top: nTop } =
    splitGroupMove.value.nextElementSibling.getBoundingClientRect();
  if (props.mode === 'horizontal') {
    // 判断临界值
    if (
      e.clientX - pLeft < 80 ||
      splitGroupMove.value.nextElementSibling.offsetWidth - (e.clientX - nLeft) < 80
    ) {
      return;
    }
    // left不为0时先去掉left值 e.pageX - left
    splitGroupMove.value.previousElementSibling.style.width = `${e.clientX - pLeft}px`;
    splitGroupMove.value.nextElementSibling.style.width = `${
      splitGroupMove.value.nextElementSibling.offsetWidth - (e.clientX - nLeft)
    }px`;
  } else {
    // 判断临界值
    if (
      e.clientY - pTop < 80 ||
      splitGroupMove.value.nextElementSibling.offsetHeight - (e.clientY - nTop) < 80
    ) {
      return;
    }
    // top不为0时先去掉top值 e.pageY - top
    splitGroupMove.value.previousElementSibling.style.height = `${e.clientY - pTop}px`;
    splitGroupMove.value.nextElementSibling.style.height = `${
      splitGroupMove.value.nextElementSibling.offsetHeight - (e.clientY - nTop)
    }px`;
  }
};

// 抬起鼠标按键注销事件
const handleMouseup = () => {
  document.removeEventListener('mousemove', handleMousemove);
  document.removeEventListener('mouseup', handleMouseup);
};
</script>
