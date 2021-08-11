<script>
import FilterList from './FilterList.vue';
import { productMixin } from './productMixin';

export default {
  name: 'app',
  components: {
    FilterList
  },
  mixins: [ productMixin ],
  data() {
    return {
      message: 'Hello World',
      products: ['Monitor', 'Klavye', 'Hard Disk', 'Mouse'],
      searchText: ''
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filtered() {
      //return this.products.filter(item => item.match(this.searchText));
      return this.products.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <h3>Filter & Mixins</h3>
        <p>{{ message | toUpperCase }}</p>
        <p>{{ message | toLowerCase }}</p>
        <p>{{ message | toUpperCase | toLowerCase }}</p>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="(product, index) in filtered" :key="index">{{ product }}</li>
        </ul>
        <filter-list />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
