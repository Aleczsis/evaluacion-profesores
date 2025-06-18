<template>
  <Menu>
    <main class="contenido-principal">
      <!-- Barra de acciones -->
      <div class="actions">
        <input type="text" placeholder="Buscar grupo..." />
        <select>
          <option value="">Filtrar por asignatura</option>
          <option>Matematicas</option>
          <option>Física</option>
        </select>
        <button class="btn-register" @click="mostrarFormulario = true">Registrar Alumno Manual</button>
        <button class="btn-upload" @click="mostrarCSV = true">Cargar CSV</button>
      </div>

      <!-- Modal con el formulario -->
      <div v-if="mostrarFormulario" class="modal-overlay">
        <div class="modal-content">
          <GruposManual @cerrar="mostrarFormulario = false" />
        </div>
      </div>

      <!-- Modal con la carga CSV -->
      <div v-if="mostrarCSV" class="modal-csv">
        <div class="modal-content">
          <CsvGrupos @cerrar="mostrarCSV = false" />
        </div>
      </div>

      <!-- Tabla con scroll horizontal -->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del grupo</th>
              <th>Asignatura</th>
              <th>Profesor</th>
              <th>Acciones</th>

            </tr>
          </thead>
          <tbody>
            <!-- Fila ejemplo 1 -->
            <tr>
              <td>GR001</td>
              <td>Grupo A</td>
              <td>Matematicas</td>
              <td>Laura Martines</td>

              <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Eliminar</button>
              </td>
            </tr>

            <!-- Fila ejemplo 2 -->
            <tr>

              <td>GR002</td>
              <td>Grupo B</td>
              <td>Física</td>
              <td>José Herrera</td>
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
import Menu from '@/layouts/Menu.vue';
import GruposManual from '@/components/GruposManual.vue'
import CsvGrupos from '@/components/CsvGrupos.vue'

const mostrarFormulario = ref(false)
const mostrarCSV = ref(false)
</script>

<style src="@/assets/Registros.css"></style>
