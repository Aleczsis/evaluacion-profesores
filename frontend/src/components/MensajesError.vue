<template>
  <div v-if="mensaje" class="mensaje-error">
    <div class="mensaje-contenedor">
      <span class="mensaje-texto">{{ mensaje }}</span>
      <span class="mensaje-cerrar" @click="cerrarMensaje">×</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MensajesError',
  props: {
    mensaje: {
      type: String,
      required: true
    }
  },
  methods: {
    cerrarMensaje() {
      this.$emit('cerrar')  // Emitimos el evento para manejarlo en el componente padre
    }
  }
}
</script>

<style scoped>
@import '@/assets/MensajesError.css';
</style>
