<template>
  <div id="loading">
    <k-button @click="loading = !loading">{{ loading ? '隐藏' : '显示' }}</k-button>
    <div>
      <!--    <k-loading :value="loading" />-->
      <k-loading :value="loading">
        <div class="loading-ref">
          12312312331<br />
          12312312331<br />
          12312312331<br />
          12312312331<br />
          12312312331<br />
          12312312331<br />
        </div>
      </k-loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);
</script>

<style scoped lang="scss">
.loading-ref {
}
</style>
