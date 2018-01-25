// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

fastclick.attach(document.body)// 解決移動端三百毫秒延遲
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
