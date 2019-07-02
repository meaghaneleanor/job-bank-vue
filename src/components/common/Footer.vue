<template>
  <footer class="ontario-main-footer">
    <div class="grid-container">
      <div class="grid-x">
        <div class="ontario-main-footer__topic-links-list cell columns show-for-medium large-3 medium-4 medium-order-3" aria-labelledby="ontario-footer-topics">
          <div class="ontario-main-footer__subheading" id="ontario-footer-topics">  
            {{ $t('footer.topics') }}
          </div>
          <ul class="ontario-list--no-bullet">
            <li v-for="(link, index) in $t('navLinks')" :key="index" class="ontario-main-footer__topic-link">
              <a :href="link.href">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="columns large-2 medium-3 medium-order-2 small-order-1" />

        <div class="ontario-main-footer__ministry-block cell columns large-7 medium-5 small-12 medium-order-1 small-order-2" aria-labelledby="ontario-footer-ministry">
          <div class="grid-x">
            <div class="ontario-main-footer__ministry-photo-container cell large-4">
              <img class="ontario-main-footer__ministry-photo" src="/trillium_10.jpg">
            </div>

            <div class="ontario-main-footer__ministry-tagline cell large-8">
              <div class="ontario-main-footer__ministry-subheading" id="ontario-footer-ministry">
                {{ $t('ontario') }}
              </div>
              <p>{{ $t('footer.info') }}</p>
            </div>
          </div>

          <div class="ontario-main-footer__notice-links ontario-margin--top-double">
            <ul class="ontario-list--inline ontario-list--no-bullet">
              <li v-for="(link, index) in $t('footer.links')" :key="index" class="ontario-main-footer__topic-link">
                <a :href="link.href">{{ link.title }}</a>
              </li>
            </ul>
            <small>
              <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
                {{ $t('footer.copyright') }}
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
