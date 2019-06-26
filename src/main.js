import Vue from 'vue';
import App from './App.vue';
import { foundation } from './plugins/vue-foundation';

Vue.config.productionTip = false;
import './assets/sass/main.css';

new Vue({
  foundation,
  render: h => h(App),
}).$mount('#app');
