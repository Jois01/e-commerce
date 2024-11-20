import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },

    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/DetailProduct:id',
      name: 'DetailProduct',
      component: () => import('../views/DetailProductView.vue'),
      props: true,
    },
  ],
})

export default router
