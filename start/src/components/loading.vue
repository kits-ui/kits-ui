<template>
  <div id="loading">
    <k-button @click="switchLoading">{{ loading ? '隐藏' : '显示' }}</k-button>
    <k-button @click="showFnLoading"> 函数调用显示全局loading </k-button>
    <div>
      <k-loading v-model="globalLoading" :text="countdownText" />
      <h3>插入slot</h3>
      <p>slot有多个根元素时，只对第一个生效，loading会插入第一个元素内部</p>
      <k-loading v-model="loading" mode="insert" click-hide>
        <template #icon><div>loading</div></template>

        <div class="loading-ref" id="test">
          {{ text }}
        </div>
        <div class="loading-ref">
          {{ text }}
        </div>
      </k-loading>
      <h3>包裹slot</h3>
      <p>slot有多个根元素时，对全部生效，loading会生成一个包裹的div，loading与slot同级</p>
      <k-loading v-model="loading" mode="wrap" click-hide>
        <div class="loading-ref" id="test">
          {{ text }}
        </div>
        <div class="loading-ref">
          {{ text }}
        </div>
      </k-loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showLoading } from '../../../packages/kits-ui/src/loading';
import { computed, ref } from 'vue';

const globalLoading = ref(true);
const loading = ref(true);

const showFnLoading = () =>
  showLoading({
    text: '函数调用的loading,点击任意地方关闭loading',
    clickHide: true,
    customClass: 'red',
  });

const countdown = ref(3);
const countdownText = computed(() => `全局loading,${countdown.value}秒后自动关闭`);
const timer = setInterval(() => {
  if (countdown.value <= 0) {
    clearInterval(timer);
    globalLoading.value = false;
    return;
  }
  countdown.value--;
}, 1000);

function switchLoading() {
  loading.value = !loading.value;
}

const text =
  '如果这个 props 选项没有被定义，那么被传入函数的 props 对象就会像 attrs 一样会包含所有 attribute。除非指定了 props 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。\n';
</script>

<style scoped lang="scss">
.loading-ref {
  padding: 30px;
  width: 600px;
  word-break: break-all;
  white-space: pre-line;
  text-align: left;
}
</style>
