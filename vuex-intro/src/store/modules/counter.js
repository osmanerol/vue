const state = {
    counter: 0
}

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter(state) {
        return state.counter + ' kez tiklandi';
    }
}

const mutations = {
    increaseCounter(state, value) {
        state.counter += value;
    },
    decreaseCounter(state, value) {
        state.counter -= value;
    }
}

const actions = {
    increment({ commit }, value) {
        commit('increaseCounter', value)
    },
    decrement({ commit }, value) {
        commit('decreaseCounter', value)
    },
    incrementAsync({ commit }, value) {
        setTimeout(() => {
            commit('increaseCounter', value)
        }, 2000)
    },
    decrementAsync({ commit }, value) {
        setTimeout(() => {
            commit('decreaseCounter', value)
        }, 2000)
    }
}

export default { 
    state, 
    getters,
    mutations,
    actions
}