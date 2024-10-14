// No need to import Vue directly in Vue 3
import { createRouter, createWebHistory } from 'vue-router'; // Correct Vue Router 4 imports
import Home from '@/components/Home.vue';
import Products from '@/components/Products.vue';

// Define routes
const routes = [
  { path: '/home', component: Home },
  { path: '/products', component: Products },
];

// Create the router instance with createWebHistory
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
