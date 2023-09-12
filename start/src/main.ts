import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from './router/index';
import kitsUI from '../../packages/kits-ui/index';
import kitsIcon from '../../packages/kits-ui-icons/index';
import '../../packages/kits-ui-theme/index.scss';

// import { menusEvent } from '../../packages/kits-ui/src/contextMenu/usee';
// 注册icon
const app: any = createApp(App);
for (const [key, component] of Object.entries(kitsIcon)) {
  app.component(key, component);
}
// app.config.globalProperties.contextmenu = (event, menus) => {
//   menusEvent(event, menus);
// };
// app.config.globalProperties.$message = kitsIcon.message;
app.use(Router);
// 注册组件
app.use(kitsUI);
app.mount('#app');
