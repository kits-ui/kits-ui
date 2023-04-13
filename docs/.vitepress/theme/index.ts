import DefaultTheme from 'vitepress/theme';

// 组件包与css引入
// import kitsUI from 'kits-ui';
import '@kits-ui/theme';
import * as kitsIcon from '@kits-ui/icons';

import './style/var.css';
import './style/components.css';
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

import { globals } from '../demo';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const [key, component] of Object.entries(kitsIcon)) {
      app.component(key, component);
    }
    app.mixin({
      async mounted() {
        import('kits-ui').then((module) => {
          app.use(module.default);
        });
      },
    });
    // app.use(kitsUI);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
