<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo.svg' // <-- 1. Importamos el logo

// 2. Creamos una variable reactiva para el estado del menú móvil
const isMobileMenuOpen = ref(false)

// 3. Función para cerrar el menú (la usaremos al hacer clic en un link)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      
      <RouterLink to="/" class="logo-link" @click="closeMobileMenu">
        <img :src="logo" alt="Logo Jurídico González" class="logo-img" />
        <span class="logo-text">Jurídico González</span>
      </RouterLink>

      <button 
        class="mobile-nav-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <nav class="nav-menu" :class="{ 'menu-open': isMobileMenuOpen }">
        <ul>
          <li @click="closeMobileMenu"><RouterLink to="/">Inicio</RouterLink></li>
          <li @click="closeMobileMenu"><RouterLink to="/sobre-mi">Sobre Mí</RouterLink></li>
          <li @click="closeMobileMenu"><RouterLink to="/servicios">Servicios</RouterLink></li>
          <li @click="closeMobileMenu"><RouterLink to="/blog">Blog</RouterLink></li>
          <li @click="closeMobileMenu">
            <RouterLink to="/contacto" class="nav-contact">Contacto</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* --- Estilos Base de la Navbar --- */
.navbar {
  background-color: var(--color-fondo);
  border-bottom: 1px solid #eee;
  padding: 0.8rem 0; /* Un poco menos de padding vertical */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- Logo --- */
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 80px; /* Ajusta la altura de tu logo */
  margin-right: 0.5rem;
}

.logo-text {
  font-family: var(--fuente-titulos);
  font-size: 1.4rem; /* Un poco más chico para que entre el logo */
  font-weight: 700;
  color: var(--color-primario);
}

/* --- Navegación Desktop --- */
.nav-menu ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.nav-menu li {
  margin-left: 1.5rem;
}

.nav-menu li a {
  text-decoration: none;
  color: var(--color-texto);
  font-weight: 700;
  transition: color 0.3s ease;
  padding-bottom: 5px;
}

.nav-menu li a:hover,
.nav-menu li a.router-link-exact-active {
  color: var(--color-acento);
  border-bottom: 2px solid var(--color-acento);
}

.nav-contact {
  background-color: var(--color-acento);
  color: var(--color-fondo);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-contact:hover {
  background-color: var(--color-acento-hover);
  color: var(--color-fondo);
  border-bottom: none; /* Sacamos el borde especial para el botón */
}

/* --- Ocultamos el botón hamburguesa en desktop --- */
.mobile-nav-toggle {
  display: none;
}


/* --- INICIA RESPONSIVE --- */
/* Usamos 900px como breakpoint porque el menú es largo */
@media (max-width: 900px) {
  
  /* 1. Mostramos el botón hamburguesa */
  .mobile-nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 110; /* Encima del menú */
  }

  .hamburger-line {
    width: 30px;
    height: 3px;
    background-color: var(--color-primario);
    border-radius: 3px;
    transition: all 0.3s linear;
  }
  
  /* 2. Ocultamos el menú desktop */
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%; /* Empieza fuera de la pantalla */
    width: 70%;
    height: 100vh;
    background-color: var(--color-fondo);
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    transition: right 0.3s ease-in-out;
    padding-top: 6rem; /* Espacio para que no choque con la navbar */
  }
  
  /* 3. Mostramos el menú cuando se activa */
  .nav-menu.menu-open {
    right: 0;
  }

  /* 4. Adaptamos la lista */
  .nav-menu ul {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav-menu li {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }
  
  .nav-menu li a {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }
  
  .nav-menu li a:hover,
  .nav-menu li a.router-link-exact-active {
    border-bottom: none; /* Quitamos borde */
    background-color: var(--color-fondo-secundario);
    color: var(--color-acento);
  }

  .nav-contact {
    display: inline-block; /* Para que funcione el padding */
    margin-top: 1rem;
  }
}
</style>