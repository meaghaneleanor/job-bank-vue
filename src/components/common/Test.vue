<template>
  <div>
    <h1>Testing</h1>
    <InternalLink 
      :url="'jobs'"
      :link-text="$t('jobPage.title')" />
  </div>
</template>

<script>
import InternalLink from '../job-bank/InternalLink';

export default {
  components: {
    InternalLink
  }
};
</script>
