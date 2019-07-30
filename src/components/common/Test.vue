<template>
  <div>
    <h1>Testing</h1>
    <router-link :to="translateRoute('job-bank-search')">
      {{ $t('jobPage.title') }}
    </router-link>
  </div>
</template>

<script>
import { translate } from '../../mixins/translate.js';

export default {
  mixins: [translate]
};
</script>
