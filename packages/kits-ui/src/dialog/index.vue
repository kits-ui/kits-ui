<template>
  <Teleport to="body">
    <Transition name="bounce">
      <div ref="kDialog" class="k-dialog">
        <div class="k-dialog-mask">
          <div ref="kDialogContent" class="k-dialog-content">
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
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { close1 } from '../icon/index';
import { setBodyPaddingRight } from '../hooks/bodyPadding';

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
  maskClosable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const kDialog = ref<HTMLDialogElement>();
const kDialogContent = ref<HTMLDialogElement>();

onMounted(() => {
  kDialog.value.addEventListener('click', (e: any) => {
    console.log(e.target);
    if (
      e.target !== kDialogContent.value &&
      !kDialogContent.value.contains(e.target) &&
      props.maskClosable
    ) {
      close();
    }
  });
});

watch(
  () => props.modelValue,
  async (newValue) => {
    setBodyPaddingRight(newValue);
    if (newValue) {
      kDialog.value.classList.add('open');
    } else {
      kDialogContent.value.classList.remove('open');
      close();
    }
  },
);

const close = () => {
  kDialog.value.classList.remove('open');
  emit('update:modelValue', false);
};
</script>

<style scoped></style>
