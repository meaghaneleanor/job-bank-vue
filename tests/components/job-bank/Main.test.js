import { shallowMount } from '@vue/test-utils';
import $i18n from '../../test.utils.js';

import Main from '../../../src/components/job-bank/Main.vue';

const defaultOptions = {
  mocks: {
    $i18n,
    jobsObject: {}
  },
  stubs: ['JobResult'],
};

const createComponent = (options = defaultOptions) => shallowMount(Main, options);

describe('Main.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createComponent();
  });

  describe('snapshot', () => {
    it('should display the expected html', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('computed', () => {
    describe('.jobsObject', () => {
      let options = defaultOptions;
      options.methods = {
        getJobs: jest.fn().mockImplementation((lang) => lang)
      };

      describe('When the locale is changed', () => {
        it('should update the computed return', () => {
          $i18n.locale = 'blah';
          expect(options.methods.getJobs).toBeCalledWith($i18n.locale);
          expect(wrapper.vm.jobsObject).toEqual('blah');
        });
      });
    });
  });
});
