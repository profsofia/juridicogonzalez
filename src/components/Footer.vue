<template>
  <footer class="footer">
    <div class="container footer-content">
      
      <div class="footer-col">
        <h3>Jurídico González</h3>
        <p>Asesoramiento legal simple y entendible.</p>
        
        <div class="social-icons">
          <a href="https://instagram.com/usuario_cliente" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Jurídico González">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.77 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.623c-3.27 0-3.678.014-4.96.071-4.336.196-6.131 2.016-6.327 6.327-.057 1.282-.07 1.69-.07 4.96s.013 3.678.07 4.96c.196 4.311 1.991 6.131 6.327 6.327 1.282.057 1.69.07 4.96.07s3.678-.013 4.96-.07c4.336-.196 6.131-2.016 6.327-6.327.057-1.282.07-1.69.07-4.96s-.013-3.678-.07-4.96c-.196-4.311-1.991-6.131-6.327-6.327C15.678.55 15.27.54 12 .54zM12 6.824c-2.858 0-5.176 2.318-5.176 5.176s2.318 5.176 5.176 5.176 5.176-2.318 5.176-5.176-2.318-5.176-5.176-5.176zm0 8.732c-1.962 0-3.556-1.594-3.556-3.556s1.594-3.556 3.556-3.556 3.556 1.594 3.556 3.556-1.594 3.556-3.556 3.556zm5.23-8.083c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/usuario_cliente" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Jurídico González">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <p class="copyright">&copy; 2025. Todos los derechos reservados.</p>
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

const dominio = 'juridicogonzalez.com'
</script>

<style scoped>
.footer {
  background-color: var(--color-primario);
  color: var(--color-texto-claro);
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer a {
  color: var(--color-texto-claro);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h3 {
  color: var(--color-fondo);
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

/* --- INICIO: Estilos de Iconos --- */
.social-icons {
  display: flex;
  gap: 1.25rem; /* Espacio entre iconos */
  margin-top: 1rem;
}

.social-icons a svg {
  width: 26px;
  height: 26px;
  fill: var(--color-texto-claro);
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover svg {
  opacity: 1;
  fill: var(--color-acento); /* Color de acento al pasar el mouse */
  transform: scale(1.1);
}

.copyright {
  margin-top: 1rem; /* Espacio antes del copyright */
}
/* --- FIN: Estilos de Iconos --- */


.footer-btn-wsp {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  /* Centramos los iconos en mobile */
  .social-icons {
    justify-content: center;
  }
}
</style>