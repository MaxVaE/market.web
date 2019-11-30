import Vue from 'vue'
import Router from 'vue-router'
import { HomePage, ChatPage } from 'src/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    }
  ]
})
