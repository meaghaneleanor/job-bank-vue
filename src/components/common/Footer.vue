<template>
  <footer class="ontario-main-footer">
    <div class="grid-container">
      <div class="grid-x">
        <div class="ontario-main-footer__topic-links-list cell columns show-for-medium large-3 medium-4 medium-order-3" aria-labelledby="ontario-footer-topics">
          <div class="ontario-main-footer__subheading">
            Topics
          </div>
          <ul class="ontario-list--no-bullet">
            <li v-for="(link, index) in topicLinks" type="main" :key="index">
              <a :href="link.href" class="ontario-main-footer__topic-link">{{ link.title }}</a>
            </li>
          </ul>   
        </div>

        <div class="ontario-main-footer__contact cell columns large-2 medium-3 medium-order-2 small-order-1" aria-labelledby="ontario-footer-contact">
          <dl>
            <dt class="ontario-main-footer__subheading hide-for-small-only" />
            <dd>
              <a href="#">
                <div class="ontario-icon ontario-icon-wrapper--long">
                  <span class="ontario-icon-contactLong" aria-hidden="true" />
                  <span class="show-for-sr">Contact Us</span>
                </div>
              </a>
            </dd>
          </dl>
        </div>

        <div class="ontario-main-footer__ministry-block cell columns large-7 medium-5 small-12 medium-order-1 small-order-2" aria-labelledby="ontario-footer-ministry">
          <div class="grid-x">
            <div class="ontario-main-footer__ministry-photo-container cell large-4">
              <img class="ontario-main-footer__ministry-photo" src="/trillium_10.jpg">
            </div>

            <div class="ontario-main-footer__ministry-tagline cell large-8">
              <div class="ontario-main-footer__ministry-subheading" id="ontario-footer-ministry">
                Government of Ontario
              </div>
              <p>The Government of Ontario includes ministries, agencies and Crown corporations.</p>
            </div>
          </div>

          <div class="ontario-main-footer__notice-links ontario-margin--top-double">
            <ul class="ontario-list--inline ontario-list--no-bullet">
              <li v-for="(link, index) in footerLinks" :key="index">
                <a :href="link.href" class="ontario-main-footer__topic-link">{{ link.title }}</a>
              </li>
            </ul>
            <small>
              <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
                © Queen\'s Printer for Ontario, 2012-19
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          'title': 'about Ontario',
          'href': 'blaaa'
        },
        {
          'title': 'accessibility',
          'href': 'blaaa'
        },
        { 
          'title': 'news',
          'href': 'blaaa'
        },
        {
          'title': 'confidentiality',
          'href': 'blaaa'
        },
        {
          'title': 'terms of use',
          'href': 'blaaa'
        }  
      ],
      topicLinks: [
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
  }
};
</script>
