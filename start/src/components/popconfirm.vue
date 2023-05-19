<template>
  <div>
    <k-popconfirm position="bottom" theme="light" title="是否确认要进行后续操作?" :width="200">
      <template #reference>
        <k-button type="insert"> 点击确认</k-button>
      </template>
    </k-popconfirm>
    <k-popconfirm
      position="bottom"
      cancelText="close"
      confirmText="ok"
      @cancel="cancel"
      @confirm="confirm"
      title="是否确认要进行后续操作?"
      :width="200"
    >
      <template #reference>
        <k-button type="insert">click ok</k-button>
      </template>
    </k-popconfirm>
  </div>
</template>

<script setup lang="ts">
const cancel = () => {
  console.log('cancelcancelcancelcancel');
};
const confirm = () => {
  console.log('confirmconfirmconfirmconfirm');
};
</script>

<style scoped></style>
