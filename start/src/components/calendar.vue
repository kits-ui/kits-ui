<template>
  <!-- <div style="width: 500px; height: 400px; background-color: black;"> -->
  <k-calendar v-model="value" :first-day="1" :options="options2" @on-change="onChange"></k-calendar>
  <k-calendar :first-day="0" :options="options1">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '😁' : '' }}
      </p>
    </template>
  </k-calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());

const options2 = {
  width: '500px',
  height: '400px',
};
const options1 = {
  width: '800px',
  height: '600px',
};
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
</script>
