import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

import './assets/main.css';
import 'quasar/src/css/index.sass';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const doggyApp = createApp(App).use(Quasar, quasarUserOptions);

doggyApp.use(store);
doggyApp.use(router);

doggyApp.mount('#app');
