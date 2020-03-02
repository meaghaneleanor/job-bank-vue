import routeTranslations from '../translations/route-translations.js';

import Main from '../components/job-bank/Main.vue';
import Page404 from '../components/common/Page404.vue';

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
    name: 'job-bank-search',
    path: '/page/ontario-job-bank',
    alias: translatedAlias('/page/ontario-job-bank'),
    component: Main
  },
  {
    name: 'job-bank-search-results',
    path: '/page/ontario-job-bank/search-results',
    alias: translatedAlias('/page/ontario-job-bank/search-results'),
    component: Main,
  },
  {
    name: 'page-not-found',
    path: '/*',
    component: Page404
  }
];
