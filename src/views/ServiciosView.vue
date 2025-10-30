<template>
  <div class="servicios">
    <div class="container">

      <div class="header-pagina">
        <h1>Áreas de Práctica</h1>
        <p>Soluciones legales enfocadas en sus necesidades.</p>
      </div>

      <div class="servicios-grid">
        
        <div class="servicio-card">
          <h3>Derecho de Familia</h3>
          <p>Asesoramiento y representación en casos de divorcio, régimen de visitas, cuota alimentaria y uniones convivenciales. Un acompañamiento humano en momentos difíciles.</p>
          <RouterLink to="/contacto" class="card-link">Consultar sobre esto</RouterLink>
        </div>

        <div class="servicio-card">
          <h3>Derecho Laboral</h3>
          <p>Defensa de los derechos del trabajador. Reclamos por despidos injustificados, trabajo no registrado, accidentes de trabajo (ART) y diferencias salariales.</p>
          <RouterLink to="/contacto" class="card-link">Consultar sobre esto</RouterLink>
        </div>

        <div class="servicio-card">
          <h3>Sucesiones</h3>
          <p>Gestión integral de procesos sucesorios, declaratorias de herederos, testamentos e inscripción de bienes. Asegure la correcta transferencia de su patrimonio.</p>
          <RouterLink to="/contacto" class="card-link">Consultar sobre esto</RouterLink>
        </div>

        <div class="servicio-card">
          <h3>Contratos y Alquileres</h3>
          <p>Redacción y revisión de contratos comerciales y de alquiler. Asesoramiento para propietarios e inquilinos, y gestión de reclamos por incumplimiento contractual.</p>
          <RouterLink to="/contacto" class="card-link">Consultar sobre esto</RouterLink>
        </div>
        
        </div>

      <div class="cta-seccion">
        <h2>¿Su caso no está en la lista?</h2>
        <p>Cada situación es única. Contácteme para una evaluación personalizada de su caso.</p>
        <BotonWhatsapp>Realizar una consulta</BotonWhatsapp>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BotonWhatsapp from '../components/BotonWhatsapp.vue'
</script>

<style scoped>
/* Estilo de Cabecera (similar a SobreMiView) */
.header-pagina {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 2px solid var(--color-acento);
  margin-bottom: 3rem;
}
.header-pagina h1 {
  font-size: 2.8rem;
}
.header-pagina p {
  font-size: 1.2rem;
  color: #555;
}

/* Grilla de Servicios */
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas en desktop */
  gap: 2rem;
}

.servicio-card {
  background: var(--color-fondo-secundario);
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.servicio-card h3 {
  font-size: 1.6rem;
  color: var(--color-primario);
  margin-bottom: 1rem;
}

.servicio-card p {
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1; /* Empuja el link hacia abajo */
}

.card-link {
  color: var(--color-acento);
  text-decoration: none;
  font-weight: 700;
  margin-top: 1rem;
}
.card-link:hover {
  text-decoration: underline;
}

/* Sección CTA */
.cta-seccion {
  text-align: center;
  padding: 4rem 0;
  margin-top: 3rem;
  background-color: var(--color-fondo-secundario);
  border-radius: 8px;
}
.cta-seccion h2 {
  font-size: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .servicios-grid {
    grid-template-columns: 1fr; /* 1 columna en mobile */
  }
}
</style>