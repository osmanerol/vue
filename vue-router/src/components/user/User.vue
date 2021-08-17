<script>
export default {
  name: 'User',
  methods: {
    navigateToHome() {
    //this.$router.push('/')
    //this.$router.push({ path : '/' })
    this.$router.push({ name : 'HomePage' })
    }
  }
}
</script>

<template>
  <div>
    <router-view/>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Home Component</button>
  </div>
</template>

<style lang="scss">
</style>
