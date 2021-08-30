import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
/*
import axios from "axios"

axios.defaults.baseURL = "https://vue-axios-be169-default-rtdb.firebaseio.com"
axios.defaults.headers.common["Authorization"] = "osman_erol_auth_key"
axios.defaults.headers.get["Accepts"] = "application/json"
*/
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
