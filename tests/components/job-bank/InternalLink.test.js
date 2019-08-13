import { shallowMount } from '@vue/test-utils';

import InternalLink from '../../../src/components/job-bank/InternalLink.vue';

const defaultOptions = {
  propsData: {
    url: '/page/ontario-job-bank',
    linkText: 'Job Link',
  },
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
