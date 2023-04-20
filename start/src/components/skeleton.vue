<template>
  <div>
    <k-skeleton :is-animated="true"></k-skeleton>
    <br />
    <br />
    <k-skeleton type="img" height="300px" :is-animated="true">
      <img
        src="https://xiaolongosscdn.liam0418.com/myblog/images/37c3388f9af3eec6492b6831591fd63c.jpg"
      />
    </k-skeleton>

    <br />
    <br />
    <k-skeleton height="300px" :is-animated="true" radius="100%"></k-skeleton>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
