import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/entrance',
    name: 'Entrance',
    component: () => import('../views/entrance/Entrance'),
  }, {
    path: '/',
    redirect: '/entrance',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
