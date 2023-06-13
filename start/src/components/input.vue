<template>
  <div style="margin: auto; width: 200px">
    <k-input v-model="value11" type="email" @input="oninput" />
    <div class="show">{{ inputValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value11 = ref<any>('');
const inputValue = ref<string>('');

const oninput = (e) => {
  inputValue.value = e.target.value;
};
</script>

<style scoped>
.show {
  position: absolute;
  height: 25px;
  background-color: aquamarine;
  margin-top: 20px;
}
</style>
