<script>
export default {
  name: 'Header',
}
</script>

<template>
  <ul class="nav nav-pills">
    <router-link tag="li"  to="/" exact active-class="active">
        <a>Home</a>
    </router-link>
    <router-link tag="li"  to="/user" active-class="active">
        <a>User</a>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
.nav{
    margin-top: 20px;
}
</style>
