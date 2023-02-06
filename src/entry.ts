import { App } from 'vue';
// import SFCButton from "./button/SFCButton.vue";
import 'uno.css';
import UButton from './button/index.vue';
import FilterBox from './filterBox/index.vue';
// 导出单独组件
export { UButton };

// 编写一个插件，实现一个install方法

console.log(UButton.name, 'UButton.nameUButton.nameUButton.nameUButton.name');
export default {
  install(app: App): void {
    // app.component(SFCButton.name, SFCButton);
    app.component('UButton', UButton);
    app.component('FilterBox', FilterBox);
  },
};
