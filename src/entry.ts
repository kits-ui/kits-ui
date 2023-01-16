import { App } from "vue";
import SFCButton from "./SFCButton.vue";

// 导出单独组件
export { SFCButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
  },
};