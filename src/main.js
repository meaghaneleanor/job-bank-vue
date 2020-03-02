import Vue from 'vue';
import App from './App.vue';
import { i18n } from './plugins/i18n.js';
import { foundation } from './plugins/vue-foundation';
import router from './router/index.js';
import axios from 'axios';

import './assets/sass/main.css';

Vue.prototype.$axios = axios;

new Vue({
  i18n,
  foundation,
  router,
  render: h => h(App),
}).$mount('#app');
