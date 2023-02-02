import { App } from "vue";
import SFCButton from "./SFCButton.vue";
import UButton from './button/index';
import "uno.css";
// 导出单独组件
export { SFCButton, UButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(UButton.name, UButton);
  },
};