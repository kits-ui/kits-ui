<template>
  <popver
    :position="props.position"
    :theme="props.theme"
    name="popconfirm"
    :arrow="props.arrow"
    :width="props.width"
    :title="props.title"
    :visible="visible"
  >
    <component :is="referenceSlot" @click="show"></component>
    <template #content>
      <slot>
        <component :is="defaultSlot"></component>
      </slot>
      <div class="popconfirm-footer">
        <k-button type="line" class="k-popconfirm-cancel" @click="(e) => cancel()"> 取消 </k-button>
        <k-button class="k-popconfirm-confirm" @click="(e) => confirm()">确定</k-button>
      </div>
    </template>
  </popver>
</template>

<script setup lang="ts">
import { useSlots, ref } from 'vue';
import popver from '../popver/popver.vue';
const props = defineProps({
  position: {
    type: String,
    default: 'top',
  },
  theme: {
    type: String,
    default: 'light',
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 150,
  },
  title: {
    type: String,
    default: '',
  },
});
const slots = useSlots();
const referenceSlot = slots.reference && slots.reference()[0];
const defaultSlot = slots.default && slots.default()[0];
const visible = ref<boolean>(false);

const cancel = () => {
  visible.value = false;
};

const confirm = () => {
  console.log(1);
};

const show = () => {
  visible.value = true;
};
</script>
