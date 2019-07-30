import { shallowMount } from '@vue/test-utils';

import JobResult from '../../../src/components/job-bank/JobResult.vue';


const createComponent = shallowMount(JobResult);

describe('JobResult.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
