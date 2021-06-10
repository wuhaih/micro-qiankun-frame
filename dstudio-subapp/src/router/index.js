import Vue from 'vue'
import Router from 'vue-router'
import loadAsynPlugin from '@/views/loadAsynPlugin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plugin',
      name: 'plugin',
      component: loadAsynPlugin
    }

  ]
})
