import { demoBlockPlugin } from 'vitepress-theme-demoblock';

const sidebar = {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '通用变量', link: '/guide/variable' },
      ],
    },
    { text: '反馈' },
  ],
  '/components/': [
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'filterBox 搜索面板', link: '/components/filterBox/' },
        { text: 'authCode 验证码', link: '/components/authCode/' },
        { text: 'notification 通知', link: '/components/notification/' },
      ],
    },
    { text: '导航' },
    { text: '布局' },
  ],
};
const config = {
  title: 'Useless UI🌟',
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
    siteTitle: 'Useless UI🌟',
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/useless-ui/useless-ui' }],
  },
  markdown: {
    theme: {
      light: 'rose-pine-dawn',
      dark: 'rose-pine-moon',
    },
    config: (md) => {
      // 添加DemoBlock插槽
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
