# Theme 主题配置

## 默认主题

组件库提供默认主题与暗色主题,使用媒体查询 **prefers-color-scheme** 来跟随系统进行主题切换

```css
/* 默认主题变量 */
:root {
  --border-color: #ebeef5; /* 边框色 */
  --theme-color: #3bd3be; /* 主题色 */
  --theme-hover-color: #40d9c4; /* hover主题色 */
  --font-color: #606266; /* 字体颜色 */
  --zebra-bg: #fafafa; /* 斑马纹背景色 */
  --border-sm-radius: 5px; /* 小型组件圆角: button message-- */
  --border-lg-radius: 15px; /* 大型组件圆角: dialog table-- */
}
```

## 自定义主题

使用 css 对组件库提供的变量进行覆盖即可
