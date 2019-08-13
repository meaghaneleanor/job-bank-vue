<template>
  <div id="App">
    <Header />
    <router-view class="grid-container" /> 
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
};
</script>
