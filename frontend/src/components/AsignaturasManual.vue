<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="register-container">
        <h1>Registrar Asignatura Manualmente</h1>
        
        <form @submit.prevent="registrarAsignatura" class="register-form">
          <div class="form-group">
            <label for="nombre">Nombre de la Asignatura</label>
            <input type="text" id="nombre" v-model="asignatura.nombre" placeholder="Ej. Álgebra Lineal" />
          </div>

          <!-- Departamento o Carrera -->    
          <div class="form-group">
            <label for="departamento">Departamento / Carrera</label>
            <select id="departamento" v-model="asignatura.departamento">
              <option value="">Seleccione</option>
              <option>Matemáticas</option>
              <option>Física</option>
              <option>Lenguaje</option>
              <option>Tecnología</option>
            </select>
          </div>
          
          <!-- Nivel o Semestre -->
          <div class="form-group">
            <label for="semestre">Cuatrimestre</label>
            <input type="number" id="semestre" v-model.number="asignatura.semestre" placeholder="Ej. 3" />
          </div>

          <!-- Botón de registro -->
          <div class="button-group">
              <button type="button" class="register-rojo" @click="$emit('cerrar')">Cancelar</button>
              <button type="submit" class="register-verde">Registrar Asignatura</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const asignatura = ref({
  nombre: '',
  departamento: '',
  semestre: null,
  duracion: null
})

const registrarAsignatura = () => {
  // Aquí puedes agregar la lógica para guardar la asignatura (API, store, etc.)
  console.log('Datos de la asignatura:', asignatura.value)
  alert('Asignatura registrada correctamente')
}
</script>

<style src="@/assets/RegistroManual.css" scoped></style>

