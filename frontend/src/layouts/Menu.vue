<template>
  <div class="page-admin">
    <header class="header">
      <a href="/dashboard">
        <img src="/logo.png" alt="Logo" class="logo">
      </a>
      <div 
        class="hamburger" 
        :class="{ pressed: hamburgerPressed }" 
        @click="toggleMenu" 
        ref="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </header>

    <!-- Contenido dinámico -->
    <main class="contenido-principal">
      <slot></slot>
    </main>

    <!-- Pie de página -->
    <footer class="footer-admin">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>

    <!-- Menú lateral -->
    <div v-if="menuOpen" class="menu" ref="menu">
      <ul>
        <router-link to="/dashboard" @click="closeSubmenus">
          <li>Inicio</li>
        </router-link>
        <router-link to="/periodo" @click="closeSubmenus">
          <li>Periodo</li>
        </router-link>
        <li @click="toggleSubmenu('registro')" :class="{ active: submenuOpen === 'registro' }">
          Registro
          <ul v-if="submenuOpen === 'registro'" class="submenu">
            <router-link to="/registro-alumnos" @click="closeSubmenus">
              <li>Alumnos</li>
            </router-link>
            <router-link to="/registro-profesores" @click="closeSubmenus">
              <li>Profesores</li>
            </router-link>
            <router-link to="/registro-asignaturas" @click="closeSubmenus">
              <li>Asignaturas</li>
            </router-link>
            <router-link to="/registro-grupos" @click="closeSubmenus">
              <li>Grupos</li>
            </router-link>
          </ul>
        </li>
        <li @click="toggleSubmenu('reporte')" :class="{ active: submenuOpen === 'reporte' }">
          Reporte
          <ul v-if="submenuOpen === 'reporte'" class="submenu">
            <router-link to="/reporte-profesores" @click="closeSubmenus">
              <li>Profesores</li>
            </router-link>
            <li>Materias</li>
            <li>Grupos</li>
          </ul>
        </li>
        <li @click="closeSubmenus">Estadísticas</li>
            <router-link to="/configuracion" @click="closeSubmenus">
              <li>Configuración</li>
            </router-link>
        <li @click="logout">Cerrar sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuOpen: false,
      submenuOpen: null,
      hamburgerPressed: false,
    };
  },
  mounted() {
    // Detectar clics fuera del menú
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    // Eliminar el evento cuando el componente se destruye
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.hamburgerPressed = !this.hamburgerPressed;
    },
    toggleSubmenu(name) {
      this.submenuOpen = this.submenuOpen === name ? null : name;
    },
    closeSubmenus() {
      this.submenuOpen = null;
    },
    handleClickOutside(event) {
      // Verificar si el clic ocurrió fuera del menú o del botón hamburguesa
      if (this.menuOpen && 
          !this.$refs.menu.contains(event.target) && 
          !this.$refs.hamburger.contains(event.target)) {
        this.menuOpen = false;
        this.hamburgerPressed = false;  // Resetea el estado del botón hamburguesa
      }
    },
    logout() { // Este método está bien ahora
      // Elimina los datos de sesión (ajústalo a tu implementación)
      localStorage.removeItem('token');  // Ejemplo de eliminación de un token
      sessionStorage.removeItem('user'); // Si tienes datos de usuario en sessionStorage

      // Redirige a la página de bienvenida
      this.$router.push('/bienvenida');
    }
  },
};
</script>


<style scoped src="@/assets/Marco.css"></style>
<style scoped src="@/assets/Menu.css"></style>
