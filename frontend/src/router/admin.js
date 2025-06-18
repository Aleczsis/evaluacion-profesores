import LoginAdmin from '@/views/admin/LoginAdmin.vue';
import RecuperarAdmin from '@/views/admin/RecuperarAdmin.vue';
import DashboardAdmin from '@/views/admin/DashboardAdmin.vue';
import PeriodoAdmin from '@/views/admin/PeriodoAdmin.vue';
import RegistroAlumnos from '@/views/admin/RegistroAlumnos.vue';
import RegistroProfesores from '@/views/admin/RegistroProfesores.vue';
import RegistroAsignaturas from '@/views/admin/RegistroAsignaturas.vue';
import RegistroGrupos from '@/views/admin/RegistroGrupos.vue';
import ReporteProfesores from '@/views/admin/ReporteProfesores.vue';
import Configuracion from '@/views/admin/Configuracion.vue';



export default [
  {
    path: '/login',
    name: 'LoginAdmin',
    component: LoginAdmin,
  },
  {
    path: '/recuperar',
    name: 'RecuperarAdmin',
    component: RecuperarAdmin,
  },
  {
    path: '/dashboard',
    name: 'DashboardAdmin',
    component: DashboardAdmin,
  },
  {
    path: '/periodo',
    name: 'PeriodoAdmin',
    component: PeriodoAdmin,
  },
  {
    path: '/registro-alumnos',
    name: 'RegistroAlumnos',
    component: RegistroAlumnos,
  },
  {
    path: '/registro-profesores',
    name: 'RegistroProfesores',
    component: RegistroProfesores,
  },
  {
    path: '/registro-asignaturas',
    name: 'RegistroAsignaturas',
    component: RegistroAsignaturas,
  },
  {
    path: '/registro-grupos',
    name: 'RegistroGrupos',
    component: RegistroGrupos,
  },
    {
    path: '/reporte-profesores',
    name: 'ReporteProfesores',
    component: ReporteProfesores,
  },
      {
    path: '/configuracion',
    name: 'Configuracion',
    component: Configuracion,
  },
];
