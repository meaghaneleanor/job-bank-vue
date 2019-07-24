import { shallowMount } from '@vue/test-utils';
import messages from '../../../src/translations';
import Footer from '../../../src/components/common/Footer.vue';

const createComponent = shallowMount(Footer, {
  mocks: {
    $t: () => {},
    $i18n: {
      locale: 'en',
      messages
    }
  }
});

describe('Footer.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
