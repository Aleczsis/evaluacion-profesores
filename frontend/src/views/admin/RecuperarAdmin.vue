<template>
  <div class="page">
    <header class="header">
      <img src="/logo.png" alt="Logo" />
    </header>

    <div class="recuperar-container">
      <div class="recuperar-box">
        <h2>Reestablecer Contraseña</h2>
        <p class="recuperar-message">
          Ingrese su correo institucional. Le enviaremos un correo electrónico con un enlace para restablecer tu contraseña.
        </p>
        <input v-model="correo" type="email" placeholder="Correo electrónico" />
        <button @click="recuperar">Enviar</button>
      </div>
    </div>

    <footer class="footer">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Declaramos la propiedad 'correo'
      correo: '',
    };
  },
  methods: {
    recuperar() {
      // Aquí va la lógica para recuperar la contraseña
      console.log('Correo enviado a:', this.correo);
    },
  },
};
</script>


<style src="@/assets/Recuperar.css"></style>
<style src="@/assets/Externo.css"></style>
