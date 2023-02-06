import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

import './assets/main.css';

const doggyApp = createApp(App);

doggyApp.use(store);
doggyApp.use(router);

doggyApp.mount('#app');
