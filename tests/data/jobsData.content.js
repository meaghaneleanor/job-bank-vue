let enJobsResponse = {
  "total": 4,
  "jobs": [
    {
      "jobs_id": "30938491",
      "title": "chef",
      "date_posted": "2019-07-30T10:59:00Z",
      "city_name": "Port Perry",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "$24.00 hourly",
      "employer_name": "Hyland Family Restaurant"
    },
    {
      "jobs_id": "30938492",
      "title": "dishwasher",
      "date_posted": "2019-07-10T10:59:00Z",
      "city_name": "Toronto",
      "url": "https://www.jobbank.gc.ca/jobsearch/jobposting/30938491",
      "salary": "24.00 hourly",
      "employer_name": "Cows Restaurant"
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
};

let frJobsResponse = {
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
};

let emptyJobsResponse = {
  total: 0,
  jobs: [],
};

let failedServerResponse = {
  total: 0
};

export { enJobsResponse, frJobsResponse, emptyJobsResponse, failedServerResponse };
