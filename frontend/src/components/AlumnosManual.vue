<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="register-container">
        <h1>Registrar Alumno Manualmente</h1>

        <form @submit.prevent="registrarAlumno" class="register-form">
          <div class="form-group">
            <label for="nombre">Nombre completo</label>
            <input type="text" id="nombre" v-model="alumno.nombre" placeholder="Ej. Ana López" />
          </div>

          <div class="form-group">
            <label for="matricula">Matrícula</label>
            <input type="text" id="matricula" v-model="alumno.matricula" placeholder="Ej. 20230101" />
          </div>

          <div class="form-group">
            <label for="grupo">Grupo</label>
            <select id="grupo" v-model="alumno.grupo">
              <option value="">Seleccione</option>
              <option>Grupo A</option>
              <option>Grupo B</option>
              <option>Grupo C</option>
            </select>
          </div>

          <div class="form-group">
            <label for="carrera">Carrera</label>
            <input type="text" id="carrera" v-model="alumno.carrera" placeholder="Ej. Ingeniería en Sistemas" />
          </div>

          <div class="button-group">
            <button type="button" class="register-rojo" @click="$emit('cerrar')">Cancelar</button>
            <button type="submit" class="register-verde">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const alumno = ref({
  nombre: '',
  matricula: '',
  grupo: '',
  carrera: ''
})

const registrarAlumno = () => {
  console.log('Datos del alumno:', alumno.value)
  alert('Alumno registrado correctamente')
}
</script>

<style src="@/assets/RegistroManual.css" scoped></style>
