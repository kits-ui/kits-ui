import { resolve } from 'path';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import type { UserConfigExport } from 'vite';

export default (): UserConfigExport => {
  return {
    /** 针对 css 的配置项 */
    css: {
      postcss: {
        plugins: [
          // 针对一些前沿的 css 进行降级
          postcssPresetEnv(),
          // 自动添加浏览器厂商前缀
          autoprefixer(),
        ],
      },
    },
    build: {
      outDir: resolve(__dirname, 'dist/dist'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'packages/useless-ui-theme/index.scss'),
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
  };
};
