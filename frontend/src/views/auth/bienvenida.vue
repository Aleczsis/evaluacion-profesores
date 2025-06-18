<template>
  <div class="page">
    <!-- Encabezado superior -->
    <header class="header">
      <img src="/logo.png" alt="Logo" />
    </header>

    <main class="main-bienvenida">
    <!-- Contenido principal -->
    <div class="container bienvenida-container">
      <div class="bienvenida-box">
        <h2 class="titulo-principal">Bienvenido al sistema</h2>
        <h2 class="subtitulo">
          Encuestas para la evaluación docente de la Universidad Politécnica de Texcoco.
        </h2>
        <div class="botones">
          <button class="boton profesores" @click="irAAdmin">👨‍🏫 Administrador</button>
          <button class="boton alumnos" @click="irAAlumnos">🎓 Alumnos</button>
        </div>
      </div>
    </div>
    </main>    

    <!-- Pie de página -->
    <footer class="footer">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const irAAdmin = () => {
  router.push('/login');
};

const irAAlumnos = () => {
  router.push('/login-alumno');
};
</script>

<style src="@/assets/Externo.css"></style>
<style src="@/assets/bienvenida.css"></style>