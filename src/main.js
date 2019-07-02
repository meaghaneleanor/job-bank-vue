import Vue from 'vue';
import App from './App.vue';
import { i18n } from './plugins/i18n.js';
import { foundation } from './plugins/vue-foundation';

Vue.config.productionTip = false;
import './assets/sass/main.css';

new Vue({
  i18n,
  foundation,
  render: h => h(App),
}).$mount('#app');
