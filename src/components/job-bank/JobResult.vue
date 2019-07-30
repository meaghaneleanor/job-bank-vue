<template>
  <div class="ontario-job-bank__single-job">
    <div class="grid-x">
      <NewJobFlag />
      <div class="ontario-job-bank-result__single-job--logo ontario-grid-cell small-2">
        Logo
      </div>
      <div class="ontario-job-bank-result__single-job--info  ontario-grid-cell large-8 small-7">
        <p>Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>$$ Salary $$</p>
      </div>
      <div class="ontario-job-bank-result__single-job--job-details-button  ontario-grid-cell large-2 small-3">
        <a href="#" class="ontario-button ontario-button--primary">
          Job details
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NewJobFlag from './NewJobFlag.vue';

export default {
  components: {
    NewJobFlag
  }
};
</script>
