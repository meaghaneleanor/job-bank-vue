<template>
  <div>
    <h1 class="ontario-padding--bottom-double">Ontario job bank</h1>
    <Search v-on:searchCompleted="updateJobsResult" />
    <div v-if="jobsResult.total !== 0">
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
import Search from './Search.vue';
import JobResult from './JobResult.vue';

import mockResponse from '../../plugins/mock-api-response.js';

export default {
  components: {
    JobResult,
    Search
  }, 
  data() {
    return {
      jobsResult: {}
    };
  },
  methods: {
    updateJobsResult(jobs) {
      this.jobsResult = jobs;
      return;
    }
  },
  watch: {
    $route() {
      this.$root.$emit('externalSearch', this.$route.query.query);
    }
  }
};
</script>
