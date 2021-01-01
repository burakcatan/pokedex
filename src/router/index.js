import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Pokedex from '@/views/Pokedex.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
