import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout/Index.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: 'category/',
        component: () => import('@/views/category/Index.vue'),
        children: [
          {
            path: '',
            name: 'category-admin',
            component: () => import('@/views/category/Admin.vue')
          },
          {
            path: 'create',
            name: 'category-create',
            component: () => import('@/views/category/Create.vue')
          },
          {
            path: ':id(\\d+)/update',
            name: 'category-update',
            component: () => import('@/views/category/Update.vue'),
            props: true
          },
          {
            path: ':id(\\d+)',
            name: 'category-view',
            component: () => import('@/views/category/View.vue'),
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   console.log(to)
//   return true
// })

export default router
