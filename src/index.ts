import { createApp } from "vue/dist/vue.esm-browser"
import UButton from "./button";
import UseLessUI from './entry';
// import aaa from './SFCButton.vue';

// createApp(aaa).mount("#app");
createApp({
  template:`
  <div>
    <UButton color="blue">蓝色按钮</UButton>
    <UButton color="green">绿色按钮</UButton>
    <UButton color="gray">灰色按钮</UButton>
    <UButton color="yellow">黄色按钮</UButton>
    <UButton color="red">红色按钮</UButton>
  </div>
  `
})
.use(UseLessUI)
.mount("#app");