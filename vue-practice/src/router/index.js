import {createRouter, createWebHistory} from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Index.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
   {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
