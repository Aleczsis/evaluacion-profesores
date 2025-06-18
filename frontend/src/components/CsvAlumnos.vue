<template>
  <div class="modal-csv">
    <div class="modal-content">
      <div class="csv-container">
        <h1>Cargar Alumnos por CSV</h1>
        <!-- Área punteada -->
        <div class="csv-upload">
          <input type="file" accept=".csv" @change="handleFileUpload" />
          <p>Formato: <strong>matricula, nombre, carrera, grupo</strong></p>
        </div>

        <!-- Botones por fuera del cuadro gris -->
        <div class="csv-buttons">
          <button @click="$emit('cerrar')" class="cancel-button">Cancelar</button>
          <button @click="cargarCSV" class="cargar-button">Cargar CSV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const file = ref(null)

const handleFileUpload = (event) => {
  file.value = event.target.files[0]
}

const cargarCSV = () => {
  if (!file.value) {
    alert('Por favor, selecciona un archivo CSV.')
    return
  }

  console.log('Archivo seleccionado:', file.value)
  alert('Archivo de alumnos cargado correctamente')
}
</script>

<style src="@/assets/RegistroCSV.css" scoped></style>
