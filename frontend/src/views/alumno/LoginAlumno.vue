<template>
  <div class="page">
    <header class="header">
      <img src="/logo.png" alt="Logo" />
    </header>

    <main class="main-login">
      <div class="login-container">
        <div class="login-box">
          <h2>Inicio de sesión</h2>
          <h3>Alumnos</h3>
          <input type="text" placeholder="Matrícula" />
          <input type="password" placeholder="Contraseña" />
          <a href="/recuperar">¿Has olvidado tu contraseña?</a>
          <button>Ingresar</button>
          <!--<button class="secondary-button">Registrarse</button>-->
        </div>
      </div>
    </main>

    <!-- Pie de página -->
    <footer class="footer">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>
  </div>
</template>

<style src="@/assets/Externo.css"></style>
<style src="@/assets/Login.css"></style>
