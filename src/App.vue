<template>
  <div id="app">
    <Header />
      <h1>Hiiiii</h1>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
