<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const backToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="appContent">
    <router-view />
  </div>
  <div v-if="route.name !== 'home'" class="goHome" title="GoHome" @click="backToHome">GoHome</div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
pre {
  white-space: pre;
}
.goHome {
  padding: 1px 15px 1px 5px;
  position: fixed;
  top: 25px;
  left: 25px;
  cursor: pointer;
  // background-color: red;
  clip-path: polygon(0px 0px, 80% 0px, 100% 50%, 80% 100%, 0px 100%);
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    content: attr(title);
    background-color: #34c7b3af;
    transition: all 0.5s;
  }
  &:hover {
    &::after {
      left: 0;
      color: #fff;
    }
    color: transparent;
  }
}

.appContent {
}
</style>
