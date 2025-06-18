import LoginAlumno from '@/views/alumno/LoginAlumno.vue';
import RecuperarAlumno from '@/views/alumno/RecuperarAlumno.vue';
import InicioAlumno from '../views/alumno/InicioAlumno.vue';
import MateriasAlumno from '../views/alumno/MateriasAlumno.vue';

export default [
  {
    path: '/login-alumno',
    name: 'LoginAlumno',
    component: LoginAlumno,
  },
  {
    path: '/recuperar',
    name: 'RecuperarAlumno',
    component: RecuperarAlumno,
  },
  {
    path: '/inicio',
    name: 'InicioAlumno',
    component: InicioAlumno,
  },
  {
    path: '/materias',
    name: 'MateriasAlumno',
    component: MateriasAlumno,
  },
];
