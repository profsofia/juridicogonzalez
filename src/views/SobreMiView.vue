<template>
  <div class="sobre-mi">
    <div class="container">
      
      <div class="header-pagina">
        <h1>Sobre Mí</h1>
        <p>Mi misión: Hacer la justicia simple y accesible para vos.</p>
      </div>

      <div class="contenido-grid">
        <div class="col-texto">
          <h2>Dr. Diego González</h2>
          <p class="introduccion">
            Soy un abogado comprometido con la transparencia. Durante años, he visto cómo las personas se sienten abrumadas por el lenguaje legal y los procesos complejos. 
          </p>
          <p>
            Mi objetivo principal es ser tu guía y tu representante, brindándote la <b>información legal necesaria para que entiendas el contexto de tu reclamo</b>. Sin sorpresas, sin falsas promesas, solo un análisis honesto de tu situación para encontrar la mejor estrategia legal. 
          </p>
        </div>
        
        <div class="col-imagen">
          <img :src="logo" alt="Logo de Jurídico González">
          <BotonWhatsapp class="btn-wsp-flotante">
            ¿Tenés una consulta?
          </BotonWhatsapp>
        </div>
      </div>
      </div> <section class="valores-seccion">
      <div class="container">
        <h3 class="titulo-valores">Mis Pilares Fundamentales</h3>
        <div class="valores-grid">
          <div class="valor-card">
            <h4>Confianza</h4>
            <p>Una relación abogado-cliente basada en la honestidad total desde la primera consulta.</p>
          </div>
          <div class="valor-card">
            <h4>Lealtad</h4>
            <p>Mi compromiso es 100% con tus intereses y la defensa de tus derechos afectados.</p>
          </div>
          <div class="valor-card">
            <h4>Compromiso</h4>
            <p>Dedicación y perseverancia para acompañarte durante todo el proceso.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import BotonWhatsapp from '../components/BotonWhatsapp.vue';
import logo from '@/assets/logo.svg'; 
</script>

<style scoped>
/* --- Cabecera --- */
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

/* --- Grilla de Bio (Texto + Logo) --- */
.contenido-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem; /* Espacio antes de la nueva sección */
}

.col-texto h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
.col-texto .introduccion {
  font-size: 1.2rem;
  font-weight: 700;
  color: #444;
}
.col-texto p {
  font-size: 1.1rem;
  line-height: 1.7;
}

.col-imagen {
  position: relative; /* Para el botón */
  text-align: center;
}
.col-imagen img {
  width: 100%;
  max-width: 350px;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-fondo-secundario);
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.btn-wsp-flotante {
  margin-top: 1.5rem;
}


/* --- INICIO DE ESTILOS CORREGIDOS --- */
/* 1. Nueva sección de valores */
.valores-seccion {
  background: var(--color-fondo-secundario); /* Fondo gris para la sección */
  padding: 4rem 0;
}

/* 2. Título de valores (ahora centrado) */
.titulo-valores {
  font-size: 2.5rem; /* Más grande, es título de sección */
  margin-top: 0;
  margin-bottom: 2.5rem;
  border-top: none; /* Ya no necesita la línea superior */
  padding-top: 0;
  text-align: center;
}

/* 3. Grilla de valores (ahora en 3 columnas) */
.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 4. Tarjeta de valor (fondo blanco y centrada) */
.valor-card {
  background: var(--color-fondo); /* Fondo blanco (contrasta con el gris) */
  padding: 2rem;
  border-radius: 5px;
  border-left: 4px solid var(--color-acento);
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.valor-card h4 {
  color: var(--color-primario);
  font-size: 1.3rem;
}

/* --- Responsive --- */

@media (max-width: 900px) {
  /* Apila la Bio (Texto + Logo) */
  .contenido-grid {
    grid-template-columns: 1fr;
  }
  .col-imagen {
    order: -1;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  /* Apila las Tarjetas de Valores */
  .valores-grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .valor-card {
    width: 100%;
    max-width: 450px; /* Ancho máximo en mobile */
  }
}
</style>