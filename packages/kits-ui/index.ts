import { App } from 'vue';
import * as components from './components';
import directives from './src/directives';

// 导出单独组件
export * from './components';
console.log(components);
// 编写一个插件，实现一个install方法
// app.component(组件名称, 组件实例);
export default {
  install(app: App): void {
    for (const [key, component] of Object.entries(components)) {
      app.component(key, component);
    }

    // 指令注册
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
    app.config.globalProperties.$message = components['message'];
  },
};
