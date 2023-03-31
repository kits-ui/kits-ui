<template>
  <div class="k-popover">
    <Teleport to="body">
      <transition name="out-in">
        <div
          v-if="data.showPopup"
          class="k-popover-popup"
          :class="theme==='light'?'light':''"
          :style="{
            top: data.top + 'px',
            left: data.left + 'px',
          }"
        >
          <div ref="popupContent" class="popup-content">
            <slot>
              <span>{{ title }}</span>
            </slot>
            <div class="popover__arrow"></div>
          </div>
        </div>
      </transition>
    </Teleport>
    <div
      ref="reference"
      v-longpress="eventHandler"
      class="popover-reference"
      @click.stop="() => trigger === 'click' && eventHandler()"
      @mouseenter="() => trigger === 'hover' && eventHandler()"
      @mouseleave="trigger === 'hover' && (data.showPopup = false)"
    >
      <slot name="reference"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, nextTick, ref } from 'vue';

const props = defineProps({
  trigger: {
    type: String,
    default: 'click',
  },
  theme: {
    type: String,
    default: 'dark',
  },
  title: {
    type: String,
    default: '',
  },
});
const data = reactive({
  showPopup: false,
  top: 80,
  left: 0,
});
const reference = ref();
const popupContent = ref();
onMounted(() => {
  console.log({props})
  document.addEventListener(
    'click',
    () => {
      data.showPopup = false;
    },
    false,
  );
  window.addEventListener(
    'scroll',
    () => {
      data.showPopup = false;
    },
    true,
  );
});
const eventHandler = () => {
  data.showPopup = true;
  console.log(data.showPopup)
  nextTick(() => {
    const info = popupContent.value.getBoundingClientRect();
    const info2 = reference.value.getBoundingClientRect();
    const top = info2.y - info.height - 10;
    let left = info2.x + info2.width / 2 - info.width / 2;
    const winW = window.innerWidth;
    // 边界处理
    if (left > winW - info.width) {
      left = winW - info.width;
    }
    if (left < 0) {
      left = 0;
    }
    data.top = top;
    data.left = left;
  });
};
</script>
