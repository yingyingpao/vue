import Vue from 'vue'
import Router from 'vue-router'
import addSub from '@/components/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'directives',
      component: addSub
    }
  ]
})
