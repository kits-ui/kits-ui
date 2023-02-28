<template>
  <i class="u-icon" :class="`icon-${props.type}`"></i>
  <!-- <svg class="u-icon icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.type}`"></use>
  </svg> -->
</template>

<script setup lang="ts">
// import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
});

// const classIconName = computed(() => {
//   return `i-simple-line-icons-${props.type}`;
// });
</script>

<style scoped>
i {
  display: inline-block;
}
</style>
