import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import postcmp from '@/components/postcmp'
import getcmp from '@/components/getcmp'
import updatecmp from '@/components/updatecmp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'postcmp',
      component: postcmp
    },
    {
      path: '/getcmp',
      name: 'getcmp',
      component: getcmp
    },
    {
      path: '/updatecmp',
      name: 'updatecmp',
      component: updatecmp
    }
  ]
})
