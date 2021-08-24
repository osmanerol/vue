import Vue from 'vue';

export const setTradeResult = ({ state, commit }, payload) => {
    commit('updateTradeResult', payload);
    let result = {
        purchase: state.purchase,
        sale: state.sale
    }
    Vue.http.put('https://product-management-9a843-default-rtdb.firebaseio.com/tradeResult.json', result);
}

export const getTradeResult = ({ commit }) => {
    Vue.http.get('https://product-management-9a843-default-rtdb.firebaseio.com/tradeResult.json')
        .then(response => {
            commit('updateTradeResult', response.body);
        });
}