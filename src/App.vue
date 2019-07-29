<template>
  <div id="App">
    <Header />
    <div class="grid-container">
      <router-view /> 
    </div>
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
  }
};
</script>
