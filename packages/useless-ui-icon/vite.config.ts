import type { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx({}),
      dts({
        staticImport: true /** 是否将动态引入转换为静态 */,
        insertTypesEntry: true /** 是否生成类型声明入口 */,
        cleanVueFileName: true /** 是否将 '.vue.d.ts' 文件名转换为 '.d.ts' */,
        copyDtsFiles: false /** 是否将源码里的 .d.ts 文件复制到 outputDir */,
      }),
    ],
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
