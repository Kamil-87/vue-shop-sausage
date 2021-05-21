import axios from "axios"
import Vue from 'vue'
import Vuelidate from "vuelidate"
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import App from './App.vue'
import router from './router'
import {store} from './store'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import dateFilter from './filters/date.filter'

//Global styles
import './assets/styles/app.scss'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueBreadcrumbs);
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.prototype.$axios = axios

Vue.filter('date', dateFilter)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
