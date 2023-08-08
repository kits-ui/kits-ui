# 鼠标右击弹窗

## 基础用法

:::demo

```vue
<template>
  <div>
    <div class="k-contextMenu-box" @contextmenu="rightClick1">组件右击方式打开菜单</div>
    <k-context-menu
      v-model:open="isOpen1"
      :event="eventVal"
      :menus="menusOtions.menus"
    ></k-context-menu>
    <k-context-menu v-model:open="isOpen3" :event="eventVal" :menus="menusOtions.menus">
    </k-context-menu>

    <!-- <div class="box" @contextmenu="($event) => contextmenu($event, menusOtions)">
      事件右击方式打开菜单
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, shallowRef } from 'vue';
// import {Top} from 'element-icon'
const menus = [
  {
    label: '返回(B)',
    tip: 'Alt+向左箭头',
    click: () => {
      window.history.back();
    },
  },
  {
    label: '点击不关闭菜单',
    tip: '不关闭菜单',
    click: () => {
      return false;
    },
  },
  {
    label: '前进(F)',
    tip: 'Alt+向右箭头',
    disabled: true,
  },
  {
    label: '重新加载(R)',
    tip: 'Ctrl+R',
    // icon: {
    //   node: SyncOutlined,
    //   option: {
    //     spin: true,
    //   },
    // },
    click: () => location.reload(),
    divided: true,
  },
  {
    label: '另存为(A)...',
    tip: 'Ctrl+S',
  },
  {
    label: '打印(P)...',
    tip: 'Ctrl+P',
    // icon: {
    //   node: Top,
    //   option: {
    //     color: 'red',
    //   },
    // },
    click: () => window.print(),
  },
  {
    label: '投射(C)...',
    divided: true,
  },
  {
    label: '发送到你的设备',
    // icon: Top,
    children: [
      {
        label: 'iPhone',
      },
      {
        label: 'iPad',
      },
      {
        label: 'Windows 11',
      },
    ],
  },
  {
    label: '为此页面创建二维码',
    divided: true,
    // icon: {
    //   node: QrcodeOutlined,
    //   option: {
    //     style: {
    //       color: 'aqua',
    //     },
    //   },
    // },
  },
  {
    label: '使用网页翻译(F)',
    divided: true,
    children: [
      { label: '翻译成繁体中文' },
      { label: '翻译成繁体中文' },
      {
        label: '百度翻译',
      },
      {
        label: '搜狗翻译',
      },
      {
        label: '有道翻译',
      },
    ],
  },
  {
    label: '截取网页(R)',
  },
  { label: '查看网页源代码(U)', tip: 'Ctrl+U' },
  { label: '检查(N)', tip: 'Ctrl+Shift+I' },
];
const isOpen1 = ref(false);
const isOpen3 = ref(false);
const eventVal = ref({});
function rightClick1(event) {
  isOpen1.value = false;
  nextTick(() => {
    eventVal.value = event;
    isOpen1.value = true;
  });
  event.preventDefault();
}

const menusOtions = shallowRef({
  menus: menus,
});
</script>
```

:::

---

# ContextMenu 属性

| 属性名         | 说明           | 类型             | 可选值                                                                                                       | 默认值 |
| -------------- | -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| menus          | 菜单列表       | `array`          | {label: '打印(P)...',tip: 'Ctrl+P', icon: {node: Top,option: {color: 'red',},},click: () => window.print(),} |        |
| menusStyle     | 菜单样式       | `Object`         | -                                                                                                            |        |
| menusItemClass | 菜单列表 class | `string`         | -                                                                                                            |        |
| position       | 偏移量         | `Object`         | `{x: 0, y 0}`                                                                                                |        |
| minWidth       | 最小宽度       | `Number, String` | 1                                                                                                            | none   |
| maxWidth       | 最大宽度       | `Number, String` | 1                                                                                                            | none   |
| zIndex         |                | `Number, String` | 1                                                                                                            | 3      |
| direction      | 弹出位置       | `String`         | right,left                                                                                                   | right  |
| open           | 打开状态       | `Boolean`        | true, false                                                                                                  | false  |
