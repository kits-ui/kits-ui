<template>
  <div id="home">
    <nav class="nav">kits-ui</nav>
    <div class="content">
      <template v-for="item in routeList" :key="item.name">
        <div v-if="item.name !== 'home'" class="item" @click="jumpTo(item)">
          {{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routeList = ref<any>([]);

onMounted(() => {
  console.log(666);
  routeList.value = router.options.routes;
  console.log(router.options.routes, 52222);
});

const jumpTo = (value: any) => {
  router.push({ name: value.name });
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  height: auto;
  width: 100%;
  .nav {
    font-size: 10em;
    font-weight: 700;
    font-family: math;
    color: transparent;
    background-image: linear-gradient(135deg, #c8df8bf8 10%, #2bc0ac 100%);
    background-clip: text;
    -webkit-background-clip: text;
  }
  .content {
    max-width: 1280px;
    min-width: 755px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    width: 100%;
    .item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 120px;
      background: red;
      border-radius: 15px;
      background-color: #3dcfbc3f;
      transition: all 0.3s;
      font-size: 26px;
      font-family: math;
      font-weight: 700;
      text-transform: capitalize;
      cursor: pointer;
      overflow: hidden;
      &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -80px;
        margin: auto;
        transform: rotate(30deg);
        width: 45px;
        height: 260px;
        content: '';
        background-color: #ffffff6c;
      }
      &:hover {
        box-shadow: 0 0 10px 1px #6dcabc;
        font-size: 30px;
        &::after {
          transition: all 0.5s;
          left: 270px;
        }
      }
    }
  }
}
</style>
