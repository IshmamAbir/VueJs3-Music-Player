import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About.vue'
import ManageView from '../views/Manage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/manage',
      alias: '/manage-music',
      name: 'manage',
      component: ManageView,
      // specific route guard
      beforeEnter: (to, from, next) => {
        next()
        console.log('"manage" route Guard ' + to, from)
      }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ],
  linkExactActiveClass: 'text-yellow-500'
})

// global route guard for check all url route
router.beforeEach((to, from, next) => {
  next()
  console.log('Global Guard ' + to, from)
})

export default router
