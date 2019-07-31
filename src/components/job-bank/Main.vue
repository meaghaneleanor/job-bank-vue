<template>
  <div>
    <h1>Ontario job bank</h1>
    <JobResult 
      v-for="job in jobsObject.jobs" 
      :key="job.id"
      :job="job"
    />
  </div>
</template>

<script>
import getJobs from '../../mixins/getJobs.js'; 
import JobResult from './JobResult.vue';

export default {
  components: {
    JobResult
  }, 
  mixins: [getJobs],
  computed: {
    jobsObject() {
      return this.getJobs(this.$i18n.locale);
    }
  }
};
</script>
