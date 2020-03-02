import { shallowMount } from '@vue/test-utils';
import { $t, i18nMock } from '../../test.utils.js';

import Header from '../../../src/components/common/Header.vue';

const defaultOptions = {
  mocks: {
    $t, 
    i18nMock
  }
};

const createComponent = shallowMount(Header, defaultOptions);

describe('Header.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
