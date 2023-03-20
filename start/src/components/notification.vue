<template>
  <div class="">
    <k-button>我是按钮66666666</k-button>
    <k-notification>
      <template #default><k-button type="insert">自定义按钮</k-button></template>
    </k-notification>
    <k-notification body="从右到左" dir="rtl">
      <template #default><k-button type="insert">从右到左</k-button></template>
    </k-notification>
    <k-notification body="从左到右" dir="ltr">
      <template #default><k-button type="insert">从左到右</k-button></template>
    </k-notification>
    <k-notification dir="ltr"></k-notification>
  </div>
</template>
