<template>
  <Menu>
    <main class="contenido-principal">
      <!-- Barra de acciones -->
      <div class="actions">
        <input type="text" placeholder="Buscar asignatura" />

        <button class="btn-register" @click="mostrarFormulario = true">Registrar Alumno Manual</button>
        <button class="btn-upload" @click="mostrarCSV = true">Cargar CSV</button>
      </div>

      <!-- Modal con el formulario -->
      <div v-if="mostrarFormulario" class="modal-overlay">
        <div class="modal-content">
          <AsignaturasManual @cerrar="mostrarFormulario = false" />
        </div>
      </div>

      <!-- Modal con la carga CSV -->
      <div v-if="mostrarCSV" class="modal-csv">
        <div class="modal-content">
          <CsvAsignatura @cerrar="mostrarCSV = false" />
        </div>
      </div>

      <!-- Tabla con scroll horizontal -->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Fila ejemplo 1 -->
            <tr>
              <td>MAT101</td>
              <td>Álgebra Lineal</td>
              <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Eliminar</button>
              </td>
            </tr>

            <!-- Fila ejemplo 2 -->
            <tr>
              <td>INF204</td>
              <td>Desarrollo Web</td>
              <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </Menu>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '@/layouts/Menu.vue'
import AsignaturasManual from '@/components/AsignaturasManual.vue'
import CsvAsignatura from '@/components/CsvAsignatura.vue'

const mostrarFormulario = ref(false)
const mostrarCSV = ref(false)
</script>

<style src="@/assets/Registros.css"></style>
