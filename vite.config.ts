import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(), vueJsx({}), // 添加UnoCSS插件
    Unocss()
  ],
   // 添加库模式配置
   build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 独立css
    lib: {
      entry: "./src/entry.ts",
      name: "UseLessUI",
      fileName: "useless-ui",
      // 导出模块格式
      formats: ["esm","umd","iife"],
    },
  },
});