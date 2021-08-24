<script>
export default {
  name: 'ProductPurchase',
  data() {
    return {
      product: {
        title: '',
        count: null,
        price: null,
        description: ''
      },
      savedButtonClick: false
    }
  },
  methods: {
    saveProduct() {
      this.savedButtonClick = true;
      this.$store.dispatch('saveProduct', this.product);
    }
  },
  computed: {
    saveEnabled() {
      if(this.product.title.length > 0 && this.product.count > 0 && this.product.price > 0 && this.product.description.length > 0)
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
  beforeRouteLeave (to, from, next) {
    if((this.product.title.length > 0 || this.product.count > 0 || this.product.price > 0 || this.product.description.length > 0 ) && !this.savedButtonClick) {
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
        <h3>Ürün İşlemleri</h3>
        <hr>
        <div class="form-group">
          <label>Ürün Adı</label>
          <input type="text" class="form-control" v-model="product.title" placeholder="Ürün adını giriniz..">
        </div>
        <div class="form-group">
          <label>Adet</label>
          <input type="number" min="0" class="form-control" v-model="product.count" placeholder="Ürün adetini giriniz..">
        </div>
        <div class="form-group">
          <label>Fiyat</label>
          <input type="number" min="0" class="form-control" v-model="product.price" placeholder="Ürün fiyatı giriniz..">
        </div>
        <div class="form-group">
          <label>Açıklama</label>
          <textarea cols="30" rows="5" v-model="product.description" placeholder="Ürüne ait bir açıklama giriniz..." class="form-control"></textarea>
        </div>
        <hr>
        <button class="btn btn-primary" @click="saveProduct" :disabled="saveEnabled">Kaydet</button>
      </div>
    </div>
  </div>
</div>
</template>
