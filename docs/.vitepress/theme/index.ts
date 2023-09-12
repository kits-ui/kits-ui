import DefaultTheme from 'vitepress/theme';
import './style/var.css';
import './style/components.css';
// 组件包与css引入
import kitsUI from 'kits-ui';
import '@kits-ui/theme';
import * as kitsIcon from '@kits-ui/icons';

// 3.0.3
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
// 插件的组件，主要是demo组件
import { useComponents } from './useComponents';

// 2.0.2
// import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

import { globals } from '../demo';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(kitsUI);
    // app.mixin({
    //   mounted() {
    //     import('kits-ui').then((module) => {
    //       console.log(52666)
    //       app.use(module.default);
    //     });
    //   },
    // });

    for (const [key, component] of Object.entries(kitsIcon)) {
      app.component(key, component);
    }

    // 3.0.3
    useComponents(app);
    // 2.0.2
    // app.component('Demo', Demo);
    // app.component('DemoBlock', DemoBlock);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
  },
};
