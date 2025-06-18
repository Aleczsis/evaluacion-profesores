<template>
  <MenuAlumno>
    <main class="contenido-principal">
      <!-- Barra de acciones -->
      <div class="actions">
        <input type="text" placeholder="Buscar Materia..." />
      </div>

      <!-- Tabla -->
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Profesor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quimica</td>
              <td>Fernando Perez</td>
              <td>
                <button class="boton-azul">Evaluar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </MenuAlumno>
</template>

<script setup>
import MenuAlumno from '@/layouts/MenuAlumno.vue'
</script>

<style src="@/assets/Registros.css"></style>
<style src="@/assets/botones.css"></style>
