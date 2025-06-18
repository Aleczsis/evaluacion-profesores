import { createRouter, createWebHistory } from 'vue-router';
import alumnoRoutes from './alumnos';
import adminRoutes from './admin';
import authRoutes from './auth';       // 👈 Bienvenida u otras rutas generales

const routes = [
  ...authRoutes,        // Rutas generales, como la pantalla de bienvenida
  ...alumnoRoutes,      // Rutas del alumno (login, recuperar)
  ...adminRoutes,     // 👈 Aquí agregamos las rutas del profesor/docente
  {
    path: '/',
    redirect: '/bienvenida' // Ruta por defecto
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;