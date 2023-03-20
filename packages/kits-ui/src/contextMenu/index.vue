<template>
  <div>
    <!-- <div class="box" v-menus:left="menusOtions">指令方式左击打开菜单</div>
    <div class="box" v-menus:right="menusOtions">指令方式右击打开菜单</div>
    <div class="box" v-menus:all="menusOtions">指令方式左右击打开菜单</div>
    <div class="box" v-menus:all="menusStyleOtions">设置背景打开菜单</div>
    <div class="box" v-menus:all="menusItemClassOtions">设置背景且指定菜单项class打开菜单</div>
    <div class="box" v-menus:all="menusMinWidthOtions">设置最小宽度打开菜单</div>
    <div class="box" v-menus:all="menusMaxWidthOtions">设置最大宽度打开菜单</div>
    <div class="box" @contextmenu="($event) => $menusEvent($event, menusOtions)">
      事件右击方式打开菜单
    </div>
    <div class="box" @contextmenu="rightClick1">组件右击方式打开菜单</div>
    <vue3-menus v-model:open="isOpen1" :event="eventVal" :menus="menusOtions.menus"></vue3-menus>
    <div class="box" @contextmenu="rightClick2">组件右击默认插槽完全自定义样式方打开菜单</div>
    <vue3-menus v-model:open="isOpen2" :event="eventVal" :menus="menusOtions.menus">
      <template #default="{ item }">
        <div
          :class="[
            'my-menus-item',
            item.item.disabled ? 'my-menus-item-disabled' : 'my-menus-item-available',
          ]"
        >
          <div style="color: red; margin-right: 5px">完全自定义</div>
          <div>{{ item.item.label }}</div>
          <div v-if="item.item.children">▶</div>
        </div>
      </template>
    </vue3-menus>
    <div class="box" @contextmenu="rightClick3">组件右击添加label插槽方打开菜单</div>
    <vue3-menus v-model:open="isOpen3" :event="eventVal" :menus="menusOtions.menus">
      <template #label="{ item }">label插槽:{{ item.item.label }}</template>
    </vue3-menus> -->
  </div>
</template>
