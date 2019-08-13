import { shallowMount } from '@vue/test-utils';
import { $t } from '../../test.utils.js';
import $i18n from '../../test.utils.js';

import JobResult from '../../../src/components/job-bank/JobResult.vue';

const defaultOptions = {
  mocks: {
    $t, 
    $i18n
  },
  propsData:{
    job: {
      title: 'Cool Guy',
      company: 'ODS',
      city: 'Toronto',
      salary: '$1000 per hour',
      url: 'www.ontario.ca',
      date_posted: '2019-07-10T10:59:00Z'
    }
  },
  stubs: ['NewFlag']
};

const createComponent = shallowMount(JobResult, defaultOptions);

describe('JobResult.vue', () => {
  // eslint-disable-next-line no-unused-vars
  let wrapper;
      
  beforeEach(() => {
    wrapper = createComponent;
  });
  
  describe('snapshot', () => {
    it('should display the expected html', () => {
      let wrapper = createComponent;
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('.addSalaryString', () => {
      describe('When the salary data contains a $', () => {
        it('should return false', () => {
          let mock = '$100 per hour';
          let salaryData = wrapper.vm.addSalaryString(mock);
          expect(salaryData).toEqual(false);
        });
      });

      describe('When the salary data does not contain a $', () => {
        it('should return true', () => {
          let mock = '100 per day (to be negotiated)';
          let salaryData = wrapper.vm.addSalaryString(mock);
          expect(salaryData).toEqual(true);
        });
      });
    });
  });
});
