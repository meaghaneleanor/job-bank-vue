import { shallowMount } from '@vue/test-utils';
import $i18n from '../../test.utils.js';

import { enJobsResponse, emptyJobsResponse, failedServerResponse } from '../../data/jobsData.content.js';

import Search from '../../../src/components/job-bank/Search.vue';

const $route = {
  path: '/page/ontario-job-bank/search-results',
  fullPath: '/fr/page/guichet-emplois-ontario/resultats-de-recherche',
  query: {
    query: 'developer'
  }
};

const $axios = { get:jest.fn(() => Promise.resolve({ data: enJobsResponse }))};

const defaultOptions = {
  mocks: {
    $i18n,
    $route,
    $router: {
      push: jest.fn(),
    },
    $axios,
  }
};

const createComponent = (options = defaultOptions) => shallowMount(Search, options);

describe('Search.vue', () => {
  // eslint-disable-next-line no-unused-vars
  let wrapper;
  
  describe('snapshot', () => {
    it('should display the expected html', () => {
      wrapper = createComponent(defaultOptions);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('lifecycle hooks', () => {
    describe('beforeMount', () => {
      describe('if there is no search term defined and the route contains a query', () => {
        it('should update the search term to be the route query', () => {
          wrapper = createComponent(defaultOptions);
          expect(wrapper.vm.searchTerm).toEqual('developer');
        });
      });

      describe('if there is no search term defined and the route does not contain a query', () => {
        it('returns an empty string as the search term', () => {
          let options = { ...defaultOptions };
          options.mocks.$route.query.query = '';
          wrapper = createComponent(options);
          
          expect(wrapper.vm.searchTerm).toEqual('');
        });
      });
    });

    describe('mounted', () => {
      describe('when the root emits an externalSearch event', () => {   
        let searchForJobs = jest.spyOn(Search.methods, 'searchForJobs');
        
        describe('if there is a searchTerm defined', () => {
          it('should call the searchForJobs function with the correct searchTerm', () => {
            wrapper = createComponent(defaultOptions);
            wrapper.vm.$root.$emit('externalSearch', 'Meteorologist');

            expect(searchForJobs).toHaveBeenCalled();
            expect(searchForJobs).toHaveBeenCalledWith('Meteorologist');
          });
        });
        
        describe('if there is no searchTerm defined', () => {
          it('should call the searchForJobs function with an empty string', () => {
            wrapper = createComponent(defaultOptions);
            wrapper.vm.$root.$emit('externalSearch', '');

            expect(searchForJobs).toHaveBeenCalled();
            expect(searchForJobs).toHaveBeenCalledWith('');
          });
        });
      });
    });
  });

  describe('methods', () => {
    describe('.formatRoute', () => {
      describe('if the locale is english', () => {  
        it('should return an object with the correct english path and query', () => {
          wrapper = createComponent(defaultOptions);
          let expectedResult = { path: '/page/ontario-job-bank/search-results', query: { query: wrapper.vm.searchTerm }};

          expect(wrapper.vm.formatRoute(wrapper.vm.searchTerm)).toEqual(expectedResult);
        });
      });

      describe('if the locale is french', () => {
        it('should return an object with the correct french path and query', () => {
          let options = { ...defaultOptions };
          options.mocks.$i18n.locale = 'fr';
          wrapper = createComponent(options);

          let expectedResult = { path: '/fr/page/guichet-emplois-ontario/resultats-de-recherche', query: { query: wrapper.vm.searchTerm }};
    
          expect(wrapper.vm.formatRoute(wrapper.vm.searchTerm)).toEqual(expectedResult);
        });
      });
    });

    describe('.searchForJobs', () => {
      describe('if the search term is not an empty string', () => {
        let formatRoute = jest.spyOn(Search.methods, 'formatRoute');

        it('should call the formatRoute function with the searchTerm', () => {
          let options = { ...defaultOptions };
          options.mocks.$route.query.query = 'dentist';
          options.mocks.$i18n.locale = 'en';
          wrapper = createComponent(options);

          expect(formatRoute).toHaveBeenCalled();
          expect(formatRoute).toHaveBeenCalledWith('dentist');
        });

        it('should update the route with the result from formatRoute', () => {
          expect(wrapper.vm.$router.push).toHaveBeenCalledWith({path: '/page/ontario-job-bank/search-results', query: { query: 'dentist'}});
        });
      });

      describe('axios call', () => {
        describe('when the get response is successful and there are job results', () => {
          beforeEach(() => {
            let options = { ...defaultOptions };
            options.mocks.$i18n.locale = 'en';
            wrapper = createComponent(options);
          });

          it('should have called $axios.get with expected argument', () => {
            let baseURL = '/en/search';
            let endpoint = `${baseURL}?query=${wrapper.vm.searchTerm}`;

            expect(wrapper.vm.$axios.get).toHaveBeenCalledWith(endpoint);
          });
        });

        it('should have emitted a searchCompleted event with the result object', () => {
          expect(wrapper.emitted().searchCompleted).toBeTruthy();
          expect(wrapper.emitted().searchCompleted[0]).toEqual([enJobsResponse]);
        });
      });

      describe('when the get response is successful and there are no job results', () => {
        beforeEach(() => {
          let options = { ...defaultOptions };
          options.mocks.$axios = { get:jest.fn(() => Promise.resolve({ data: emptyJobsResponse }))};
          wrapper = createComponent(options);
        });
        
        it('should have emitted a searchCompleted event with an empty result object', () => {
          expect(wrapper.emitted().searchCompleted).toBeTruthy();
          expect(wrapper.emitted().searchCompleted[0]).toEqual([emptyJobsResponse]);
        });
      });

      describe('when the get response is unsuccessful', () => {
        beforeEach(() => {
          let options = { ...defaultOptions };
          options.mocks.$axios = { get:jest.fn(() => Promise.resolve({ data: failedServerResponse }))};
          wrapper = createComponent(options);
        });

        it('should have emitted a searchCompleted event with an empty result object', () => {
          expect(wrapper.emitted().searchCompleted).toBeTruthy();
          expect(wrapper.emitted().searchCompleted[0]).toEqual([failedServerResponse]);
        });
      });
    });

    describe('.formatSearchTerm', () => {
      describe('if the search term contains spaces', () => {
        it('should encode the search term spaces', () => {
          wrapper = createComponent(defaultOptions);
          let searchTerm = 'Developer in Toronto';
          expect(wrapper.vm.formatSearchTerm(searchTerm)).toEqual('Developer%20in%20Toronto');
        });
      });

      describe('if the search term does not contain spaces', () => {
        it('should return the searchTerm as is', () => {
          wrapper = createComponent(defaultOptions);
          let searchTerm = 'CEO';
          expect(wrapper.vm.formatSearchTerm(searchTerm)).toEqual(searchTerm);
        });
      });
    });
  });
});
