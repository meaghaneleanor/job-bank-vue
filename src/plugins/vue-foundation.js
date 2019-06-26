import Vue from 'vue';

window.$ = window.jQuery = require('jquery');
require('../../node_modules/foundation-sites/dist/js/plugins/foundation.core.js');
require('../../node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.js');

const FoundationPlugin = {
  install (Vue) {
    Vue.prototype.$foundation = (elem, action, target) => {
      if (window && 'jQuery' in window) {
        window.jQuery(elem).foundation(action, window.jQuery(target));
      }
    };
  }
};

Vue.use(FoundationPlugin);
