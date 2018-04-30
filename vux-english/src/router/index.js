import Vue from 'vue'
import Router from 'vue-router'
import phrase from '@/page/phrase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/phrase',
      name: 'phrase',
      component: phrase
    },
    {
      path: '/',
      redirect: '/phrase'
    }
  ]
})
