import { english, french } from './data.js';

export default {
  methods: {
    getJobs: function(locale) {
      let jobObject = locale === 'en' ? english : french;
      let jobsArray = jobObject.jobs;

      const returnedFields = jobsArray.map((job) => {
        return {
          id: job.source.jobs_id,
          title: job.source.title,
          company: job.source.employer_name,
          city: job.source.city_name,
          salary: job.source.salary,
          url: job.source.url,
          date_posted: job.source.date_posted,
        };
      });
      const returnedJobs = {
        total: jobObject.total,
        jobs: returnedFields
      };

      return returnedJobs;
    }
  }
};
