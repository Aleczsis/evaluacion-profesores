<template>
  <div class="modal-cuadro">
    <div class="modal-password">
      <h2>Contraseña</h2>

      <label>Nueva contraseña:</label>
      <div class="password-input">
        <input :type="mostrar1 ? 'text' : 'password'" placeholder="Contraseña" v-model="nueva" />
        <span @click="mostrar1 = !mostrar1">👁️</span>
      </div>

      <label>Repetir contraseña:</label>
      <div class="password-input">
        <input :type="mostrar2 ? 'text' : 'password'" placeholder="Contraseña" v-model="repetir" />
        <span @click="mostrar2 = !mostrar2">👁️</span>
      </div>

      <div class="boton-group" >
        <button class="boton-rojo" @click="$emit('cerrar')">Cancelar</button>
        <button class="boton-verde" @click="guardar">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nueva = ref('')
const repetir = ref('')
const mostrar1 = ref(false)
const mostrar2 = ref(false)

const guardar = () => {
  if (nueva.value !== repetir.value) {
    alert('Las contraseñas no coinciden.')
    return
  }
  alert('Contraseña actualizada correctamente.')
}
</script>

<style src="@/assets/Contenido.css"></style>
<style src="@/assets/botones.css"></style>