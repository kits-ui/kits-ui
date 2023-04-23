# Skeleton 骨架屏

常用操作按钮

## 基础用法

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <k-skeleton :is-animated="true" width="100%"></k-skeleton>
    <k-skeleton type="img" width="80px" height="80px" :is-animated="true">
      <img
        src="https://xiaolongosscdn.liam0418.com/myblog/images/37c3388f9af3eec6492b6831591fd63c.jpg"
      />
    </k-skeleton>

    <k-skeleton height="30px" width="30px" :is-animated="true" radius="100%"></k-skeleton>
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
