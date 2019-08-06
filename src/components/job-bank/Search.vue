<template>
  <div class="grid-x">
    <div class="cell small-12 ontario-panel ontario-panel--aside">
      <label class="ontario-form-label" 
             for="ontario-job-bank__search-input">
        Search jobs
      </label>
      <input v-model="searchTerm"
             role="search" 
             aria-label="Search" 
             class="ontario-form-input" 
             id="ontario-job-bank__search-input"
             type="search">
      <button class="ontario-button ontario-button--primary ontario-job-bank__search-button"
              v-on:click.prevent="searchForJobs">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: null,
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({ name: 'job-bank-search-results', query: { query: this.searchTerm }});
    }
  } 
};
</script>

<style scoped>
  .ontario-form-label {
    margin: 1rem 0;
  }

  #ontario-job-bank__search-input {
    width: 85%;
    float: left;
    padding: 1.35rem .5rem; 
  }

  .ontario-job-bank__search-button {
    float: right;
    width: 15%;
    margin: 0;
    box-shadow: none;
    border-radius: 0 3px 3px 0;
    margin: 0 0 1.5rem;
  }

  .ontario-job-bank__search-button:hover {
    box-shadow: none;
  }
</style>
