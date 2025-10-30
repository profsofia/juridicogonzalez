import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue' // <-- Importa BlogView aquí

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('../views/SobreMiView.vue')
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServiciosView.vue')
    },
    {
      path: '/blog', // <-- Ruta de la lista de posteos
      name: 'blog',
      component: BlogView // <-- Usa el componente importado
    },
    {
      path: '/blog/:id', // <-- NUEVA RUTA: para posteos individuales
      name: 'post-detalle',
      component: () => import('../views/PostView.vue') // <-- Nuevo componente que crearemos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ]
})

export default router