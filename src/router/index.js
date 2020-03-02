import Vue from 'vue';
import VueRouter from 'vue-router';
import { i18n } from '../plugins/i18n';
import routes from './routes';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  routes,
});

export const localeSetter = (to, from, next) => {
  //set default locale to english
  i18n.locale = 'en';
  
  const langPrefix = to.fullPath.substring(0,4);

  if (langPrefix === '/fr/') {
    //if route URL begins with '/fr/'
    i18n.locale = 'fr';
  }

  next();
};

Router.beforeEach(localeSetter);

export default Router;
