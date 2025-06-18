<template>
  <Menu>
    <main class="contenido-principal">
      <!-- Barra de acciones -->
      <div class="actions">
        <input type="text" placeholder="Buscar por nombre o ID" />
        <select>
          <option value="">Materia</option>
          <option>Matematicas</option>
          <option>Física</option>
        </select>
        <button class="btn-register" @click="mostrarFormulario = true">Registrar Profesor Manual</button>
        <button class="btn-upload" @click="mostrarCSV = true">Cargar CSV</button>
      </div>

      <!-- Modal con el formulario -->
      <div v-if="mostrarFormulario" class="modal-overlay">
        <div class="modal-content">
          <ProfesoresManual @cerrar="mostrarFormulario = false" />
        </div>
      </div>

      <!-- Modal con la carga CSV -->
      <div v-if="mostrarCSV" class="modal-csv">
        <div class="modal-content">
          <CsvProfesores @cerrar="mostrarCSV = false" />
        </div>
      </div>

      <!-- Tabla con scroll horizontal -->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Materia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Fila ejemplo 1 -->
            <tr>
              <td>PR001</td>
              <td>Laura Martinez</td>
              <td>Matematicas</td>
              <td>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Eliminar</button>
              </td>
            </tr>

            <!-- Fila ejemplo 2 -->
            <tr>
              <td>PR002</td>
              <td>José Hernandez</td>
              <td>Física</td>
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
import ProfesoresManual from '@/components/ProfesoresManual.vue'
import CsvProfesores from '@/components/CsvProfesores.vue'

const mostrarFormulario = ref(false)
const mostrarCSV = ref(false)
</script>

<style src="@/assets/Registros.css"></style>
