import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../pages/Experience.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;