# Theme 主题配置

## 默认主题

组件库提供默认主题与暗色主题,使用媒体查询 **prefers-color-scheme** 来跟随系统进行主题切换

```css
/* 默认主题变量 */
:root {
  --k-border-color: #ebeef5; /* 默认边框色 */
  --k-theme-color: #2bc0ac; /* 主题色: 可用作字体 边框 背景 鼠标交互效果色 */
  --k-theme-interact-color: #40d9c4; /* hover or active字体主题色 */
  --k-theme-interact-bg-color: #2fd3bd2a; /* hover or active背景主题色 */
  --k-font-color: #606266; /* 字体颜色 */
  --k-zebra-bg: #fafafa; /* 斑马纹背景色 */
  --k-border-sm-radius: 5px; /* 小型组件圆角: button message-- */
  --k-border-lg-radius: 15px; /* 大型组件圆角: dialog table-- */
  --k-transition-duration: 0.3s; /* 过渡统一时间为0.3s 个别组件需要调整时间单独设置 */
}
```

## 自定义主题

使用 css 对组件库提供的变量进行覆盖即可
