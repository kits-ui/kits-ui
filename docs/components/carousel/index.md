# Carousel 走马灯

## 基础用法

使用`k-carousel`来定义一个走马灯。

:::demo

```vue
<template>
  <div style="width: 100%; height: 300px; margin: auto">
    <k-carousel>
      <div v-for="item in 5" :key="item" class="k-carousel-content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>
<style scoped>
.k-carousel-content {
  background-color: #2fd3bd2a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #666, -1px 1px 1px #333, 1px -1px 1px #fff;
}
</style>
```

:::

## 箭头

使用 `arrow` 属性来控制左右箭头是否显示

:::demo

```vue
<template>
  <div style="width: 100%; height: 300px; margin: auto">
    <k-carousel :arrow="false">
      <div v-for="item in 5" :key="item" class="k-carousel-content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<style scoped>
.k-carousel-content {
  background-color: #2fd3bd2a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #666, -1px 1px 1px #333, 1px -1px 1px #fff;
}
</style>
```

:::

## 垂直排列

使用 `direction` 属性来控制水平还是垂直排列, 默认为水平 `horizontal`。

:::demo

```vue
<template>
  <div style="width: 100%; height: 300px; margin: auto">
    <k-carousel direction="vertical">
      <div v-for="item in 5" :key="item" class="k-carousel-content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>
<style scoped>
.k-carousel-content {
  background-color: #2fd3bd2a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #666, -1px 1px 1px #333, 1px -1px 1px #fff;
}
</style>
```

:::

## 间隔时间

使用 `interval` 属性来控制切换的间隔时间,单位是毫秒, 最小值 1200, 最大值 15000

:::demo

```vue
<template>
  <div style="width: 100%; height: 300px; margin: auto">
    <k-carousel :interval="5000">
      <div v-for="item in 5" :key="item" class="k-carousel-content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<style scoped>
.k-carousel-content {
  background-color: #2fd3bd2a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #666, -1px 1px 1px #333, 1px -1px 1px #fff;
}
</style>
```

:::

## 指示器

使用 `indicators` 属性来控制指示器是否显示。 该属性值为 Boolean 类型。

:::demo

```vue
<template>
  <div style="width: 100%; height: 300px; margin: auto">
    <k-carousel :interval="3000" :indicators="false">
      <div v-for="item in 5" :key="item" class="k-carousel-content">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<style scoped>
.k-carousel-content {
  background-color: #2fd3bd2a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64dfce;
  font-size: 50px;
  font-weight: 700;
  text-shadow: -3px 3px 3px #666, -1px 1px 1px #333, 1px -1px 1px #fff;
}
</style>
```

:::

---

# Carousel API

## Carousel 属性

| 属性名       | 说明                                  | 类型      | 可选值               | 默认值     |
| ------------ | ------------------------------------- | --------- | -------------------- | ---------- |
| defaultValue | 默认位置                              | `number`  | -------------------- | 1          |
| arrow        | 箭头状态                              | `boolean` | -------------------- | true       |
| direction    | 轮播方向                              | `string`  | horizontal/vertical  | horizontal |
| interval     | 轮播的时间间隔(min: 1200, max: 15000) | `number`  | -------------------- | 2000       |
| autoplay     | 是否自动播放                          | `boolean` | -------------------- | true       |
| indicators   | 指示器状态                            | `boolean` | -------------------- | true       |

## Carousel 事件

| 事件名 | 说明             | 回调参数                 |
| ------ | ---------------- | ------------------------ |
| change | 幻灯片切换时触发 | `function(currentIndex)` |

## Carousel 方法

| 事件名 | 说明           | 类型         |
| ------ | -------------- | ------------ |
| prev   | 切换上一页触发 | `function()` |
| next   | 切换下一页触发 | `function()` |
| moveTo | 移动到某一页   | `function()` |

```vue
<template>
  <k-carousel ref="kCarousel">
    <div v-for="item in 5" :key="item" class="content">
      {{ item }}
    </div>
  </k-carousel>
  <k-button @click="jump">点击跳转第四页</k-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const kCarousel = ref();

const jump = () => {
  kCarousel.value.moveTo(4);
};
</style>
```
