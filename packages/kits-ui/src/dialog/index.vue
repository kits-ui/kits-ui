<template>
  <dialog ref="kDialog" class="k-dialog">
    <div v-if="props.modelValue">
      <div class="k-dialog-header">
        <slot name="header">
          <span>{{ props.title }}</span>
          <span class="k-dialog-closeBtn" @click="close">
            <close1 />
          </span>
        </slot>
      </div>
      <div class="k-dialog-body">
        <slot></slot>
      </div>
      <div class="k-dialog-footer">
        <slot name="footer">
          <!-- <k-button @click="close">关闭</k-button> -->
        </slot>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { close1 } from '../icon/index';
console.log(6666666);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const kDialog = ref<any>();

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      kDialog.value.showModal();
    } else {
      kDialog.value.close();
    }
  },
);

const close = () => {
  kDialog.value.close();
  emit('update:modelValue', false);
};
</script>

<style scoped></style>
