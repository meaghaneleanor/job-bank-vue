import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock GET request for all english jobs
mock.onGet('/en/search').reply(200, {
  "total": 4,
  "jobs": [
    {
      "jobs_id": "30938491",
      "title": "Scrum Master",
      "date_posted": "2019-07-30T10:59:00Z",
      "city_name": "Port Perry",
      "url": "/job-detail-page",
      "salary": "$50K per year",
      "employer_name": "Tech Company X"
    },
    {
      "jobs_id": "30938492",
      "title": "Technical Writer",
      "date_posted": "2019-07-10T10:59:00Z",
      "city_name": "Toronto",
      "url": "/job-detail-page",
      "salary": "24.00 hourly",
      "employer_name": "TechWorld 2020 🔥"
    },
    {
      "jobs_id": "30938493",
      "title": "Developer",
      "date_posted": "2019-08-08T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100K per year",
      "employer_name": "ODS"
    },
    {
      "jobs_id": "30938494",
      "title": "Product Manager",
      "date_posted": "2019-08-07T10:59:00Z",
      "city_name": "Ottawa",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100 hourly",
      "employer_name": "Canadian Digital Service"
    }
  ]
});

mock.onGet('/fr/recherche').reply(200, {
  "total": 4,
  "jobs": [
    {
      "jobs_id": "30938491",
      "title": "cuisineur",
      "date_posted": "2019-07-30T10:59:00Z",
      "city_name": "Port Perry",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "$24.00 par heure",
      "employer_name": "Restaurant de Famille Hyland"
    },
    {
      "jobs_id": "30938492",
      "title": "laveur",
      "date_posted": "2019-07-10T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "24.00 par heure",
      "employer_name": "restaurant de vache"
    },
    {
      "jobs_id": "30938493",
      "title": "Développeur",
      "date_posted": "2019-08-08T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100K par année",
      "employer_name": "ODS"
    },
    {
      "jobs_id": "30938494",
      "title": "Directeur de produit",
      "date_posted": "2019-08-07T10:59:00Z",
      "city_name": "Ottawa",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100 hourly",
      "employer_name": "Service numérique canadien"
    }
  ]
});

mock.onGet('/en/search?query=technology').reply(200, {
  "total": 2,
  "jobs": [
    {
      "jobs_id": "30938493",
      "title": "Developer",
      "date_posted": "2019-08-08T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100K per year",
      "employer_name": "ODS"
    },
    {
      "jobs_id": "30938494",
      "title": "Product Manager",
      "date_posted": "2019-08-07T10:59:00Z",
      "city_name": "Ottawa",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100 hourly",
      "employer_name": "Canadian Digital Service"
    }
  ]
});

mock.onGet('/fr/recherche?query=technology').reply(200, {
  "total": 2,
  "jobs": [
    {
      "jobs_id": "30938493",
      "title": "Développeur",
      "date_posted": "2019-08-08T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100K par année",
      "employer_name": "ODS"
    },
    {
      "jobs_id": "30938494",
      "title": "Directeur de produit",
      "date_posted": "2019-08-07T10:59:00Z",
      "city_name": "Ottawa",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "100 hourly",
      "employer_name": "Service numérique canadien"
    }
  ]
});
