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

          <input type="text" placeholder="Matrícula" v-model="matricula" />
          <input type="password" placeholder="Contraseña" v-model="contraseña" />

          <a href="/recuperar">¿Has olvidado tu contraseña?</a>
          <button @click="login">Ingresar</button>

          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </div>
    </main>

    <footer class="footer">
      Sistema de encuestas © UNIVERSIDAD POLITÉCNICA DE TEXCOCO
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginAlumno',
  setup() {
    const matricula = ref('')
    const contraseña = ref('')
    const error = ref('')
    const router = useRouter()

    const login = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/alumnos/login', {
          matricula: matricula.value,
          contraseña: contraseña.value
        })

        localStorage.setItem('usuario', JSON.stringify(response.data.usuario))
        router.push('/inicio')

      } catch (err) {
        error.value = err.response?.data?.error || 'Error al iniciar sesión'
      }
    }

    return {
      matricula,
      contraseña,
      error,
      login
    }
  }
}
</script>

<style src="@/assets/Externo.css"></style>
<style src="@/assets/Login.css"></style>
