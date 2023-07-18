<template>
  <div style="width: 500px; height: 300px; margin: auto">
    <k-carousel>
      <div v-for="item in 5" :key="item" style="background-color: beige; width: 100%; height: 100%">
        {{ item }}
      </div>
    </k-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
