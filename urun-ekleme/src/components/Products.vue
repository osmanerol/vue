<template>
    <div v-if="productList.length > 0">
        <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
        <hr>
        <div class="row product-container">
            <product v-for="(product, index) in productList" :key="index">
                <img class="card-img-top" :src="product.image === null ? '/src/assets/default.png' : product.image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <small>
                        <strong>Adet : </strong> 
                        {{ product.count }}
                    </small>
                    <br>
                    <small>
                        <strong>Fiyat : </strong>
                        {{ product.price }}
                    </small>
                    <br>
                    <small>
                        <strong>Tutar : </strong> 
                        {{ product.totalPrice }}
                    </small>
                </div>
            </product>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue';
import { EventBus } from '../main';

export default {
    name: 'Products',
    components: {
        Product
    },
    data() {
        return {
            productList: [],
        }
    },
    created() {
        EventBus.$on('productAdded', product => {
            if(this.productList.length < 2){
                this.productList.push(product);
                EventBus.$emit('progressBarUpdated', this.productList.length)
            }
            else {
                alert('Daha fazla ürün ekleyemezsiniz.');
            }
        })
    }
}
</script>