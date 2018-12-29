import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hello from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hello',
      // name: 'index',
      component: hello
    }

  ]
})
