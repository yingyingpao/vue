// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import store from './store'

import Ant from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
Vue.use(Ant)

Vue.config.productionTip = false
// window.Bus = new Vue;

console.log(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
