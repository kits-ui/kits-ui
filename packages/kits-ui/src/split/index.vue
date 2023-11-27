<template>
  <div ref="splitWrapperRef" class="k-split-pane">
    <div class="k-split-inner-wrapper k-split-inner-horizontal-wrapper" v-if="isHorizontal">
      <div class="k-split-pane-left" :style="{ width: offsetPercent }">
        <slot name="left" />
      </div>
      <div
        class="k-split-pane-trigger"
        :style="{ left: triggerPosition, width: triggerWidth, height: '100%' }"
        @mousedown="handleMousedown"
      ></div>
      <div class="k-split-pane-right" :style="{ width: rightOrBottomPanePercent }">
        <slot name="right" />
      </div>
    </div>
    <div class="k-split-inner-wrapper" v-else>
      <div class="k-split-pane-top" :style="{ height: offsetPercent }">
        <slot name="top" />
      </div>
      <div
        class="k-split-pane-trigger k-trigger-vertical"
        :style="{ top: triggerPosition, height: triggerWidth }"
        @mousedown="handleMousedown"
      ></div>
      <div class="k-split-pane-bottom" :style="{ height: rightOrBottomPanePercent }">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0.5,
    },
    mode: {
      type: String,
      default: 'horizontal', // horizontal & vertical
    },
    // trigger的厚度，默认4px
    thickness: {
      type: Number,
      default: 4,
    },
    min: {
      type: Number,
      default: 0.1,
    },
    max: {
      type: Number,
      default: 0.9,
    },
  },
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const splitWrapperRef = ref<any>(null);
    const isMoving = ref(false);
    const offsetPosition = ref(props.modelValue);
    const triggerThickness = ref(props.thickness);
    const isHorizontal = computed(() => props.mode === 'horizontal');
    const offsetPercent = computed(() => `${offsetPosition.value * 100}%`);
    const rightOrBottomPanePercent = computed(() => `${(1 - offsetPosition.value) * 100}%`);
    const triggerPosition = computed(
      () => `calc(${offsetPosition.value * 100}% - ${props.thickness}px)`,
    );
    const triggerWidth = computed(() => `${triggerThickness.value}px`);
    const handleMousemove = (e: MouseEvent) => {
      if (!isMoving.value) {
        return;
      }
      nextTick(() => {
        if (splitWrapperRef.value) {
          const rect = splitWrapperRef.value.getBoundingClientRect();
          const percent = isHorizontal.value
            ? (e.clientX + props.thickness / 2 - rect.left) / rect.width
            : (e.clientY + props.thickness / 2 - rect.top) / rect.height;
          if (percent < props.min) offsetPosition.value = props.min;
          else if (percent > props.max) offsetPosition.value = props.max;
          else offsetPosition.value = percent;
          emit('update:modelValue', offsetPosition.value);
        }
      });
    };
    const handleMouseup = () => {
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('mouseup', handleMouseup);
      emit('onMoveEnd');
      isMoving.value = false;
    };
    const handleMousedown = () => {
      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('mouseup', handleMouseup);
      emit('onMoveStart');
      isMoving.value = true;
    };
    return {
      splitWrapperRef,
      isMoving,
      isHorizontal,
      offsetPosition,
      offsetPercent,
      triggerPosition,
      triggerWidth,
      rightOrBottomPanePercent,
      handleMousedown,
    };
  },
});
</script>
