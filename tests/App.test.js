import { mount, createLocalVue } from '@vue/test-utils';
import {$t} from './test.utils.js';
import VueRouter from 'vue-router';

import routes from '../src/router/routes';

import App from '../src/App.vue';
import Main from '../src/components/job-bank/Main.vue';

const localVue = createLocalVue();
const router = new VueRouter({
  mode: 'history',
  routes,
  options: { routes }
});
localVue.use(router);

const createComponent = mount(App, {
  mocks: {
    $t,
    translateRoute: jest.fn()
  },
  localVue,
  router,
  stubs: ['Header', 'Footer', 'router-view']
});


describe("App.vue", () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      const wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
  
  describe.skip('router-view', () => {
    it("renders a child component via routing", () => {
      const wrapper = createComponent;
      wrapper.vm.$router.push("/page/ontario-job-bank");
      expect(wrapper.find(Main).exists()).toBe(true);
    });
  });
});
