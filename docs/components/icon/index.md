# Icon 组件

## 使用图标

kits-ui 预置的 icon 图标与组件包进行了分离,以便方便用户使用第三方 icon,因此需要单独进行安装 icon 包

## 使用方式

```bash
#npm
npm install @kits-ui/icons

#yarn
yarn add @kits-ui/icons

```

## 全局注册

```js
// main.ts
import * as kitsIcon from '@kits-ui/icons';

// 注册icon
const app = createApp(App);
for (const [key, component] of Object.entries(kitsIcon)) {
  app.component(key, component);
}
```

## 直接使用

:::demo

```vue
<template>
  <div>
    <back />
    <edit />
    <earth />
    <like />
    <star />
  </div>
</template>
```

:::

## 使用 k-icon

使用 k-icon 可以通过 **size** 和 **color** 为 icon 设置大小与颜色
:::demo

```vue
<template>
  <div style="margin-bottom: 10px">
    <k-icon>
      <back />
    </k-icon>
    <k-icon>
      <edit />
    </k-icon>
    <k-icon>
      <earth />
    </k-icon>
    <k-icon>
      <like />
    </k-icon>
  </div>
  <div style="margin-bottom: 10px">
    <k-icon color="#fbbd0a">
      <back />
    </k-icon>
    <k-icon color="#e74032">
      <edit />
    </k-icon>
    <k-icon color="#22a5f1">
      <earth />
    </k-icon>
    <k-icon color="#2bc0ac">
      <like />
    </k-icon>
  </div>
  <div>
    <k-icon size="20px">
      <back />
    </k-icon>
    <k-icon size="20px">
      <edit />
    </k-icon>
    <k-icon size="20px">
      <earth />
    </k-icon>
    <k-icon size="20px">
      <like />
    </k-icon>
  </div>
</template>
```

:::

## 内置 Icon(持续补充中...)

<Icons/>
