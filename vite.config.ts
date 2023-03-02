import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import dts from 'vite-plugin-dts';
import { resolve } from 'path';
// import { copyFileSync } from 'fs';

// import { presetUno, presetAttributify, presetIcons } from 'unocss';

const rollupOptions: any = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
  // input: ['src/entry.ts'],
  // output: [
  //   {
  //     name: 'useless-ui',
  //     format: 'umd',
  //     sourcemap: false,
  //     dir: 'dist/dist',
  //     entryFileNames: '[name].js',
  //     chunkFileNames: '[name].js',
  //     assetFileNames: '[name].[ext]',
  //     manualChunks: undefined,
  //     inlineDynamicImports: false,
  //     globals: { vue: 'Vue' },
  //     namespaceToStringTag: true,
  //   },
  //   {
  //     format: 'es', // 打包模式
  //     dir: 'dist/es', // 输出路径
  //     // sourcemap: false,
  //     entryFileNames: '[name].js', // 输出后的文件名
  //     chunkFileNames: '[name].js', // 输出的 chunk文件名
  //     assetFileNames: '[name].[ext]', // 输出资产文件名
  //     inlineDynamicImports: false,
  //     manualChunks: undefined,
  //     preserveModules: true,
  //     preserveModulesRoot: 'src',
  //     namespaceToStringTag: true,
  //   },
  //   {
  //     format: 'cjs',
  //     // exports: 'named',
  //     dir: 'dist/lib',
  //     // sourcemap: false,
  //     entryFileNames: '[name].js',
  //     chunkFileNames: '[name].js',
  //     assetFileNames: '[name].[ext]',
  //     inlineDynamicImports: false,
  //     manualChunks: undefined,
  //     preserveModules: true,
  //     preserveModulesRoot: 'src',
  //     namespaceToStringTag: true,
  //   },
  // ]
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}), // 添加UnoCSS插件
    // dts({
    //   staticImport: true,
    //   //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
    //   outputDir: ['dist/es', 'dist/lib'],
    //   tsConfigFilePath: './tsconfig.json',
    //   afterBuild: (): void => {
    //     movePublicFile();
    //   },
    // }),
  ],
  // 添加库模式配置
  build: {
    target: 'modules',
    minify: false,
    cssCodeSplit: true, // 独立css
    outDir: resolve(__dirname, './dist'),
    lib: {
      entry: resolve(__dirname, 'packages/useless-ui/index.ts') /** 打包入口 */,
      name: 'UseLessUI',
      fileName: (format) => `index.${format}.js`,
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
    rollupOptions,
  },
});

// // 静态文件移动
// const movePublicFile = (): void => {
//   const files = [{ input: './README.md', outDir: 'dist/README.md' }];
//   files.forEach((item): void => {
//     copyFileSync(item.input, item.outDir);
//   });
// };

// move();
