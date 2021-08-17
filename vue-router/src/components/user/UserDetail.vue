<script>
export default {
  name: 'UserDetail',
  beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>

<template>
  <div>
    <h2 class="my-3">User Detail Component</h2>
    <hr>
    <p>User Id : {{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="{ name : 'UserEdit', params : { id: $route.params.id}, query : { name : 'Ali', lastname : 'Kurt'}, hash: '#data' }">Edit</router-link>
  </div>
</template>

<style lang="scss">
</style>
