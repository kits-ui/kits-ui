<template>
  <div ref="kWaterfall" class="k-waterfall">
    <div
      v-for="(itemArr, index) in dataArrList"
      ref="kWaterfallList"
      :key="index"
      class="k-waterfall-list"
    >
      <TransitionGroup name="k-waterfall-scale">
        <div v-for="(item, i) in itemArr" :key="i" ref="kWaterfallChild" class="k-waterfall-child">
          <div class="k-waterfall-content">
            <slot name="top" :data="copyList" :index="i" :cur-data="item"></slot>
            <div v-if="item.occupying" class="occupying"></div>
            <img v-else :src="item.src" alt="" />
            <slot name="bottom" :data="copyList" :index="i" :cur-data="item"></slot>
          </div>
        </div>
      </TransitionGroup>
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
});
const kWaterfall = ref<any>();
const kWaterfallChild = ref<any>();
const kWaterfallList = ref<any>();
const copyList = ref<any>([]);
const colWidth = ref<number>(0);

const dataArrList = ref<any>([]);
onMounted(async () => {
  // 获取父盒子宽度
  const { width } = kWaterfall.value.getBoundingClientRect();
  // 设置子盒子宽度
  colWidth.value = (width - (props.column - 1) * props.gap) / props.column;
  // 预加载
  initImg();
});

function getScollTop() {
  console.dir(kWaterfall.value);
  console.log(
    window.scrollY,
    document.documentElement.scrollTop,
    document.body.scrollTop,
    document.getElementById('app').scrollTop,
  );
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    document.getElementById('app').scrollTop
  );
}
// 初始化宽高与位置信息
const init = (colWidth) => {
  // 分割数组
  for (let i = 0; i < props.column; i++) {
    dataArrList.value.push([]);
  }
  for (let i = 0; i < copyList.value.length; i++) {
    // 判断是否第一列
    if (i < props.column) {
      setTimeout(() => {
        dataArrList.value[i].push(props.list[i]);
        setStyle(kWaterfallList.value[i], {
          width: `${colWidth}px`,
          gap: `${props.gap}px`,
        });
      }, 0);
    } else {
      // 取数组中最小值与最小值所对应的下标
      setTimeout(() => {
        const { minHeight, minHeightIndex } = getMinHeight();
        console.log(minHeight, minHeightIndex);
        dataArrList.value[minHeightIndex].push(props.list[i]);
      }, 0);
    }
  }
  // 滚动加载图片
  window.onscroll = function () {
    getScollTop();
    // 时机如何把握
    // if (getClient().height + getScollTop() >= items[items.length - 1].offsetTop) {
    // 最后一张图片都没了，要加载其他图片现形
    // 假设从后端获取的图片
    // var datas = [
    //   './img1.jpg',
    //   './img2.jpg',
    //   './img3.jpg',
    //   './img4.jpg',
    //   './img5.jpg',
    //   './img6.jpg',
    //   './img7.jpg',
    // ];
    // for (var i = 0; i < datas.length; i++) {
    //   var div = document.createElement('div');
    //   div.className = 'item';
    //   div.innerHTML = '<img src=" ' + datas[i] + '">';
    //   box, appendChild(div);
    // }
    // waterFall();
    // }
  };
};

// 预加载
const initImg = () => {
  copyList.value = props.list;
  Promise.all(copyList.value.map((item, i) => imgPreload(item, i))).then(() => {
    nextTick(() => {
      init(colWidth.value);
    });
  });
};

const imgPreload = (item, index) => {
  return new Promise((res) => {
    const image = new Image();
    image.src = item.src;
    image.onload = (e: any) => {
      console.log(e.type);
      if (e.type === 'load') {
        copyList.value[index].height = colWidth.value / (image.width / image.height);
      }
      res(true);
    };
    // 加载失败设置occupying为true开启占位块显示
    image.onerror = (e: any) => {
      if (e.type === 'error') {
        copyList.value[index].occupying = true;
      }
      res(true);
    };
  });
};

const getMinHeight = () => {
  const heightArr = kWaterfallList.value.map((item: any) => {
    return item.offsetHeight;
  });
  const minHeight = Math.min.apply(null, heightArr);
  const minHeightIndex = heightArr.indexOf(minHeight);
  return {
    minHeight,
    minHeightIndex,
  };
};
</script>
