import { App } from 'vue';
// import SFCButton from "./button/SFCButton.vue";
import 'uno.css';
import './style.css';
import UButton from './button/index.vue';
import FilterBox from './filterBox/index.vue';
import UAuthCode from './authCode/index.vue';
import UNotification from './notification/index.vue';

// 导出单独组件
export { UButton };

// 编写一个插件，实现一个install方法
// app.component(组件名称, 组件实例);
export default {
  install(app: App): void {
    app.component('UButton', UButton);
    app.component('UFilterBox', FilterBox);
    app.component('UAuthCode', UAuthCode);
    app.component('UNotification', UNotification);
  },
};
