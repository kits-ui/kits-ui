<template>
  <div @click="popNotice(props)">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <u-button type="insert">默认按钮</u-button>
    </template>
  </div>
</template>

<script setup lang="ts">
// let data = {};
import { onMounted, nextTick } from 'vue';
const props = defineProps({
  dir: {
    type: String,
    default: 'auto',
  },
  lang: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '你好，我是跳了两年半的坤坤，请多指教',
  },
  tag: {
    type: [String, Number],
    default: new Date().getTime(),
  },
  icon: {
    type: String,
    default: 'https://suantaichaorou.top/logo.png',
  },
});
onMounted(() => {
  if (window.Notification) {
    console.log(Notification.permission);
    // 浏览器通知--window.Notification
    if (Notification.permission == 'granted') {
      console.log('允许通知');
    } else if (Notification.permission != 'denied') {
      console.log('需要通知权限');
      Notification.requestPermission((d) => {
        console.log(d);
      });
    }
  } else {
    console.error('浏览器不支持Notification');
  }
});
// 播放消息声音
function popNotice(Data) {
  if (Notification.permission == 'granted') {
    let notification = new Notification('收到一条新消息', {
      dir: Data.dir,
      lang: Data.lang,
      body: Data.body,
      tag: Data.tag,
      icon: Data.icon,
    });
    notification.onclick = function () {
      nextTick(() => {
        setTimeout(() => {
          //具体操作
        }, 500);
      });
      //可直接打开通知notification相关联的tab窗
      window.focus();
      notification.close();
    };
    console.log('浏览器通知！');
  } else if (Notification.permission == 'denied') {
    alert('您禁止了通知功能');
  } else {
    console.log('声音通知！');
    // const audio = document.getElementById('chatAudio');
    // // 从头播放
    // audio.currentTime = 0;
    // audio.play();
  }
}
</script>
