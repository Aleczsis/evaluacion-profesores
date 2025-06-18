<template>
  <div class="page">
    <header class="header">
      <img src="/logo.png" alt="Logo" />
      <div class="contenedor">
        <button @click="logout" class="sesion">Cerrar sesión</button>
      </div>
    </header>
    
    <!-- Contenido dinámico -->
    <main class="contenido-principal">
      <slot></slot>
    </main>

    <!-- Pie de página -->
    <footer class="footer">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    function logout() {
      localStorage.removeItem('token');
      sessionStorage.removeItem('user');
      router.push('/bienvenida');
    }

    return { logout };
  }
};
</script>

<style src="@/assets/Externo.css"></style>
<style src="@/assets/Contenido.css"></style>
