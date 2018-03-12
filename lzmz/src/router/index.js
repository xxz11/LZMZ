import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Two from '@/components/Two'
//import Three from '@/components/Three'
//import Lakers from '@/components/Lakers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/xq/:fid',
      name: 'Xq',
      component: ()=>import('../components/Xq')
      
    },
    {
      path: '/pay',
      name: 'Paymoney',
      component: ()=>import('../components/Paymoney')
    },
    {
      path: '/list',
      name: 'List',
      component: ()=>import('../components/List')
    }
  ]
})
