import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/layout/AdminLayout.vue'),
      children: [
        // {
        //   path: '/admin/properties',
        //   name: 'admin-properties',
        //   component: () => import('@/views/admin/AdminView.vue')
        // },
        // {
        //   path: '/admin/create',
        //   name: 'create-property',
        //   component: () => import('@/views/admin/CreatePropertyView.vue')
        // },
        // {
        //   path: '/admin/edit/:id',
        //   name: 'edit-property',
        //   component: () => import('@/views/admin/EditPropertyView.vue')
        // }
      ]
    }
  ]
})

export default router
