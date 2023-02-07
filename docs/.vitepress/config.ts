import { demoBlockPlugin } from 'vitepress-theme-demoblock';

const sidebar = {
  '/': [
    { text: '快速开始', items: [{ text: '介绍', link: '/guide/' }] },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'filterBox 搜索面板', link: '/components/filterBox/' },
        { text: 'authCode 验证码', link: '/components/authCode/' },
      ],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
};
const config = {
  title: 'Useless UI🌟',
  themeConfig: {
    siteTitle: 'Useless UI🌟',
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/useless-ui/useless-ui' }],
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
