
import { createRouter, createWebHistory } from 'vue-router';


import Home from '@/components/Home.vue';
import Products from '@/components/Products.vue';

// Define the routes for your application
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/',
    redirect: '/home',
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
