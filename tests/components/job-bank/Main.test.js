import { shallowMount } from '@vue/test-utils';

import { $t } from '../../test.utils';
import $i18n from '../../test.utils.js';
import { enJobsResponse, emptyJobsResponse, failedServerResponse } from '../../data/jobsData.content.js';

import Main from '../../../src/components/job-bank/Main.vue';
import Search from '../../../src/components/job-bank/Search.vue';
import JobResult from '../../../src/components/job-bank/JobResult.vue';

const $route = {
  path: '/page/ontario-job-bank',
  fullPath: '/page/ontario-job-bank',
  query: {
    query: 'doctor'
  }
};

const $axios = { get:jest.fn(() => Promise.resolve({ data: enJobsResponse }))};

const defaultOptions = {
  mocks: {
    $t,
    $i18n,
    $route,
    $router: {
      push: jest.fn(),
    },
    $axios
  },
  stubs: {
    'Search': Search,
    'JobResult': JobResult
  }
};

const createComponent = (options = defaultOptions) => shallowMount(Main, options);

describe('Main.vue', () => {
  let wrapper;

  describe('snapshot', () => {
    it('should display the expected html', () => {
      wrapper = createComponent(defaultOptions);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('emitted events', () => {
    describe('searchCompleted', () => {
      describe('when the searchCompleted event is emitted from the search component', () => {
        let updateJobsResult = jest.spyOn(Main.methods, 'updateJobsResult');

        it('should call the updateJobsResult method with the correct value', () => {
          wrapper = createComponent(defaultOptions);
          wrapper.vm.$root.$emit('searchCompleted');

          expect(updateJobsResult).toHaveBeenCalled();
          expect(updateJobsResult).toHaveBeenCalledWith(enJobsResponse);
        });
      });
    });   
  });

  describe('methods', () => {
    describe('.updateJobsResult', () => {
      describe('when the axios call returns a response with jobs data', () => {
        beforeEach(() => {
          wrapper = createComponent(defaultOptions);
        });

        it('should update the jobsResult property with the jobs data', () => {
          expect(wrapper.vm.jobsResult).toEqual(enJobsResponse);
        });

        it('should display the JobResult component', () => {
          expect(wrapper.find(JobResult).exists()).toBe(true);
        });
      });

      describe('when the axios call returns a response with no jobs data', () => {
        beforeEach(() => {
          let options = { ...defaultOptions };
          options.mocks.$axios = { get:jest.fn(() => Promise.resolve({ data: emptyJobsResponse }))};
          wrapper = createComponent(options);
        });

        it('should update the jobsResult property with the empty jobs data', () => {
          expect(wrapper.vm.jobsResult).toEqual(emptyJobsResponse);
        });

        it('should not display the JobResult component', () => {
          expect(wrapper.find(JobResult).exists()).toBe(false);
        });
      });

      describe('when the axios call returns an error', () => {
        beforeEach(() => {
          const options = {...defaultOptions};
          options.mocks.$axios = { get:jest.fn(() => Promise.resolve({ data: failedServerResponse }))};
          wrapper = createComponent(options);
        });

        it('should update the jobsResult property with the error data', () => {
          expect(wrapper.vm.jobsResult).toEqual(failedServerResponse);
        });

        it('should not display the JobResult component', () => {
          expect(wrapper.find(JobResult).exists()).toBe(false);
        });
      });
    });
  });

  describe.skip('watchers', () => {
    describe('$route', () => {
      describe('when the route changes', () => {
        it('should emit the externalSearch event to the $root with the route query', () => {
          wrapper = createComponent(defaultOptions);
          let rootSpy = jest.spyOn(wrapper.vm.$root, '$emit');

          wrapper.vm.$router.push({ path: wrapper.vm.$route.path, query: { query: 'teacher' }});

          expect(rootSpy).toHaveBeenCalled();
          expect(rootSpy).toHaveBeenCalledWith('bloop');
        });
      });
    });
  });
});
