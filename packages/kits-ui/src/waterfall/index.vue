<template>
  <div ref="kWaterfall" class="k-waterfall">
    <TransitionGroup name="bounce">
      <div
        v-for="(item, i) in copyList"
        :key="i"
        ref="kWaterfallChild"
        class="k-waterfall-child"
        :style="{ opacity: isShow ? 1 : 0 }"
      >
        <div class="k-waterfall-content">
          <slot name="top" :data="copyList" :index="i" :cur-data="item"></slot>
          <!-- <img ref="imgBox" :id="setIdNum()" :src="item.src" alt="" :style="{ height: `${item.height}px` }" /> -->
          <img ref="imgBox" :id="setIdNum()" :src="item.src" alt="" />
          <slot name="bottom" :data="copyList" :index="i" :cur-data="item"></slot>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { PropType, ref, nextTick } from 'vue';
import { setStyle, setIdNum } from '../utils/index';

const props = defineProps({
  list: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  column: {
    type: Number,
    default: 3,
  },
  gap: {
    type: Number,
    default: 3,
  },
});

const list = ref<string[]>([]);
const kWaterfall = ref<any>();
const kWaterfallChild = ref<any>();
const imgBox = ref<any>();
const copyList = ref<any>([]);
const hArr = ref<any>([]);
const colWidth = ref<number>(0);
const isShow = ref<boolean>(false);

onMounted(async () => {
  list.value = props.list;
  // 获取父盒子宽度
  const { width } = kWaterfall.value.getBoundingClientRect();
  // 设置子盒子宽度
  colWidth.value = (width - (props.column - 1) * props.gap) / props.column;
  // 预加载
  initImg();
});

// 初始化宽高与位置信息
const init = async (colWidth) => {
  for (let i = 0; i < kWaterfallChild.value.length; i++) {
    // 设置盒子宽度
    setStyle(kWaterfallChild.value[i], {
      width: `${colWidth}px`,
    });
    // 设置img盒子高度
    setStyle(imgBox.value[i], {
      height: copyList.value[i].height,
    });
    // 判断是否第一列
    if (i < props.column) {
      hArr.value.push(kWaterfallChild.value[i].offsetHeight);
      console.log(kWaterfallChild.value[i].offsetHeight);
      await setStyle(kWaterfallChild.value[i], {
        position: `absolute`,
        top: `0px`,
        left: `${i * (colWidth + props.gap)}px`,
      });
    } else {
      // 取数组中最小值与最小值所对应的下标
      const { minHeight, minHeightIndex, maxHeight } = await getMinHeight();
      // 设置当前子元素定位
      await setStyle(kWaterfallChild.value[i], {
        position: `absolute`,
        top: `${minHeight + props.gap}px`,
        left: `${minHeightIndex * (colWidth + props.gap)}px`,
      });
      // 更新最小高度
      hArr.value[minHeightIndex] =
        hArr.value[minHeightIndex] + kWaterfallChild.value[i].offsetHeight + props.gap;
      // 更新父盒子高度(最大高度)
      await setStyle(kWaterfall.value, {
        height: `${maxHeight}px`,
      });
    }
  }
};

// 预加载
const initImg = () => {
  copyList.value = props.list;
  Promise.all(copyList.value.map((item, i) => imgPreload(item, i))).then(() => {
    nextTick(() => {
      init(colWidth.value);
      isShow.value = true;
    });
  });
};

const imgPreload = (item, index) => {
  return new Promise((res) => {
    const image = new Image();
    image.src = item.src;
    image.onload = function (e) {
      console.log(e);
      if (e.type == 'load') {
        copyList.value[index].height = colWidth.value / (image.width / image.height);
      }
      res(true);
    };
  });
};

const getMinHeight = () => {
  const minHeight = Math.min.apply(null, hArr.value);
  const maxHeight = Math.max.apply(null, hArr.value);
  const minHeightIndex = hArr.value.indexOf(minHeight);
  return {
    minHeight,
    minHeightIndex,
    maxHeight,
  };
};

// 递归顺序加载
// const imgLoad = (imgList, index, colWidth) => {
//   index = index || 0;
//   if (index >= imgList.length) {
//     return false;
//   }
//   if (imgList && index < imgList.length) {
//     const img = new Image();
//     img.src = imgList[index];
//     img.onload = () => {
//       console.log(11210, imgList.length, index);
//       console.log(kWaterfallChild.value[index]);
//       kWaterfallChild.value[index].appendChild(img);
//       if (index < props.column) {
//         hArr.value.push(kWaterfallChild.value[index].offsetHeight);
//       } else {
//         img.loading = 'lazy';
//         // 取数组中最小值与最小值所对应的下标
//         const { minHeight, minHeightIndex, maxHeight } = getMinHeight();
//         // 设置当前子元素定位
//         setStyle(kWaterfallChild.value[index], {
//           position: `absolute`,
//           top: `${minHeight + props.gap}px`,
//           left: `${minHeightIndex * (colWidth.value + props.gap)}px`,
//         });
//         // 更新最小高度
//         hArr.value[minHeightIndex] =
//           hArr.value[minHeightIndex] + kWaterfallChild.value[index].offsetHeight + props.gap;
//         // 更新父盒子高度(最大高度)
//         console.log(maxHeight);
//         setStyle(kWaterfall.value, {
//           height: `${maxHeight}px`,
//         });
//       }
//       imgLoad(imgList, index + 1, colWidth.value);
//     };
//   }
// };
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.6s;
}
.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.2);
  }
  /* 50% {
    transform: scale(0.5);
  } */
  100% {
    transform: scale(1);
  }
}
</style>
