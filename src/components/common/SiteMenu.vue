<template>
  <div>
    <nav role="navigation" aria-label="Primary navigation" class="ontario-site-nav">
      <button type="button" class="ontario-button ontario-site-nav__nav-toggle ontario-float-right" data-toggle="dropdown">
        <i class="ontario-icon ontario-icon--menu ontario-icon--size-medium hide-for-small-only" aria-hidden="true" /> MENU
      </button>

      <a class="ontario-site-nav__translation-link ontario-float-right">
        <span class="show-for-large">english</span>
        <span class="hide-for-large">
          <abbr title="english">ER</abbr>
        </span>
      </a>

      <div
        id="dropdown"
        class="dropdown-pane ontario-site-nav__dropdown-pane"
        ref="dropdown"
        data-dropdown data-v-offset="15" data-position="bottom" data-alignment="right"
        data-auto-focus="true" data-close-on-click="true">
        <ul class="ontario-list--no-bullet">
          <li v-for="(link, index) in navLinks" :key="index" class="ontario-site-nav__dropdown-links">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          'title': 'Arts and culture',
          'href': 'https://www.ontario.ca/page/arts-and-culture'
        },
        {
          'title': 'Business and economy',
          'href': 'https://www.ontario.ca/page/business-and-economy'
        },
        {
          'title': 'Driving and roads',
          'href': 'https://www.ontario.ca/page/driving-and-roads'
        },
        {
          'title': 'Education and training',
          'href': 'https://www.ontario.ca/page/education-and-training'
        },
        {
          'title': 'Environment and energy',
          'href': 'https://www.ontario.ca/page/environment-and-energy'
        },
        {
          'title': 'Government',
          'href': 'https://www.ontario.ca/page/government'
        },
        {
          'title': 'Health and wellness',
          'href': 'https://www.ontario.ca/page/health-care-ontario'
        },
        {
          'title': 'Home and community',
          'href': 'https://www.ontario.ca/page/home-and-community'
        },
        {
          'title': 'Jobs and employment',
          'href': 'https://www.ontario.ca/page/jobs-and-employment'
        },
        {
          'title': 'Law and safety',
          'href': 'https://www.ontario.ca/page/law-and-safety'
        },
        {
          'title': 'Rural and north',
          'href': 'https://www.ontario.ca/page/rural-and-north'
        },
        {
          'title': 'Taxes and benefits',
          'href': 'https://www.ontario.ca/page/taxes-and-benefits'
        },
        {
          'title': 'Travel and recreation',
          'href': 'https://www.ontario.ca/page/travel-and-recreation'
        }
      ], 
    };
  },
  mounted() {
    this.$foundation(this.$refs.dropdown);
  }
};
</script>
