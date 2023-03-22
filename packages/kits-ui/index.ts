import { App } from 'vue';
import components from './components';

const prefix = 'K';
// 导出单独组件
// export { Button };

// 编写一个插件，实现一个install方法
// app.component(组件名称, 组件实例);
export default {
  install(app: App): void {
    for (const [key, component] of Object.entries(components)) {
      app.component(`${prefix}${key}`, component);
    }
  },
};
