import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        fbApiKey: 'AIzaSyAVB6y9r8daQLs8eSNWzwsZbbafJIAfNJk'
    },
    getters: {
        isAuthenticated(state) {
            return state.token ? true : false
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = null
        }
    },
    actions: {
        initAuth({ dispatch, commit }) {
            let token = localStorage.getItem('token')
            if(token) {
                let expirationDate = localStorage.getItem('expirationDate')
                if(new Date().getTime() >= expirationDate) {
                    dispatch('logout')
                    return false
                }
                else {
                    commit('setToken', token)
                    dispatch('setTimeoutTimer', expirationDate - new Date().getTime())
                    router.push('/')
                }
            }
            else {
                router.push('/auth')
                return false
            }
        },
        login({ dispatch, commit, state}, authData) {
            let authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
            if(authData.isUser) {
                authLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
            }
            return axios.post(`${authLink}${state.fbApiKey}`,{
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }).then(response => {
                commit('setToken', response.data.idToken)
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("expirationDate", new Date().getTime() + response.data.expiresIn * 1000)
                dispatch('setTimeoutTimer', parseInt(response.data.expiresIn) * 1000)
            })
        },
        logout({ commit }) {
            commit('clearToken')
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.push('/auth')
        },
        setTimeoutTimer({ dispatch }, expiresIn){
            setTimeout(() => {
                dispatch('logout')
            }, expiresIn) 
        }
    }
})

export default store