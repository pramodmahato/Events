import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import CreateEvent from './views/CreateEvent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events      
    },
    {
      path: '/createevent',
      name: 'createevent',
      component: CreateEvent      
    },
  ],
  mode: 'history'
})
