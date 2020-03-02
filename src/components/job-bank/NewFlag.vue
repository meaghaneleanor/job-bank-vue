<template>
  <div v-if="checkTimeDifference(date)"
       class="ontario-grid-cell large-1 large-offset-11 small-2 small-offset-10">
    <p>{{ $t('jobPage.newFlag') }}</p>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    checkTimeDifference(date) {
      //get todays date in milliseconds
      let todaysDate = Date.now();

      //get job date in milliseconds
      let parsedDate = Date.parse(date);

      //compare time difference in milliseconds
      let timeDifference = todaysDate - parsedDate;
      
      let duration = 60000 * 60 * 24;
      let dayDifference = Math.round(timeDifference/duration);

      return dayDifference > process.env.VUE_APP_JB_NEW_FLAG ? false: true;
    }
  }
};
</script>
