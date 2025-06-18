<template>
  <Menu>
    <div class="contenido-principal">
      <h1 class="titulo">Configuración</h1>
      
      <div class="config-box">

        <label>Nombre:</label>
        <input type="text" placeholder="Nombre" v-model="nombre" />

        <label>Apellido:</label>
        <input type="text" placeholder="Apellido" v-model="apellido" />

        <label>Correo electronico:</label>
        <input type="email" placeholder="Correo@electronico.com" v-model="correo" />

        <label>Contraseña:</label>
        <div @click="mostrarContraseña = true">
          <input type="password" value="********" readonly />
        </div>

        <button class="boton-actualizar">Actualizar</button>
      </div>

      <Contraseña v-if="mostrarContraseña" @cerrar="mostrarContraseña = false" />
    </div>
  </Menu>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '@/layouts/Menu.vue'
import Contraseña from '@/components/Contraseña.vue'

const nombre = ref('')
const apellido = ref('')
const correo = ref('')
const mostrarContraseña = ref(false)
</script>

<style src="@/assets/Contenido.css"></style>
<style src="@/assets/botones.css"></style>
