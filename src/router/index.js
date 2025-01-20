import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/MyHomePage.vue';
import CartPage from '@/views/MyCartPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;