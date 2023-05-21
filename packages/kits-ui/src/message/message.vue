<template>
  <transition-group name="slide-fade">
    <div v-for="message in messageQueue" :key="message.id" :class="getInnerClass(message.type)">
      <div
        v-if="message.duration === 0 || message.closeVisible"
        class="k-message-close-icon"
        @click="closeHandle(message)"
      >
        <k-icon :class="getIconName(message.type)">
          <close />
        </k-icon>
      </div>
      <div class="k-message-contents">
        <k-icon class="k-message-icon" :class="getIconName(message.type)">
          <info v-if="message.type === 'info'" />
          <success v-else-if="message.type === 'success'" />
          <warning v-else-if="message.type === 'warning'" />
          <error v-else-if="message.type === 'error'" />
        </k-icon>
        <span class="k-message-content" v-html="message.content"></span>
      </div>
    </div>
  </transition-group>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import type { MessageOption, MessageType } from './message';
import Message from './message';
import info from '../../../kits-ui-icons/src/info.vue';
import success from '../../../kits-ui-icons/src/success.vue';
import warning from '../../../kits-ui-icons/src/warning.vue';
import error from '../../../kits-ui-icons/src/error.vue';
import close from '../../../kits-ui-icons/src/close.vue';
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
