import { demoBlockPlugin } from 'vitepress-theme-demoblock';

const sidebar = {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/use' },
      ],
    },
    { text: '反馈' },
  ],
  '/components/': [
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'icon图标', link: '/components/icon/' },
      ],
    },
    {
      text: '数据组件',
      items: [
        { text: 'authCode 验证码', link: '/components/authCode/' },
        { text: 'filterBox 搜索面板', link: '/components/filterBox/' },
        { text: 'image图片', link: '/components/image/' },
      ],
    },
    {
      text: '其他组件',
      items: [{ text: 'notification 通知', link: '/components/notification/' }],
    },
  ],
};
const config = {
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
            text: '0.0.1',
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
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
