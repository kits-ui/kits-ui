import { createApp } from 'vue';
import App from './app.vue';
import UselessUI from '../dist/useless-ui.mjs';
import '../dist/entry.css';

const app = createApp(App);
app.use(UselessUI);
app.mount('#app');
