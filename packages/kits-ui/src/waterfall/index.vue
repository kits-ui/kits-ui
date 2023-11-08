<template>
  <div ref="kWaterfall" class="k-waterfall">
    <div
      v-for="(item, i) in props.list"
      v-show="isShow"
      :key="i"
      ref="kWaterfallChild"
      class="k-waterfall-child"
    >
      <div class="k-waterfall-content">
        <slot name="content" :data="props.list" :index="i" :cur-data="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { PropType, ref, nextTick } from 'vue';
import { setStyle } from '../utils/index';

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
  custom: {
    type: Boolean,
    default: false,
  },
});

const list = ref<string[]>([]);
const kWaterfall = ref<any>();
const kWaterfallChild = ref<any>();
const hArr = ref<any>([]);
const isShow = ref<boolean>(true);

onMounted(async () => {
  list.value = props.list;
  // 获取父盒子宽度
  const { width } = kWaterfall.value.getBoundingClientRect();
  // 设置子盒子宽度
  const colWidth = (width - (props.column - 1) * props.gap) / props.column;
  setStyle(kWaterfallChild.value, {
    width: `${colWidth}px`,
  });
  if (props.custom) {
    initImg();
    nextTick(() => {
      init(colWidth);
    });
  } else {
    await imgLoad(props.list, 0, colWidth);
  }
  // init();
});

const init = async (colWidth) => {
  for (let i = 0; i < kWaterfallChild.value.length; i++) {
    if (i < props.column) {
      hArr.value.push(kWaterfallChild.value[i].offsetHeight);
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
      console.log(maxHeight);
      await setStyle(kWaterfall.value, {
        height: `${maxHeight}px`,
      });
    }
  }
};

// 方法0
const imgLoad = (imgList, index, colWidth) => {
  index = index || 0;
  if (index >= imgList.length) {
    console.log(312312321);
    return false;
  }
  if (imgList && index < imgList.length) {
    const img = new Image();
    img.src = imgList[index];
    img.onload = () => {
      console.log(11210, imgList.length, index);
      console.log(kWaterfallChild.value[index]);
      kWaterfallChild.value[index].appendChild(img);
      if (index < props.column) {
        hArr.value.push(kWaterfallChild.value[index].offsetHeight);
      } else {
        img.loading = 'lazy';
        // 取数组中最小值与最小值所对应的下标
        const { minHeight, minHeightIndex, maxHeight } = getMinHeight();
        // 设置当前子元素定位
        setStyle(kWaterfallChild.value[index], {
          position: `absolute`,
          top: `${minHeight + props.gap}px`,
          left: `${minHeightIndex * (colWidth + props.gap)}px`,
        });
        // 更新最小高度
        hArr.value[minHeightIndex] =
          hArr.value[minHeightIndex] + kWaterfallChild.value[index].offsetHeight + props.gap;
        // 更新父盒子高度(最大高度)
        console.log(maxHeight);
        setStyle(kWaterfall.value, {
          height: `${maxHeight}px`,
        });
      }
      imgLoad(imgList, index + 1, colWidth);
    };
  }
};

// 方法1
// // 所有图片预加载完成后开始初始化(宽 高 位置信息)
// const initImg = () => {
//   imgLoad();
// };

// // 预加载
// const imgLoad = () => {
//   let num = 0;
//   props.list.forEach((item) => {
//     const image = new Image();
//     image.src = item;
//     image.onload = function () {
//       num++;
//       if (num === props.list.length) {
//         isShow.value = true;
//         nextTick(() => {
//           init();
//         });
//       }
//     };
//   });
// };

//方法2
//使用Promise.all在所有图片预加载完成后开始初始化(宽 高 位置信息)-----------太慢
const initImg = () => {
  Promise.all(props.list.map((item) => imgPreload(item))).then(() => {
    isShow.value = true;
  });
};

// 预加载
const imgPreload = (src) => {
  return new Promise((res) => {
    const image = new Image();
    image.src = src;
    image.onload = function () {
      res(true);
    };
  });
};

const getMinHeight = () => {
  const minHeight = Math.min.apply(null, hArr.value);
  const maxHeight = Math.max.apply(null, hArr.value);
  const minHeightIndex = hArr.value.indexOf(minHeight);
  console.log(hArr.value, maxHeight);
  return {
    minHeight,
    minHeightIndex,
    maxHeight,
  };
};
// const waterFall = () => {

// }
</script>

<style scoped></style>
