<template>
  <transition-group name="slide-fade">
    <div v-for="message in messageQueue" :key="message.id" :class="getInnerClass(message.type)">
      <div
        v-if="message.duration === 0 || message.closeVisible"
        class="k-message-close-icon"
        @click="closeHandle(message)"
      >
        <span :class="getIconName(message.type)">
          <close />
        </span>
      </div>
      <div class="k-message-contents">
        <span class="k-message-icon" :class="getIconName(message.type)">
          <info v-if="message.type === 'info'" />
          <success v-else-if="message.type === 'success'" />
          <warning v-else-if="message.type === 'warning'" />
          <error v-else-if="message.type === 'error'" />
        </span>
        <span class="k-message-content" v-html="message.content"></span>
      </div>
    </div>
  </transition-group>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import type { MessageOption, MessageType } from './message';
import Message from './message';
import { info, success, warning, error, close } from '../icon/index';
defineProps({
  messageQueue: {
    type: Array as PropType<MessageOption[]>,
    default: () => [],
  },
});
const getInnerClass = (type: MessageType) => {
  // 控制不同类型的提示组件的样式
  const MESSAGE_CLASS = 'k-message';
  return {
    [MESSAGE_CLASS]: true,
    [`${MESSAGE_CLASS}-${type}`]: true,
  };
};
const getIconName = (type: MessageType) => {
  //设置四种不同提示状态的图标颜色
  return `icon-${type}`;
};
const closeHandle = (message: MessageOption) => Message.remove(message);
</script>
