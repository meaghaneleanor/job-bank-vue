import { shallowMount } from '@vue/test-utils';
import { $t, i18nMock } from '../../test.utils.js';

import NewFlag from '../../../src/components/job-bank/NewFlag.vue';

const defaultOptions = {
  mocks: {
    $t, 
    i18nMock,
    
  },
  propsData:{
    date: '2019-07-10T10:59:00Z'
  }
};

const createComponent = (options = defaultOptions) => shallowMount(NewFlag, options);

describe('NewFlag.vue', () => {
  let wrapper;
  
  describe('snapshot', () => {
    it('should display the expected html', () => {
      wrapper = createComponent();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('.checkTimeDifference', () => {
      describe('if the job was posted more than 3 days ago', () => {
        let date = '2019-07-10T10:59:00Z';

        it('should return false', () => {
          expect(wrapper.vm.checkTimeDifference(date)).toEqual(false);
        });
      });

      describe('if the job was posted within 3 days from the current date', () => {
        it('should return false', () => {
          expect(wrapper.vm.checkTimeDifference(Date.now())).toEqual(true);
        });
      });
    });
  });
});
