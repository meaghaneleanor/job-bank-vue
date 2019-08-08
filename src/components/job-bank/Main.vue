<template>
  <div>
    <h1 class="ontario-padding--bottom-double">Ontario job bank</h1>
    <Search v-on:clicked="searchForJobs" />
    <div v-if="jobsResult !== false">
      <JobResult 
        v-for="job in jobsResult.jobs" 
        :key="job.id"
        :job="job"
      />
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
// import getJobs from '../../mixins/getJobs.js'; 
import JobResult from './JobResult.vue';
import Search from './Search.vue';

import mockResponse from '../../plugins/mock-api-response.js';

export default {
  components: {
    JobResult,
    Search
  }, 
  data() {
    return {
      jobsResult: false,
      searchTerm: ''
    }
  },
  // mixins: [getJobs],
  // computed: {
  //   jobsObject() {
  //     return this.getJobs(this.$i18n.locale);
  //   }
  // },
  methods: {
    searchForJobs(searchTerm) {
      let baseURL = this.$i18n.locale === 'en'
        ? '/search'
        : '/recherche';
      
      this.formatSearchTerm(searchTerm);

      let endpoint = this.searchTerm ? `${baseURL}?${this.searchTerm}` : `${baseURL}`;

      this.$axios.get(endpoint)
        .then((response) => {
          let jobs = response.data;
          this.jobsResult = jobs;
          return;
        }).catch((error => {
          this.jobsResult = false;
          return;
        }));
    },
    formatSearchTerm(searchTerm) {
      let query = encodeURIComponent(searchTerm);
      this.searchTerm = query;
      return;
    }
  },
  beforeMount() {
    if(this.$route.query.query) {
      this.searchTerm = this.$route.query.query;
    };

    this.searchForJobs(this.searchTerm);
  },
  computed: {
    jobsObjectEmpty() {
      if(!this.jobsResult) {
        return true;
      }
      
      return false;
    }
  }
};
</script>
