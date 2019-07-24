import { shallowMount } from '@vue/test-utils';

import messages from '../../../src/translations';
import routeTranslation from '../../../src/translations/route-translations.js';
import foundation from '../../../src/plugins/vue-foundation.js';

import SiteMenu from '../../../src/components/common/SiteMenu.vue';

const $route = {
  path: '/page',
  fullPath: '/page'
};

const createComponent = shallowMount(SiteMenu, {
  mocks: {
    $t: () => {},
    $i18n: {
      locale: 'en',
      messages
    },
    $route,
    routeTranslation,
    $router: {
      push: jest.fn(),
    },
    foundation,
    switchLocale: jest.fn()
  },
});

describe('Header.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('.switchLocale', () => {
      let wrapper; 

      beforeAll(() => {
        wrapper = createComponent;
        wrapper.find('.ontario-site-nav__translation-link').trigger('click');
      });

      it('should switch the locale when the language toggle is clicked', () => {
        expect(wrapper.vm.$i18n.locale).toEqual('fr');
      });

      it('should route to the correct path', () => {
        expect(wrapper.vm.$router.push).toHaveBeenCalledWith({path: '/fr/page'});
      });

      it('should switch locale again if clicked twice', () => {
        wrapper.find('.ontario-site-nav__translation-link').trigger('click');
        expect(wrapper.vm.$i18n.locale).toEqual('en');
      });
    });
  });
});
