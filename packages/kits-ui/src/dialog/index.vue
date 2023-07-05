<template>
  <Teleport to="body">
    <Transition name="bounce">
      <dialog ref="kDialog" class="k-dialog">
        <div class="content" style="height: props.height">
          <div>
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
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { close1 } from '../icon/index';
import { setStyle } from '../utils/index';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '50px',
  },
});

const emit = defineEmits(['update:modelValue']);

const kDialog = ref<HTMLDialogElement>();

onMounted(() => {
  // kDialog.value.addEventListener('transitionend', function (e) {
  //   kDialog.value.close();
  // });
});

watch(
  () => props.modelValue,
  async (newValue) => {
    if (newValue) {
      kDialog.value.showModal();
      setStyle(kDialog.value, {
        visibility: 'visible',
        transform: 'translateY(0%)',
        opacity: '1',
      });
    } else {
      kDialog.value.style.transform = 'translateY(-40%)';
      kDialog.value.style.opacity = '0';
      kDialog.value.style.visibility = 'hidden';
      // domClose();
      setTimeout(() => {
        kDialog.value.close();
      }, 200);
    }
  },
);

const close = () => {
  const res = kDialog.value.getBoundingClientRect();
  console.log(res);
  emit('update:modelValue', false);
  setTimeout(() => {
    kDialog.value.close();
  }, 200);
};
</script>

<style scoped></style>
