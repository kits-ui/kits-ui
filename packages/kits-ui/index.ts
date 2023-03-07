import { App } from 'vue';
// import SFCButton from "./button/SFCButton.vue";
// import '../useless-ui-theme';
import Button from './src/button/index.vue';
import FilterBox from './src/filterBox/index.vue';
import AuthCode from './src/authCode/index.vue';
import Notification from './src/notification/index.vue';
import Image from './src/image/index.vue';

const prefix = 'K';
// 导出单独组件
// export { Button };

// 编写一个插件，实现一个install方法
// app.component(组件名称, 组件实例);
export default {
  install(app: App): void {
    app.component(`${prefix}Button`, Button);
    app.component(`${prefix}FilterBox`, FilterBox);
    app.component(`${prefix}AuthCode`, AuthCode);
    app.component(`${prefix}Notification`, Notification);
    app.component(`${prefix}Image`, Image);
    // app.component('UIcon', UIcon);
  },
};
