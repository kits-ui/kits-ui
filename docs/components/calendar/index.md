# Calendar 日历

## 基础用法

使用`v-model`双向绑定数据，firstDay 表示以星期几为开头，`onChange`返回当前变化的日历数据。

:::demo

```vue
<template>
  <div>
    <p>以星期日开头</p>
    <k-calendar v-model="value" :first-day="0" @on-change="onChange" />
    <br />
    <br />
    <p>以星期一开头</p>
    <k-calendar v-model="value2" :first-day="1" @on-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const value2 = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>
```

:::

## 插槽自定义日历数据

具名插槽为`date-cell`,可以获取每个日期的数据

:::demo

```vue
<template>
  <k-calendar :first-day="0">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '😁' : '' }}
      </p>
    </template>
  </k-calendar>
</template>
```

:::

---

# Calendar API

## 属性

| 属性名   | 说明                                                     | 类型     | 可选值        | 默认值    |
| -------- | -------------------------------------------------------- | -------- | ------------- | --------- |
| v-model  | 选中项绑定值                                             | `Date`   | ---           | 当前 Date |
| firstDay | 以星期几开头，0~6 分别表示星期日、一、二、三、四、五、六 | `number` | 0,1,2,3,4,5,6 | 0         |

### 具名插槽

| 名称      |                                                                                           说明                                                                                           | 类型     | 默认      |
| --------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------- | --------- |
| date-cell | `type` 表示该日期的所属月份，可选值有 `prev-month`、`current-month` 和 `next-month`；`isSelected` 标明该日期是否被选中；`day` 是格式化的日期，格式为 `yyyy-MM-dd`；`date` 是单元格的日期 | `Object` | 当前 Date |

## Events

| 方法名   |                                                       说明                                                       | 参数     |
| -------- | :--------------------------------------------------------------------------------------------------------------: | -------- |
| onChange | `type`表示动作类型，`selectDate`选中日期，`pre-month`、`next-month`分别为上个月和上个月;`date`为变化后返回的日期 | `Object` |
