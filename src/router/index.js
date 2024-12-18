import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/index.vue'
import productView from '../views/product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: productView,
    },
  ],
})

export default router
