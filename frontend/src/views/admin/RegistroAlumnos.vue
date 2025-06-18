<template>
  <Menu>
    <main class="contenido-principal">
      <!-- Barra de acciones -->
      <div class="actions">
        <input type="text" placeholder="Buscar alumno..." />
        <select>
          <option value="">Filtrar por grupo</option>
          <option>Grupo A</option>
          <option>Grupo B</option>
        </select>
        <button class="btn-register" @click="mostrarFormulario = true">Registrar Alumno Manual</button>
        <button class="btn-upload" @click="mostrarCSV = true">Cargar CSV</button>
      </div>

      <!-- Modal con el formulario -->
      <div v-if="mostrarFormulario" class="modal-overlay">
        <div class="modal-content">
          <AlumnosManual @cerrar="mostrarFormulario = false" />
        </div>
      </div>

      <!-- Modal con la carga CSV -->
      <div v-if="mostrarCSV" class="modal-csv">
        <div class="modal-content">
          <CsvAlumnos @cerrar="mostrarCSV = false" />
        </div>
      </div>

      <!-- Tabla -->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Carrera</th>
              <th>Grupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20230101</td>
              <td>Ana López</td>
              <td>Ingenieria en sistemas</td>
              <td>A</td>
              <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>20230102</td>
              <td>Mario Ruiz</td>
              <td>Ingenieria en robotica</td>
              <td>B</td>
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
import AlumnosManual from '@/components/AlumnosManual.vue'
import CsvAlumnos from '@/components/CsvAlumnos.vue'

const mostrarFormulario = ref(false)
const mostrarCSV = ref(false)
</script>

<style src="@/assets/Registros.css"></style>
