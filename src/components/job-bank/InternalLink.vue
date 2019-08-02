<template>
  <div>
    <router-link :to="translateRoute(validURL)">
     {{ linkText }}
    </router-link>
  </div>
</template>

<script>
import { translate } from '../../mixins/translate.js';

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
  },
  mixins: [translate],
  computed: {
    validURL(url) {
      url = this.$props.url;
      console.log(url);
      //if the url does not start and end with a single quote
      if (!url.match(/^.*'$/g)) {
        console.log(url);
      }

      return url;
    }
  }
};
</script>
