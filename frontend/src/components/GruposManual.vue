<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="register-container">
        <h1>Registrar Grupo Manualmente</h1>
        
        <form @submit.prevent="registrarGrupo" class="register-form">
          <!-- Nombre del grupo -->
          <div class="form-group">
            <label for="nombre">Nombre del Grupo</label>
            <input type="text" id="nombre" v-model="grupo.nombre" placeholder="Ej. Grupo 3B" />
          </div>

          <!-- Asignatura -->
          <div class="form-group">
            <label for="asignatura">Asignatura</label>
            <select id="asignatura" v-model="grupo.asignatura">
                <option value="">Seleccione</option>
                <option>Matemáticas</option>
                <option>Física</option>
            </select>
          </div>

          <!-- Profesor -->
          <div class="form-group">
            <label for="profesor">Profesor</label>
            <select id="profesor" v-model="grupo.profesor">
                <option value="">Seleccione</option>
                <option>Laura Martínez</option>
                <option>José Herrera</option>
            </select>
          </div>

            <!-- Botón de registro -->
          <div class="button-group">
            <button type="button" class="register-rojo" @click="$emit('cerrar')">Cancelar</button>
            <button type="submit" class="register-verde">Registrar Grupo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const grupo = ref({
  nombre: '',
  asignatura: '',
  profesor: ''
})

const registrarGrupo = () => {
  // Aquí puedes agregar la lógica para guardar el grupo (API, store, etc.)
  console.log('Datos del grupo:', grupo.value)
  alert('Grupo registrado correctamente')
}
</script>

<style src="@/assets/RegistroManual.css" scoped></style>
