import axios from "axios"
import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'
import router from './router'
import {store} from './store'
import dateFilter from './filters/date.filter'


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.prototype.$axios = axios

Vue.filter('date', dateFilter)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
