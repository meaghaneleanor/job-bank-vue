import { shallowMount } from '@vue/test-utils';
import messages from '../../../src/translations';
import Header from '../../../src/components/common/Header.vue';

const createComponent = shallowMount(Header, {
  mocks: {
    $t: () => {},
    $i18n: {
      locale: 'en',
      messages
    }
  }
});

describe('Header.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
