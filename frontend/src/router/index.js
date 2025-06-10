import Bienvenida from '../views/Bienvenida.vue'

const routes = [
  {
    path: '/',
    name: 'Bienvenida',
    component: Bienvenida
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
