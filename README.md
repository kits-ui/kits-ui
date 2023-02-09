# useless-ui

## 开发流程

1. fork 主仓库 useless-ui
2. 使用 http 或 ssh clone 个人仓库
3. 在 clone 后的个人仓库中 通过 git remote add 主仓库名 主仓库 ssh 添加一条主仓库链接 例如： git remote add uselessui git@github.com:useless-ui/useless-ui.git
4. 拉取 **uselessui** 仓库代码 pull uselessui, 拉取后切换 **uselessui** 仓库的 dev 分支进行开发
5. 在后续开发中,拉取主仓库 **uselessui** 的 dev 分支 代码到本地，保证代码为最新， 推送代码则是到个人仓库 即： pull uselessui dev / push origin dev
6. 在每次 push 代码前, 拉取一次主仓库代码,保证提交上去不会有冲突
7. 提交 pr -> 发起 个人仓库到主仓库的 pr origin 的 dev 分支 推送到 uselessui 的 dev 分支
8. 通过检测无冲突后进行合并

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
    │  app.vue                      // 测试页面
    │  entry.ts                     // 注册组件
    │  main.ts                      // 测试页面主文件
    │  style.css                    // 全局变量
    │
    └─button                        // 按钮示例组件
            index.vue               // vue组件示例
            jsxdemo.tsx             // jsx组件demo示例
```

> **测试页面如何打开?**
> **运行 npm run build 生成 dist 文件, 再运行 npm start 打开测试页面**

> **提交代码时 commit 未通过 main.ts 报错请先 npm run build 生成 dist 目录在进行提交,保证 main.ts 中的引用是正确的**

## 主题色 (默认色)

```js
#3bd3be
```

## hover 主题色 (默认色)

```js
#40d9c4
```

## 边框 (默认色)

```js
#ebeef5
```
