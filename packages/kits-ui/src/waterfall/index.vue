<template>
  <view class="k-waterfall">
    <view class="k-waterfall_left" ref="leftRef">
      <view class="k-waterfall_list" v-for="(item, index) in leftList" :key="index">
        {{ item }}</view
      >
    </view>
    <view class="k-waterfall_right" ref="rightRef">
      <view class="k-waterfall_list" v-for="(item, index) in rightList" :key="index">
        {{ item }}</view
      >
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
// 左侧列表
const leftList = ref([]);

// 右侧列表

const rightList = ref([]);
// 组件数据备份
const newList = ref([]);

//默认请求数,主要为了正常排序
const interceptNumber = ref([]);

const leftRef = ref();
const rightRef = ref();

// 计算排列
const considerPush = () => {
  nextTick(() => {
    if (newList.value.length == 0) return; //没有数据了
    let leftH = leftRef.value?.clientHeight;
    let rightH = rightRef.value?.clientHeight; //左右高度

    if (leftH == rightH || leftH < rightH) {
      // 相等 || 左边小
      leftList.value.push(newList.value.shift());
    } else {
      // 右边小
      rightList.value.push(newList.value.shift());
    }
    touchOff();
  });
};

// 触发重新排列
const touchOff = () => {
  let newList = props.list.slice(-interceptNumber.value) as any;
  newList.value = [...newList];
  if (newList.value.length !== 0) {
    leftList.value.push(newList.value.shift()); //触发排列
    considerPush();
  }
};

touchOff();
</script>
