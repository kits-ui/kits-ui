import { App } from 'vue';
// import SFCButton from "./button/SFCButton.vue";
import 'uno.css';
import './style.css';
import UButton from './button/index.vue';
import UFilterBox from './filterBox/index.vue';
import UAuthCode from './authCode/index.vue';
import UNotification from './notification/index.vue';
import UImage from './image/index.vue';
import UIcon from './icon/index.vue';

// 导出单独组件
export { UButton };

// 编写一个插件，实现一个install方法
// app.component(组件名称, 组件实例);
export default {
  install(app: App): void {
    app.component('UButton', UButton);
    app.component('UFilterBox', UFilterBox);
    app.component('UAuthCode', UAuthCode);
    app.component('UNotification', UNotification);
    app.component('UImage', UImage);
    app.component('UIcon', UIcon);
  },
};
