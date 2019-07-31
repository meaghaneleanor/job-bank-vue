import { shallowMount } from '@vue/test-utils';
import { $t, i18nMock } from '../../test.utils.js';

import NewFlag from '../../../src/components/job-bank/NewFlag.vue';

const defaultOptions = {
  mocks: {
    $t, 
    i18nMock,
    checkTimeDifference: jest.fn()
  },
  propsData:{
    date: '2019-07-10T10:59:00Z'
  }
};

const createComponent = shallowMount(NewFlag, defaultOptions);

describe('NewFlag.vue', () => {
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
    describe('.checkTimeDifference', () => {
      describe('if the job was posted more than 3 days ago', () => {
        let date = '2019-07-10T10:59:00Z';

        it('should return false', () => {
          expect(wrapper.vm.checkTimeDifference(date)).toEqual(false);
        });
      });

      describe('if the job was posted within 3 days from the current date', () => {
        let date = new Date();

        it('should return false', () => {
          expect(wrapper.vm.checkTimeDifference(date)).toEqual(true);
        });
      });
    });
  });
});
