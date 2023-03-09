import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const moduleFiles = import.meta.glob('../components/*.vue');
console.log(moduleFiles, 36669999);
const routes: Array<RouteRecordRaw> = [
  {
    name: 'button',
    path: '/button',
    component: moduleFiles['../components/button.vue'],
  },
  {
    name: 'image',
    path: '/image',
    component: moduleFiles['../components/image.vue'],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
