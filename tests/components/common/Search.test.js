import { shallowMount } from '@vue/test-utils';
import Search from '../../../src/components/common/Search.vue';

const createComponent = shallowMount(Search);

describe('Search.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
