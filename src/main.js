import { createApp } from 'vue';  // Use createApp for Vue 3
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
