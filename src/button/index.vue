<template>
  <button
    class="u-button px-4 py-1 font-semibold shadow-md  border-none cursor-pointer m-1"
    :class="`text-white bg-${props.color}-500 hover:bg-${props.color}-700 `"
  >
    <slot/>
  </button>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";


// defineOptions({
//   name: "UButton",
// });

const props = defineProps({
  color: {
    String,
    default: "blue",
  },
});

</script>
<style lang="scss" scoped>
.u-button {
  border-radius: 5px;
}
</style>
