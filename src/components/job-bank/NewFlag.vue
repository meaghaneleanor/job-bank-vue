<template>
  <div v-if="checkTimeDifference()"
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
    checkTimeDifference() {
      //get todays date in milliseconds
      let todaysDate = Date.now();

      //get job date in milliseconds
      let parsedDate = Date.parse(this.$props.date);

      //compare time difference in milliseconds
      let timeDifference = todaysDate - parsedDate;
      
      let duration = 60000 * 60 * 24;
      let dayDifference = Math.round(timeDifference/duration);
      
      return dayDifference > 3 ? false: true;
    }
  }
};
</script>

<style scoped>
  
</style>
