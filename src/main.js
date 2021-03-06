import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store';
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
