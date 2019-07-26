import { shallowMount } from '@vue/test-utils';
import { $t, i18nMock } from '../../test.utils.js';

import Footer from '../../../src/components/common/Footer.vue';

const defaultOptions = {
  mocks: {
    $t, 
    i18nMock
  }
};

const createComponent = shallowMount(Footer, defaultOptions);

describe('Footer.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
