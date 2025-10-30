<template>
  <div class="contacto">
    <div class="container">

      <div class="header-pagina">
        <h1>Contacto</h1>
        <p>Envíe su consulta. La primera evaluación es sin cargo.</p>
      </div>

      <div class="contacto-grid">

        <div class="info-col">
          <h3>Información de Contacto</h3>
          <p>Utilice el canal que le resulte más cómodo. La vía más rápida para una respuesta es WhatsApp.</p>
          
          <ul class="info-lista">
            <li><strong>Email:</strong> info@juridicogonzalez.com</li>
            <li><strong>Teléfono:</strong> (011) 1234-5678</li>
            <li><strong>Dirección:</strong> Av. Ficticia 123, Oficina A, CABA.</li>
          </ul>

          <BotonWhatsapp class="btn-wsp-contacto">
            Escribir por WhatsApp
          </BotonWhatsapp>

          <h3 class="titulo-mapa">Ubicación de la Oficina</h3>
          <div class="mapa-placeholder">
            <p>(Mapa de Google Maps)</p>
          </div>
        </div>

        <div class="form-col">
          <h3>Envíe su consulta</h3>
          <p>Complete el formulario y le responderé a la brevedad.</p>
          
          <form @submit.prevent="enviarFormulario">
            <div class="form-group">
              <label for="nombre">Nombre y Apellido</label>
              <input type="text" id="nombre" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required>
            </div>

            <div class="form-group">
              <label for="telefono">Teléfono (Opcional)</label>
              <input type="tel" id="telefono">
            </div>

            <div class="form-group">
              <label for="mensaje">Su Mensaje</label>
              <textarea id="mensaje" rows="6" required></textarea>
            </div>

            <button type="submit" class="btn-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BotonWhatsapp from '../components/BotonWhatsapp.vue';

// Lógica simple para el formulario (por ahora solo previene el envío)
const enviarFormulario = () => {
  alert('Formulario enviado (simulación). ¡Gracias por su consulta!');
  // Aquí iría la lógica para enviar a un backend o servicio (ej. Formspree, Netlify Forms)
}
</script>

<style scoped>
/* Estilo de Cabecera */
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

/* Grilla de Contacto */
.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Columna de Info */
.info-col h3 {
  font-size: 1.5rem;
  color: var(--color-primario);
  margin-bottom: 1rem;
}
.info-lista {
  list-style: none;
  margin: 1.5rem 0;
  line-height: 2;
}
.btn-wsp-contacto {
  margin-bottom: 2rem;
}
.titulo-mapa {
  margin-top: 2rem;
}
.mapa-placeholder {
  width: 100%;
  height: 250px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  border-radius: 5px;
}

/* Columna de Formulario */
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: var(--fuente-cuerpo);
  font-size: 1rem;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primario);
  box-shadow: 0 0 5px rgba(10, 42, 67, 0.3);
}

.btn-enviar {
  background-color: var(--color-primario);
  color: var(--color-fondo);
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-enviar:hover {
  background-color: #071f30; /* Un azul más oscuro */
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 900px) {
  .contacto-grid {
    grid-template-columns: 1fr; /* 1 columna en mobile */
  }
}
</style>