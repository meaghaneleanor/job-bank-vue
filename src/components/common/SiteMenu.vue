<template>
  <div>
    <nav role="navigation" aria-label="Primary navigation" class="ontario-site-nav">
      <button type="button" class="ontario-button ontario-site-nav__nav-toggle ontario-float-right" data-toggle="dropdown">
        <i class="ontario-icon ontario-icon--menu ontario-icon--size-medium hide-for-small-only" aria-hidden="true" /> {{ $t('header.menu') }}
      </button>

      <a v-on:click="switchLocale" class="ontario-site-nav__translation-link ontario-float-right">
        <span v-if="$i18n.locale === 'fr'" class="show-for-large">english</span>
        <span v-else class="show-for-large">français</span>
        <span class="hide-for-large">
          <abbr v-if="$i18n.locale === 'fr'" title="english">ER</abbr>
          <abbr v-else title="français">FR</abbr>
        </span>
      </a>

      <div
        id="dropdown"
        class="dropdown-pane ontario-site-nav__dropdown-pane"
        ref="dropdown"
        data-dropdown data-v-offset="15" data-position="bottom" data-alignment="right"
        data-auto-focus="true" data-close-on-click="true">
        <ul class="ontario-list--no-bullet">
          <li v-for="(link, index) in $t('navLinks')" :key="index" class="ontario-site-nav__dropdown-links">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'fr';
      } else {
        this.$i18n.locale = 'en';
      }
    }
  },
  mounted() {
    this.$foundation(this.$refs.dropdown);
  },
};
</script>
