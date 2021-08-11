<script>
import { productMixin } from './productMixin';

export default {
  name: 'FilterList',
  mixins: [ productMixin ]
}
</script>

<template>
  <div>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="(product, index) in filtered" :key="index">{{ product }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
