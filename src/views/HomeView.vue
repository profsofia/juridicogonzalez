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
          Entender sus derechos es el primer paso. Mi objetivo es brindarle la información legal necesaria para situarlo en el contexto de su reclamo. Sin sorpresas, sin lenguaje complicado.
        </p>
        </div>
    </section>
    
<section class="servicios-preview">
  <div class="container">
    <h2>Áreas de Práctica</h2>
    <p class="preview-subtitulo">Un resumen de nuestras principales áreas de especialización:</p>
    
    <div class="areas-grid">
      <div class="area-item">
        <h3>Derecho de Familia</h3>
        <p>Divorcios, cuota alimentaria y régimen de visitas.</p>
      </div>
      <div class="area-item">
        <h3>Derecho Laboral</h3>
        <p>Defensa del trabajador, despidos y reclamos a ART.</p>
      </div>
      <div class="area-item">
        <h3>Sucesiones</h3>
        <p>Gestión de declaratorias de herederos y testamentos.</p>
      </div>
    </div>

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
/* --- Estilos para la nueva grilla de servicios --- */

.servicios-preview .preview-subtitulo {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.area-item {
  background: var(--color-fondo); /* Blanco */
  padding: 1.5rem;
  border-radius: 5px;
  border-left: 4px solid var(--color-acento);
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}

.area-item h3 {
  font-size: 1.3rem;
  color: var(--color-primario);
  margin-bottom: 0.5rem;
}

.area-item p {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
}

/* --- Responsive para la grilla --- */
@media (max-width: 768px) {
  .areas-grid {
    grid-template-columns: 1fr;
  }
}
</style>