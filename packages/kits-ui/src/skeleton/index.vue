<template>
  <div
    class="k-skeleton"
    :class="{
      'k-skeleton-animated': isAnimated,
    }"
    :style="{
      borderRadius: radius,
      width: width,
    }"
  >
    <div
      v-if="type === 'text'"
      class="k-skeleton-text"
      :style="{
        width: width,
        height: height,
      }"
    ></div>
    <div
      v-if="type === 'img'"
      class="k-skeleton-img-box"
      :style="{
        width: width,
        height: height,
      }"
    >
      <slot>
        <img src="https://cdn.xiaolong0418.com/navigation/images/GitHub.ico" />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  isAnimated: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },

  width: {
    type: String,
    default: '300px',
  },

  height: {
    type: String,
    default: '50px',
  },
  radius: {
    type: String,
    default: '0',
  },
});
</script>
