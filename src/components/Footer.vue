<template>
  <footer class="footer">
    <div class="container footer-content">
      
      <div class="footer-col">
        <h3>Jurídico González</h3>
        <p>Asesoramiento legal simple y entendible.</p>
        <p>&copy; 2025. Todos los derechos reservados.</p>
        <p>Dominio: {{ dominio }}</p>
      </div>

      <div class="footer-col">
        <h3>Navegación</h3>
        <ul>
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li><RouterLink to="/sobre-mi">Sobre Mí</RouterLink></li>
          <li><RouterLink to="/servicios">Servicios</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Contacto Rápido</h3>
        <p>Av. Ficticia 123, Oficina A</p>
        <p>Buenos Aires, Argentina</p>
        <p>Email: info@juridicogonzalez.com</p>
        <BotonWhatsapp class="footer-btn-wsp">
          Escribir por WhatsApp
        </BotonWhatsapp>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BotonWhatsapp from './BotonWhatsapp.vue'

// Usamos el dato que nos dio el cliente
const dominio = 'juridicogonzalez.com'
</script>

<style scoped>
.footer {
  background-color: var(--color-primario);
  color: var(--color-texto-claro);
  padding: 3rem 0;
  margin-top: 4rem; /* Separa el footer del contenido */
}

.footer a {
  color: var(--color-texto-claro);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: var(--color-acento);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h3 {
  color: var(--color-fondo); /* Blanco */
  font-family: var(--fuente-titulos);
  margin-bottom: 1rem;
}

.footer-col p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 0.5rem;
}

.footer-btn-wsp {
  margin-top: 1rem;
  padding: 0.6rem 1rem; /* Más pequeño para el footer */
  font-size: 0.9rem;
}

/* Hacemos el footer responsivo */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>