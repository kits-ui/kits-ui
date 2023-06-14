<template>
  <div>
    <k-button type="line" @click="dialogVisible1 = true">点击弹窗</k-button>
    <k-button type="line" @click="dialogVisible2 = true">点击弹窗</k-button>
    <k-dialog v-model="dialogVisible1" title="默认弹窗1">
      <div>
        <p>测试1</p>
        <p>测试1测试1</p>
        <p>测试1测试1测试1</p>
      </div>
    </k-dialog>
    <k-dialog v-model="dialogVisible2" title="默认弹窗2">
      <div>
        <p>测试1</p>
        <p>测试1测试1</p>
        <p>测试1测试1测试1</p>
      </div>
      <template #footer>
        <k-button type="line" @click="dialogVisible2 = false">取消</k-button>
        <k-button @click="dialogVisible2 = false">确定</k-button>
      </template>
    </k-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible1 = ref<boolean>(false);
const dialogVisible2 = ref<boolean>(false);
</script>

<style scoped></style>
