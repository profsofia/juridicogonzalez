<script setup>
import BotonWhatsapp from '../components/BotonWhatsapp.vue'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-content">
        <h1>Asesoramiento Legal Simple y Entendible </h1>
        <p class="subtitulo">
          Defendemos sus derechos con Confianza, Lealtad y Compromiso.
        </p>
        <BotonWhatsapp>Agende su Consulta Virtual</BotonWhatsapp>
      </div>
    </section>

    <section class="bienvenida">
      <div class="container">
        <h2>Un enfoque claro sobre la justicia</h2>
        <p>
          Entender sus derechos es el primer paso. Mi objetivo es brindarle la información legal necesaria para situarlo en el contexto de su reclamo[cite: 6]. Sin sorpresas, sin lenguaje complicado.
        </p>
        </div>
    </section>
    
    <section class="servicios-preview">
       <div class="container">
         <h2>Áreas de Práctica</h2>
         <p>Especialista en [Área 1], [Área 2] y [Área 3].</p>
         <RouterLink to="/servicios" class="btn-secundario">Ver todos los servicios</RouterLink>
       </div>
    </section>
  </div>
</template>

<style scoped>
/* 1. Hero */
.hero {
  background-color: var(--color-primario);
  color: var(--color-texto-claro);
  padding: 6rem 0;
  text-align: center;
}

.hero h1 {
  color: var(--color-fondo);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero .subtitulo {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  font-weight: 300;
}

/* 2. Bienvenida */
.bienvenida {
  padding: 4rem 0;
  text-align: center;
}

.bienvenida h2 {
  font-size: 2.5rem;
}

.bienvenida p {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

/* 3. Servicios Preview */
.servicios-preview {
  padding: 4rem 0;
  background-color: var(--color-fondo-secundario);
  text-align: center;
}

.servicios-preview h2 {
  font-size: 2.5rem;
}

.btn-secundario {
  display: inline-block;
  background-color: transparent;
  color: var(--color-primario);
  border: 2px solid var(--color-primario);
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.btn-secundario:hover {
  background-color: var(--color-primario);
  color: var(--color-fondo);
}
</style>