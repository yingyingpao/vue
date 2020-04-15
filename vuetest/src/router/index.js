import Vue from 'vue'
import Router from 'vue-router'
import directives from '@/components/directives'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'directives',
      component: directives
    }
  ]
})
