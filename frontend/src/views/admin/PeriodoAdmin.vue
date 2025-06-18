<template>
  <Menu>
    <div class="contenido-principal">
      <h1 class="titulo">Activar Encuesta</h1>

      <div class="table-wrapper">
        <table class="tabla-periodos">
          <thead>
            <tr>
              <th>Periodo</th>
              <th></th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(periodo, index) in periodos" :key="index">
              <td>{{ periodo }}</td>
              <td><button class="boton-verde">Activar</button></td>
              <td><button class="boton-rojo">Desactivar</button></td>
              <td><button class="boton-azul">Publicar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Menu>
</template>

<script>
import Menu from '@/layouts/Menu.vue';
import '@/assets/Contenido.css'; 
import '@/assets/botones.css';

export default {
  name: 'PeriodoAdmin',
  components: {
    Menu
  },
  data() {
    return {
      periodos: [
        'Primer cuatrimestre',
        'Segundo cuatrimestre',
        'Tercer cuatrimestre',
        'Cuarto cuatrimestre',
        'Quinto cuatrimestre',
        'Sexto cuatrimestre',
        'Séptimo cuatrimestre',
        'Octavo cuatrimestre',
        'Noveno cuatrimestre',
        'Décimo cuatrimestre'
      ]
    };
  }
};
</script>