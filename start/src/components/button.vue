<template>
  <div>
    <k-button>我是按钮66666666</k-button>
    <k-button color="#cf3232">我是按钮66666666</k-button>
    <k-button
      color="linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)"
      type="insert"
      direction="right"
    >
      我是按钮66666667</k-button
    >
    <k-button color="#22c55e" type="insert" direction="left">
      <edit />
    </k-button>
    <k-button>
      <edit />
    </k-button>
    <k-button color="blue"> 666 </k-button>
  </div>
  <div style="margin-bottom: 20px">
    <k-button disabled size="large">large</k-button>
    <k-button disabled size="default">default</k-button>
    <k-button disabled size="small">small</k-button>
    <k-button type="insert" direction="left" size="large">large</k-button>
    <k-button type="insert" direction="left" size="default">default</k-button>
    <k-button type="insert" direction="left" size="small">small</k-button>
    <k-button type="line" size="large">large</k-button>
    <k-button type="line" size="default">default</k-button>
    <k-button type="line" size="small">small</k-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
