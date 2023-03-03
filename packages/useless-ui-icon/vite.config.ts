import type { UserConfigExport } from 'vite';

export default (): UserConfigExport => {
  return {
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
