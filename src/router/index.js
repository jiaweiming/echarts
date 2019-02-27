import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Save from '../components/save.vue'
import History from '../components/record.vue'

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/latest',
      component: Save,
      name: 'latest'
    },
    {
      path: '/history',
      component: History,
      name: 'history'
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
