import type { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default (): UserConfigExport => {
  return {
    plugins: [vue(), vueJsx({})],
    build: {
      minify: true,
      emptyOutDir: true,
      outDir: './dist',
      lib: {
        entry: './index.ts',
        formats: ['es'],
        fileName: () => 'index.js',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
  };
};
