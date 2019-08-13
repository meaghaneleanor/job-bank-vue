import {shallowMount, createLocalVue} from '@vue/test-utils';
import {$t, i18nMock} from '../../test.utils.js';
import VueRouter from 'vue-router';

import routes from '../../../src/router/routes';

import InternalLink from '../../../src/components/job-bank/InternalLink.vue';

const localVue = createLocalVue();
const router = new VueRouter({
  mode: 'history',
  routes,
  options: { routes }
});
localVue.use(router);

const defaultOptions = {
  propsData: {
    url: '/page/jobs',
    linkText: 'Job Link',
  },
  mocks: {
    $t,
    i18nMock
  },
  localVue,
  router,
  stubs: ['router-link']
};

const createComponent = (options=defaultOptions) => shallowMount(InternalLink, options);

describe('InternalLink.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
