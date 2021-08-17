<script>
export default {
  name: 'UserStart',
}
</script>

<template>
  <div>
    <h2 class="my-3">User Start Component</h2>
    <hr>
    <ul class="list-group">
        <router-link tag="li" class="list-group-item" :to="`/user/${item}`" v-for="item in 5" :key="item">
            <a>User {{ item }}</a>
        </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
