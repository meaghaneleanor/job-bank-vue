<template>
  <header class="ontario-main-header">
    <div class="grid-container">
      <div class="grid-x">
        <div class="ontario-main-header__logo ontario-grid-cell small-5 medium-3">
          <a class="ontario-main-header__logo-link" href="https://ontario.ca/page/government-ontario" title="Government of Ontario">
            <img class="ontario-main-header__logo-image" alt="Government of Ontario home page" src="../../../public/logo-ontario@2x.png" />
          </a>
        </div>
        <div class="show-for-medium ontario-main-header__search ontario-grid-cell medium-5 large-6" v-if="search">
          <Search/>
        </div>
        <div class="ontario-main-header__site-nav ontario-grid-cell small-7 medium-4 large-3">
          <SiteMenu/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SiteMenu from './SiteMenu.vue'
import Search from './Search.vue'

export default {
  data: () => ({
    search: true
  }),
  components: {
    SiteMenu,
    Search
  }
}
</script>
