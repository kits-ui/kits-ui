import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
  ],
});
