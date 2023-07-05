<template>
  <Teleport to="body">
    <div class="k-drawer">
      <div class="k-drawer-mask" v-if="props.modelValue"></div>
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
// const slots = useSlots();

// const defaultSlot = slots.default && slots.default()[0];

onMounted(() => {
  window.addEventListener('click', clickHandler);
});

watch(
  () => props.modelValue,
  (newVal: boolean) => {
    if (newVal) {
      document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`;
      document.body.style.overflow = 'hidden';
      nextTick(() => {
        console.log(
          document.getElementsByClassName('k-drawer-mask')[0],
          'document.getElementsByClassName',
        );
        maskDom.value = document.getElementsByClassName('k-drawer-mask')[0];
      });
      showDrawer();
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
      closeDrawer();
    }
  },
);

const clickHandler = (e: any) => {
  if (!props.modelValue) {
    return;
  }
  if (e.target === kDrawerContent.value || kDrawerContent.value.contains(e.target)) {
    // closePopup()
    // emit('selected', e.target.dataset.value)
    // emit('update:modelValue', false)
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
    kDrawerContent.value.style.transform = 'translateY(0)';
  } else {
    kDrawerContent.value.style.transform = 'translateX(0)';
  }
};

const closeDrawer = () => {
  if (props.direction === 'top' || props.direction === 'bottom') {
    kDrawerContent.value.style.transform = `translateY(${
      props.direction === 'top' ? '-150' : '150'
    }%)`;
  } else {
    kDrawerContent.value.style.transform = `translateX(${
      props.direction === 'left' ? '-150' : '150'
    }%)`;
  }
  kDrawerContent.value.style.visibility = 'hidden';
};
</script>
