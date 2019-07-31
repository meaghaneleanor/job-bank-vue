import { shallowMount } from '@vue/test-utils';
import { i18nMock } from '../../test.utils.js';

import Main from '../../../src/components/job-bank/Main.vue';

const defaultOptions = {
  mocks: {
    i18nMock,
  },
  stubs: ['JobResult'],
  computed: {
    jobsObject: jest.fn(),
  },
};

const createComponent = shallowMount(Main, defaultOptions);

describe('Main.vue', () => {
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
