import { shallowMount } from '@vue/test-utils';
import Page404 from '../../../src/components/common/Page404.vue';

const createComponent = shallowMount(Page404);

describe('Page404.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
