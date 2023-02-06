# useless-ui

## 项目目录介绍

```bash
├─config
│  │  unocss.ts                     // 原子样式允许动态使用属性的配置文件
├─docs                              // 文档目录
│  │  index.md                      // 文档首页
│  │  vite.config.ts                // 文档配置文件
│  │
│  ├─.vitepress                     // 文档主题以及缓存文件
│  │  │  config.ts                  // 文档界面配置
│  │  │
│  │  ├─cache                       // 缓存文件
│  │  │  └─deps
│  │  │          package.json
│  │  │          vue.js
│  │  │          vue.js.map
│  │  │          _metadata.json
│  │  │
│  │  └─theme                       // 主题相关
│  │      │  index.ts
│  │      │
│  │      └─style                   // 自定义主题样式文件
│  │              var.css
│  │
│  ├─components                     // 组件文档
│  │  └─button
│  │          index.md
│  │
│  └─guide                          // 文档入口
│          index.md
│
└─src                               // 组件书写位置
    │  entry.ts                     // 注册组件
    │  index.ts                     // 目前没啥用....
    │
    └─button                        // 按钮示例组件
            index.vue               // vue组件示例
            jsxdemo.tsx             // jsx组件demo示例
```
