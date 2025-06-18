<template>
  <MenuAlumno>
    <div class="seleccion-contenedor">
        <h1>Bienvenido al sistema de evaluación docentes</h1>
        
      <div class="seleccion-formulario">
        <div class="campo">
            <label>Selecciona tu carrera</label>
            <select v-model="carreraSeleccionada">
                <option disabled value="">Carrera</option>
                <option>Ingeniería en Sistemas</option>
                <option>Ingeniería Civil</option>
                <option>Arquitectura</option>
            </select>
        </div>

        <div class="campo">
            <label>Selecciona tu grupo</label>
            <select v-model="grupoSeleccionado">
                <option disabled value="">Grupo</option>
                <option>Grupo 101</option>
                <option>Grupo 202</option>
                <option>Grupo 303</option>
            </select>
        </div>
      </div>
    
    </div>
    <div class="contenedor">
      <button class="boton-aceptar" @click="aceptar">Aceptar</button>
    </div>
  </MenuAlumno>
</template>

<script>
import MenuAlumno from '../../layouts/MenuAlumno.vue';

export default {
  components: {
    MenuAlumno
  },
  data() {
    return {
      carreraSeleccionada: "",
      grupoSeleccionado: ""
    };
  },
  methods: {
    aceptar() {
      if (this.carreraSeleccionada && this.grupoSeleccionado) {
        alert(
          `Carrera: ${this.carreraSeleccionada}, Grupo: ${this.grupoSeleccionado}`
        );
      } else {
        alert("Por favor selecciona una carrera y un grupo.");
      }
    }
  }
};
</script>

<style src="@/assets/Externo.css"></style>
<style src="@/assets/Inicio.css"></style>
