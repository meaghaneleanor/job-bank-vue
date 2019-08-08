<template>
  <div 
    class="ontario-job-bank__single-job">
    <div class="grid-x">
      <NewFlag
        :date="job.date_posted"
      />
      <div class="ontario-job-bank-result__single-job--logo ontario-grid-cell large-1 medium-1 small-2">
        <img src="/jobResultLogo.png" alt="Ontario Trillium Logo">
      </div>
      <div class="ontario-job-bank-result__single-job--info  ontario-grid-cell large-8 medium-8 small-7">
        <p><a :href="job.url">{{ job.title }}</a></p>
        <p>{{ job.employer_name }} </p>
        <p>{{ job.city_name }}, ON</p>
        <p>
          <span v-if="this.addSalaryString(job.salary)">{{ $t('jobPage.salaryString') }}</span>
          {{ job.salary }}
        </p>
      </div>
      <div class="ontario-job-bank-result__single-job--job-details-button ontario-grid-cell large-3 medium-3 small-3">
        <a :href="job.url" class="ontario-button ontario-button--primary">
          {{ $t('jobPage.detailsButton') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NewFlag from './NewFlag.vue';

export default {
  components: {
    NewFlag
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  methods: {
    addSalaryString(salary) {
      const regex = /['$']/g;
      let match = salary.match(regex);

      return !match;
    }
  }
};
</script>

<style scoped>
  .ontario-job-bank__single-job {
    border-top: 3px solid rgb(230, 230, 230);
    padding: 2rem 0;
  }

  .ontario-job-bank__single-job:last-of-type {
    border-bottom: 3px solid rgb(230, 230, 230);
    margin-bottom: 3.5rem;
  }

  .ontario-job-bank-result__single-job--info {
    padding-left: 2rem;
  }

  .ontario-job-bank-result__single-job--job-details-button {
    position: relative;
  }

  .ontario-job-bank-result__single-job--job-details-button a {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 0;
    margin-bottom: 5px;
  }
</style>
