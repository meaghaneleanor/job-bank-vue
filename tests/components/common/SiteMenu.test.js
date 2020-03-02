import { shallowMount } from '@vue/test-utils';
import { $t } from '../../test.utils.js';
import $i18n from '../../test.utils.js';

import routeTranslation from '../../../src/translations/route-translations.js';
import foundation from '../../../src/plugins/vue-foundation.js';

import SiteMenu from '../../../src/components/common/SiteMenu.vue';

const $route = {
  path: '/page/ontario-job-bank',
  fullPath: '/page/ontario-job-bank',
  query: {
    query: 'engineer'
  }
};

const defaultOptions = {
  mocks: {
    $t,
    $i18n,
    $route,
    routeTranslation,
    $router: {
      push: jest.fn(),
    },
    foundation,
    switchLocale: jest.fn()
  },
};

const createComponent = (options = defaultOptions) => shallowMount(SiteMenu, options);

describe('SiteMenu.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('.switchLocale', () => {
      let wrapper; 

      beforeAll(() => {
        wrapper = createComponent();
        wrapper.find('.ontario-site-nav__translation-link').trigger('click');
      });
      
      describe('When the language toggle is clicked once', () => {
        it('should switch the locale to french', () => {
          expect(wrapper.vm.$i18n.locale).toEqual('fr');
        });

        it('should route to the correct french path', () => {
          expect(wrapper.vm.$router.push).toHaveBeenCalledWith({path: '/fr/page/guichet-emplois-ontario', query: { query: 'engineer'}});
        });

        it('should emit the externalSearch event', () => {
          expect(wrapper.vm.$root.__emitted.externalSearch).toBeTruthy();
        });

        it('should emit the externalSearch event with the route query', () => {
          expect(wrapper.vm.$root.__emitted.externalSearch[0]).toEqual(['engineer']);
        });
      });

      describe('When the language toggle is clicked twice', () => {
        it('should switch locale back to english', () => {
          wrapper.find('.ontario-site-nav__translation-link').trigger('click');
          expect(wrapper.vm.$i18n.locale).toEqual('en');
        });
      });
    });
  });
});
