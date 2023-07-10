<template>
  <Teleport to="body">
    <div class="k-drawer">
      <div v-if="props.modelValue" class="k-drawer-mask"></div>
      <div ref="kDrawerContent" class="k-drawer-content" :class="props.direction">
        <slot>
          <!-- <component :is="defaultSlot"></component> -->
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, ref, onMounted, nextTick } from 'vue';
import { setBodyPaddingRight } from '../hooks/bodyPadding';

const props: any = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: 'right',
  },
});
const emit: any = defineEmits(['update:modelValue']);
const kDrawerContent = ref<any>();
const maskDom = ref<any>();

// const defaultSlot = slots.default && slots.default()[0];

onMounted(() => {
  window.addEventListener('click', clickHandler);
});

watch(
  () => props.modelValue,
  (newVal: boolean) => {
    setBodyPaddingRight(newVal);
    if (newVal) {
      nextTick(() => {
        maskDom.value = document.getElementsByClassName('k-drawer-mask')[0];
      });
      showDrawer();
    } else {
      closeDrawer();
    }
  },
);

const clickHandler = (e: any) => {
  if (!props.modelValue) {
    return;
  }
  if (e.target === kDrawerContent.value || kDrawerContent.value.contains(e.target)) {
    // 点击内部触发
  } else if (e.target === maskDom.value) {
    closeDrawer();
    emit('update:modelValue', false);
  } else {
    return;
  }
};

const showDrawer = () => {
  kDrawerContent.value.style.visibility = 'visible';
  if (props.direction === 'top' || props.direction === 'bottom') {
    kDrawerContent.value.style.transform = 'translateY(0) translateX(0)';
  } else {
    kDrawerContent.value.style.transform = 'translateX(0) translateY(0)';
  }
};

const closeDrawer = () => {
  if (props.direction === 'top' || props.direction === 'bottom') {
    kDrawerContent.value.style.transform = `translateY(${
      props.direction === 'top' ? '-150' : '150'
    }%) translateX(0)`;
  } else {
    kDrawerContent.value.style.transform = `translateX(${
      props.direction === 'left' ? '-150' : '150'
    }%) translateY(0)`;
  }
  kDrawerContent.value.style.visibility = 'hidden';
};
</script>
