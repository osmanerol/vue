import Vue from 'vue'   
import { router } from '../../router'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(item => item.key == key);
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}

const actions = {
    initApp({ commit }) {
        Vue.http.get('https://product-management-9a843-default-rtdb.firebaseio.com/products.json')
            .then(response => {
                let data = response.body;
                for(let key in data) {
                    data[key].key = key;
                    commit('updateProductList', data[key]);
                }
            })
    },
    saveProduct({ dispatch, commit }, payload) {
        Vue.http.post('https://product-management-9a843-default-rtdb.firebaseio.com/products.json', payload).then((response) => {
            payload.key = response.body.name;
                commit('updateProductList', payload);
                let tradeResult = {
                    purchase: payload.price,
                    sale: 0,
                    count: payload.count
                }
                dispatch('setTradeResult', tradeResult);
                router.replace("/");
        })
    },
    sellProduct({ state, commit, dispatch }, payload) {
        let product = state.products.filter(item => item.key == payload.key);
        if(product) {
            let totalCount = product[0].count - payload.count;
            Vue.http.patch(`https://product-management-9a843-default-rtdb.firebaseio.com/products/${payload.key}.json`, {
                count: totalCount   
            }).then(response => {
                product[0].count = response.body.count;
                let tradeResult = {
                    purchase: 0,
                    sale: product[0].price,
                    count: payload.count
                }
                dispatch('setTradeResult', tradeResult);
                router.replace("/");
            })
        }
    }
}

export default { state, getters, mutations, actions }