import Vue from 'vue'
import App from './App.vue'
window.Vue = Vue;

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
