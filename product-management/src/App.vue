<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  created() {
    this.$store.dispatch('getTradeResult');
    this.$store.dispatch('initApp');
  }
}
</script>

<template>
  <div>
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<style lang="scss">
  body{
    background-color: #a7a0bb5c;
  } 
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-out;
  }
  .fade-leave{ 
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>
