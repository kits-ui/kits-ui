# Skeleton 骨架屏

常用操作按钮

## 基础用法

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-skeleton :is-animated="true" width="500px" height="30px"></k-skeleton>
    <br />
    <br />
    <k-skeleton type="img" width="200px" height="200px" :is-animated="true">
      <img src="https://kits-ui.xiaolong0418.com/kits-ui/logo.png" />
    </k-skeleton>

    <br />
    <br />
    <k-skeleton height="200px" width="200px" :is-animated="true" radius="50%"></k-skeleton>

    <br />
    <br />
  </div>
</template>
```

:::

---

# Skeleton API

## Skeleton 属性

| 属性名     | 说明         | 类型      | 可选值       | 默认值 |
| ---------- | ------------ | --------- | ------------ | ------ |
| isAnimated | 是否开启动画 | `boolean` | false / true | true   |
| type       | 类型         | `string`  | text / img   | text   |
| width      | 宽度         | `string`  |              | 300px  |
| height     | 高度         | `string`  |              | 50px   |
| radius     | 圆角         | `string`  |              | 0      |
