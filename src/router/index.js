import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import HelloWorld from '@/components/HelloWorld'
const Login = () => import('@/components/login/login');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
