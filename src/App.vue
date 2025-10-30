<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' // <-- 1. IMPORTAR
</script>

<template>
  <Navbar />
  
  <main>
    <RouterView />
  </main>

  <Footer /> </template>

<style scoped>
main {
  padding-top: 65px; /* Altura aprox de la navbar fija */
  
  /* Esto evita que el footer se suba en páginas con poco contenido */
  min-height: 70vh; 
}
</style>