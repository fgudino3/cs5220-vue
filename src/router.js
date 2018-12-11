import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GuestBook from './views/GuestBook.vue'
import EditEntry from './views/EditEntry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Guestbook',
      name: 'guestbook',
      component: GuestBook
    },
    {
      path: '/edit/:id/:name/:message',
      name: 'EditEntry',
      component: EditEntry
    },
    {
      path: '/edit',
      name: 'EditEntry',
      component: EditEntry
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
