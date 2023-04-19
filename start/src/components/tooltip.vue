<template>
  <div class="index1" style="width: 500px; overflow-x: scroll">
    <div style="width: 1500px; display: flex; justify-content: center">
      <k-tooltip content="我是span-左边提示" position="left">
        <k-button type="insert" direction="left">我是span</k-button>
      </k-tooltip>
      <k-tooltip content="我是span-上边提示1" position="top">
        <k-button>我是span1</k-button>
      </k-tooltip>
      <k-tooltip
        content="我是span-右边提示22我是span-下边提示萨芬大师傅赶得上范德萨我是span-的萨芬大师傅赶得上范德萨"
        position="right"
      >
        <k-button>我是span2</k-button>
      </k-tooltip>
      <k-tooltip
        content="我是span-下边提示3fdsfdsfdsfdsfds的萨芬大师傅赶得上范德萨"
        position="bottom"
      >
        <k-button>我是span3</k-button>
      </k-tooltip>
      <k-tooltip content="我是span-上面提示44">
        <k-button>我是span4</k-button>
      </k-tooltip>
      <k-tooltip content="我是span-上面提示55">
        <k-button>我是span5</k-button>
      </k-tooltip>
      <k-tooltip content="我是span-上面提示66">
        <k-button>我是span6</k-button>
      </k-tooltip>
    </div>
  </div>
  <div class="index2" style="width: 200px; height: 200px; overflow-y: scroll; margin: 50px auto">
    <div style="width: 150px; display: flex; flex-direction: column; justify-content: center">
      <k-tooltip :content="`我是span-上面提示${i}`" v-for="(item, i) in 16" :key="i">
        <k-button>我是span{{ i }}</k-button>
      </k-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
