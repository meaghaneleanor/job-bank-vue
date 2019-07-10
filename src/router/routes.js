import routeTranslations from '../translations/route-translations.js';

import Page404 from '../components/common/Page404.vue';
import Test from '../components/common/Test.vue';
import Header from '../components/common/Header.vue';

/*
  Because the route paths are defined in English, the search
  for the route translations will always be English, to retrieve the
  alias path in french
*/
const translatedAlias = function(path) {
  return routeTranslations['en'][path];
};

export default [
  {
    name: 'home',
    path: '/page',
    alias: translatedAlias('/page'),
    component: Test,
  },
  {
    name: 'jobs',
    path: '/page/jobs',
    alias: translatedAlias('/page/jobs'),
    component: Header
  },
  {
    name: 'page-not-found',
    path: '/*',
    component: Page404
  }
];
