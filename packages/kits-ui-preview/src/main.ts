import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import kitsUI from '../../kits-ui/index';
import kitsIcon from '../../kits-ui-icons/index';
import '../../kits-ui-theme/index.scss';

const app = createApp(App);
for (const [key, component] of Object.entries(kitsIcon)) {
  app.component(key, component);
}

app.use(kitsUI);
app.mount('#app');
