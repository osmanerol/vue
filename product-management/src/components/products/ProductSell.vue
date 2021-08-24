<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductSell',
  data() {
    return {
      selectedProduct: null,
      product: null,
      count: null,
      savedButtonClick: false
    }
  },
  computed: {
    ...mapGetters([
      'getProducts'
    ]), 
    saveEnabled() {
      if(this.selectedProduct !== null && this.count > 0)
        return false;
      return true;
    },
    isLoading() {
      if(this.savedButtonClick) {
        return {
          display: 'block'
        }
      }
      return {
        display: 'none'
      }
    }
  },
  methods: {
    productSelect() {
      let product = this.$store.getters.getProduct(this.selectedProduct);
      this.product = product[0];
    },
    save() {
      this.savedButtonClick = true;
      let product = {
        key: this.selectedProduct,
        count: this.count
      }
      this.$store.dispatch('sellProduct', product);
    }
  },
  beforeRouteLeave (to, from, next) {
    if((this.selectedProduct !== null || this.count > 0) && !this.savedButtonClick) {
      if(confirm("Kaydedilmemiş değişiklikler var. Devam etmek istiyor musunuz ?"))
        next();
      next(false);
    }
    next();
  }
}
</script>

<template>
  <div class="container">
    <div class="loading" :style="isLoading">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct" @change="productSelect">
              <option selected disabled>Bir ürün seçiniz</option>
              <option :value="product.key" :disabled="product.count == 0" v-for="(product, index) in getProducts" :key="index">{{ product.title }}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Stok : {{ product.count }}</span>
                      <span class="badge badge-primary">Fiyat : {{ product.price | currency }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Adet</label>
            <input type="text" class="form-control" v-model="count" placeholder="Ürün adetini giriniz..">
          </div>
          <hr>
          <button class="btn btn-primary" @click="save" :disabled="saveEnabled">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>