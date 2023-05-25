import { demoBlockPlugin } from 'vitepress-theme-demoblock';
import { kTablePlugin } from './plugins/table';

const sidebar = {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/use' },
      ],
    },
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Icon 图标', link: '/components/icon/' },
        { text: 'Loading 加载', link: '/components/loading/' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton/' },
        { text: 'Split 分割面板', link: '/components/split/' },
      ],
    },
    {
      text: '数据组件',
      items: [
        { text: 'AuthCode 验证码', link: '/components/authCode/' },
        { text: 'FilterBox 搜索面板', link: '/components/filterBox/' },
        { text: 'Image 图片', link: '/components/image/' },
        { text: 'Calendar 日历', link: '/components/calendar/' },
      ],
    },
    {
      text: '反馈组件',
      items: [
        { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm/' },
        { text: 'Popover 气泡框', link: '/components/popover/' },
        { text: 'Tooltip 文字提示', link: '/components/tooltip/' },
        { text: 'Message 消息提示', link: '/components/message/' },
        { text: 'Notification 桌面通知', link: '/components/notification/' },
      ],
    },
    {
      text: '其他组件',
      items: [
        { text: 'Watermark 水印', link: '/components/watermark/' },
        { text: 'contextMenu 右键菜单', link: '/components/contextMenu/' },
        { text: 'emoji 表情', link: '/components/emoji/' },
        { text: '瀑布流', link: '/components/waterfall/' },
      ],
    },
    {
      text: '主题',
      items: [{ text: 'Theme 主题', link: '/components/theme/' }],
    },
  ],
};
const config: any = {
  base: '/kits-ui/',
  title: 'Kits UI🌟',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/button/', activeMatch: '/components/' },
      {
        text: '版本',
        items: [
          {
            text: '0.0.3',
          },
        ],
      },
    ],
    siteTitle: 'Kits UI🌟',
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/kits-ui/kits-ui' }],
  },
  markdown: {
    theme: {
      light: 'rose-pine-dawn',
      dark: 'rose-pine-moon',
    },
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(kTablePlugin);
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom',
        // customStyleTagName: 'style lang="less"',
        scriptImports: ["import * as KitsUI from 'kits-ui'"],
        scriptReplaces: [
          {
            searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
            replaceValue: 'const { defineComponent: _defineComponent } = Vue',
          },
          {
            searchValue: /import ({.*}) from 'kits-ui'/g,
            replaceValue: (s, s1) => `const ${s1} = KitsUI`,
          },
        ],
        styleReplaces: [
          {
            searchValue: '@import "docs/styles/index.css";',
            replaceValue: '@import "@docs/styles/index.css";',
          },
        ],
      });
    },
  },
};
export default config;
