<template>
  <div>
    <h1 class="ontario-padding--bottom-double">Ontario job bank</h1>
    <Search />
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
import Search from './Search.vue';

export default {
  components: {
    JobResult,
    Search
  }, 
  mixins: [getJobs],
  computed: {
    jobsObject() {
      return this.getJobs(this.$i18n.locale);
    }
  },
};
</script>
