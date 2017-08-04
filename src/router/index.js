import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Dataview from '@/components/Dataview'

Vue.use(Router)

export default new Router({
  
  routes: [

    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }

    , {
      path: '/dataview',
      name: 'Dataview',
      component: Dataview
    }

  ]
})
