<template>
  <transition-group name="slide-fade">
    <div v-for="message in messageQueue" :key="message.id" :class="getInnerClass(message.type)">
      <div v-if="message.duration === 0" class="close-message" @click="closeHandle(message)">
        <k-icon>
          <close />
        </k-icon>
      </div>
      <div class="contents">
        <i :class="['iconfont', `${getIconName(message.type)}`]"></i>
        <span class="k-message-content" v-html="message.content"></span>
      </div>
    </div>
  </transition-group>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import type { MessageOption, MessageType } from './message';
import Message from './message';
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
  //获取四种不同提示状态的图标名称，此处使用的是iconfont图标
  return `icon-${type}`;
};
const closeHandle = (message: MessageOption) => Message.remove(message);
</script>
