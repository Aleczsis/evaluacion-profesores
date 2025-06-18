<template>
  <Menu>
    <div class="dashboard-container">
    <h1 class="titulo">Bienvenido al sistema de evaluación docentes</h1>
     <div class="imagen-wrapper">  <!-- Contenedor con overflow: hidden -->
    <img src="/carreras.png" alt="Carreras" class="imagen-carreras" />
    </div>
    </div>
  </Menu>
</template>

<script>
import Menu from '@/layouts/Menu.vue';

export default {
  name: "Dashboard",
  components: {
    Menu
  }
};
</script>



<style src="@/assets/DashboardAdmin.css"></style>

