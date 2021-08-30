<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
import Auth from "./pages/auth/Auth"
import HomePage from "./pages/Homepage"
import About from "./pages/About"

export default {
  components: {
    'app-header': Header,
    Auth,
    HomePage,
    About
  },
  created() {
    this.$store.dispatch('initAuth')
  }
}
</script>
