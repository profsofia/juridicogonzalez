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
            </ul>

          <BotonWhatsapp class="btn-wsp-contacto">
            Escribir por WhatsApp
          </BotonWhatsapp>
          
          <p class="atencion-nota">Atención virtual y presencial programada.</p>
        </div>

        <div class="form-col">
          <h3>Envíe su consulta</h3>
          <p>Complete el formulario y le responderé a la brevedad.</p>
          
          <form 
            name="contacto" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            @submit.prevent="enviarFormulario"
          >
            <input type="hidden" name="form-name" value="contacto" />
            
            <p style="display:none">
              <label>No completar: <input name="bot-field" v-model="botField" /></label>
            </p>

            <div class="form-group">
              <label for="nombre">Nombre y Apellido</label>
              <input type="text" id="nombre" name="nombre" v-model="formData.nombre" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" v-model="formData.email" required>
            </div>

            <div class="form-group">
              <label for="telefono">Teléfono (Opcional)</label>
              <input type="tel" id="telefono" name="telefono" v-model="formData.telefono">
            </div>

            <div class="form-group">
              <label for="mensaje">Su Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="6" v-model="formData.mensaje" required></textarea>
            </div>

            <button type="submit" class="btn-enviar" :disabled="enviando">
              {{ enviando ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>

            <p v-if="mensajeEstado" class="form-status" :class="{ 'status-error': esError }">
              {{ mensajeEstado }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BotonWhatsapp from '../components/BotonWhatsapp.vue';
import { ref, reactive } from 'vue';

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: ''
});
const botField = ref(''); // Para el honeypot
const enviando = ref(false);
const mensajeEstado = ref('');
const esError = ref(false);

// Función para codificar los datos para Netlify
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const enviarFormulario = async () => {
  if (botField.value !== "") return;

  enviando.value = true;
  mensajeEstado.value = '';
  esError.value = false;

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contacto", // Importante: debe coincidir con el name del form
        "nombre": formData.nombre,
        "email": formData.email,
        "telefono": formData.telefono,
        "mensaje": formData.mensaje,
        "bot-field": botField.value
      }).toString()
    });

    if (response.ok) {
      mensajeEstado.value = '¡Consulta recibida! Nos pondremos en contacto pronto.';
      esError.value = false;
      Object.keys(formData).forEach(key => formData[key] = ''); // Limpieza rápida
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (error) {
    mensajeEstado.value = 'Hubo un error al enviar. Por favor, intente por WhatsApp.';
    esError.value = true;
  } finally {
    enviando.value = false;
  }
}
</script>

<style scoped>
/* (Mantenemos tus estilos originales, eliminando los del mapa) */
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
.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
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
.atencion-nota {
  font-style: italic;
  color: #666;
  font-size: 0.9rem;
}
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
  color: #fff;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-enviar:hover:not(:disabled) {
  background-color: #071f30;
  transform: translateY(-2px);
}
.btn-enviar:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  font-weight: 700;
  color: #2e7d32;
}
.form-status.status-error {
  color: #d32f2f;
}

@media (max-width: 900px) {
  .contacto-grid {
    grid-template-columns: 1fr;
  }
}
</style>