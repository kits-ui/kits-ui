# kits-ui

## 拉取推送流程

1. fork 主仓库 kits-ui
2. 使用 http 或 ssh clone 个人仓库
3. 在 clone 后的个人仓库中 通过 git remote add 主仓库名 主仓库 ssh 添加一条主仓库链接 例如： git remote add kits-ui git@github.com:kits-ui/kits-ui.git
4. 拉取 **kits-ui** 仓库代码 pull kits-ui, 拉取后切换 **kits-ui** 仓库的 dev 分支进行开发
5. 在后续开发中,拉取主仓库 **kits-ui** 的 dev 分支 代码到本地，保证代码为最新， 推送代码则是到个人仓库 即： pull kits-ui dev / push origin dev
6. 在每次 push 代码前, 拉取一次主仓库代码,保证提交上去不会有冲突
7. 提交 pr -> 发起 个人仓库到主仓库的 pr origin 的 dev 分支 推送到 kits-ui 的 dev 分支
8. 通过检测无冲突后进行合并

## 项目目录介绍

```bash

├─docs                              // 文档目录
│  │  index.md                      // 文档首页
│  │  vite.config.ts                // 文档配置文件
│  │
│  ├─.vitepress                     // 文档主题以及缓存文件
│  │  │  config.ts                  // 文档界面配置
│  │  │
│  │  ├─cache                       // 缓存文件
│  │  │  └─deps
│  │  │      package.json
│  │  │      vue.js
│  │  │      vue.js.map
│  │  │      _metadata.json
│  │  ├─demo                        // 在组件文档中需要展示的组件集合
│  │  │
│  │  └─theme                       // 主题相关
│  │      │  index.ts
│  │      │
│  │      └─style                   // 自定义主题样式文件
│  │         componrnts.css         // 组件文档中使用demo展示需要的样式文件
│  │         var.css
│  │
│  ├─components                     // 组件文档
│  │  └─button
│  │        index.md
│  │
│  └─guide                          // 文档入口
│       index.md
│
│─packages
│  │
│  │─kits-ui                        // 组件文件包
│  │  └─button                      // 按钮示例组件文件夹
│  │       index.vue                // vue组件示例
│  │
│  │─kits-ui-icons                  // icon文件包
│  │  ├─src                         // icon组件文件夹
│  │  ├─svg.ts                      // icon导出文件
│  │  └─index.ts                    // icon组件包主入口
│  │
│  └─kits-ui-theme                  // 样式文件包
│     ├─src                         // 各组件样式文件
│     └─index.scss                  // 样式文件主入口--包含部分全局变量
│
│─start                             // 预览页面(普通vue项目)
│  ├─src
│  │  ├─components                  // 预览页面需要调试的组件
│  │  ├─router                      // 当前路由文件
│  │  ├─app.vue
│  │  ├─main.ts                     // 主入口文件
│  │  └─style.css
│  │
│  └─index.html                     // 预览页面的主体
│
└─scripts
   └─publish.sh                     // 打包发布脚本

```

## 提示

> **文档页面如何打开? 运行 npm run build 生成各包对应的 dist 文件, 再运行 npm run docs:dev 打开文档页面**

> **预览页面如何打开? 运行 npm start 打开预览页面**

> **在目前结构中 docs 中的文档模块分别引用了 packages 下的 ui 模块 icon 模块 theme 模块, 具体引用路径为 /docs/.vitepress/theme/index.ts**

## 注意事项

因本项目使用 monorepo 方式进行管理, 项目分为主包与子包, 有以下几点需要注意

1. 安装依赖使用 pnpm, 将项目拉取到本地后 使用 pnpm i 安装所有依赖
2. 主包下的 package.json 中的依赖为全局依赖,可供任意子包进行使用 安装依赖到主包的方式为 pmpm i 需要安装的包名 -w
3. 在开发过程中遇到仅某一子包需要使用的依赖,请将该依赖安装在需要的子包下, 安装方式为 pnpm i 需要安装的包名 -r --filter 需要安装该包的子包
4. 目前除 docs 包中会引用其他子包外,其余子包都处于隔离状态,互不引用,请勿相互引用
5. ui 包中仅仅涉及结构与行为,不涉及样式.
6. icon 中为当前项目中默认预置的 icon 图标,后续需要添加请在 issues 中声明
7. theme 目前为所有组件的样式集合,对应组件的样式写在 theme 下 src 文件中
8. preview 为预览页面, 开发组件时在该页面调试,随便写,随便删!!!!!!!!!!!!!!!!!!
9. 在预览页面中调试无问题后,再按提示第一条打开文档书写组件文档
10. 预览页面调试自己组件时新建路由与组件去调试

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
