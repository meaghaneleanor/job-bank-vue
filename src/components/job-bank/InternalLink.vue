<template>
  <div>
    <router-link :to="translateRoute(url)">
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
  mixins: [translate]
};
</script>
