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
      searchTerm: '',
    };
  },
  methods: {
    formatRoute(searchTerm) {    
      const query = {
        query: this.searchTerm
      };

      const path = this.$i18n.locale === 'en' ? '/page/ontario-job-bank/search-results' : '/fr/page/guichet-emplois-ontario/resultats-de-recherche';

      return { path: path, query: query };
    },
    searchForJobs() {
      // update the route
      if (this.searchTerm !== "") {
        this.$router.push(this.formatRoute(this.searchTerm));
      }

      let baseURL = this.$i18n.locale === 'en'
        ? '/en/search'
        : '/fr/recherche';
      
      this.searchTerm = this.formatSearchTerm(this.searchTerm);

      let endpoint = this.searchTerm ? `${baseURL}?query=${this.searchTerm}` : `${baseURL}`;

      this.$axios.get(endpoint)
        .then((response) => {
          let jobs = response.data;
          this.$emit('searchCompleted', jobs);
          return;
        }).catch((error) => {
          this.$emit('searchCompleted', { total: 0 });
          return;
        });
    },
    formatSearchTerm(searchTerm) {
      let query = encodeURIComponent(searchTerm);
      return query;
    }
  },
  beforeMount() {
    // if a route is loaded with a search term but the searchTerm data is not set, update the searchTerm with the route query.
    if (this.$route.query.query && !this.searchTerm) {
      this.searchTerm = this.$route.query.query;
    } else {
      this.searchTerm = '';
    }

    this.searchForJobs(this.searchTerm);
  },
  mounted() {
    this.$root.$on('externalSearch', (query) => {
      this.searchTerm = query ? query : '';
      this.searchForJobs(this.searchTerm);
    });
  }
};
</script>

<style lang="scss" scoped>
  .ontario-form-label {
    margin: 1rem 0;
    cursor: default;
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
