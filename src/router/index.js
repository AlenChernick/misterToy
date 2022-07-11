import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:id',
      name: 'toy-edit',
      component: toyEdit,
    }
  ],
})

export default router
