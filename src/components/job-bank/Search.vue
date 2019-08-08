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
              v-on:click.prevent="sendSearchTerm">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    sendSearchTerm() {
      // update the route to incorporate the search term
      this.$i18n.locale === 'en' 
        ? this.$router.push({ path: '/page/ontario-job-bank/search-results', query: { query: this.searchTerm }})
        : this.$router.push({ path: '/fr/page/guichet-emplois-ontario/resultats-de-recherche' , query: { query: this.searchTerm }});

      this.$emit('clicked', this.searchTerm);
    }
  },
  beforeMount() {
    // if a route is loaded with a search term but the searchTerm data is not set, update the searchTerm with the route query.
    if (this.$route.query.query && !this.searchTerm) {
      this.searchTerm = this.$route.query.query;
    }
  },
};
</script>

<style lang="scss" scoped>
  .ontario-form-label {
    margin: 1rem 0;
  }

  .ontario-panel {
    padding: 1rem;
  }

  #ontario-job-bank__search-input {
    width: 86%;
    float: left;
    padding: 1.37rem .5rem; 

    @media screen and (min-width: 40em) and (max-width: 63.9375em) {
      width: 80%;
    }

    @media screen and (max-width: 39.9375em) {
      width: 70%;
    }

    @media screen and (max-width: 30em) {
      width: 65%;
    }
  }

  .ontario-job-bank__search-button {
    float: right;
    width: 14%;
    margin: 0;
    box-shadow: none;
    border-radius: 0 3px 3px 0;
    margin: 0 0 1.5rem;

    &:hover {
      box-shadow: none;
    }

    @media screen and (min-width: 40em) and (max-width: 63.9375em) {
      width: 20%;
    }

    @media screen and (max-width: 39.9375em) {
      width: 30%;
    }

    @media screen and (max-width: 30em) {
      width: 35%;
    }
  }
</style>
