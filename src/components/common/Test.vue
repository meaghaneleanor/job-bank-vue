<template>
  <div>
    <h1>Testing</h1>
    <router-link :to="translateRoute('jobs')">
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
