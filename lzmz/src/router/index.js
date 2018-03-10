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
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('../components/HelloWorld')
    },
     {
      path: '/two/',
      name: 'Two',
      component: ()=>import('../components/Two')
    },
     {
      path: '/three/',
      name: 'Three',
      component: ()=>import('../components/Three')
    },
     {
      path: '/lakers/:fid',
      name: 'Lakers',
      component: ()=>import('../components/Lakers')
    }
  ]
})
