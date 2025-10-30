<template>
  <div class="sobre-mi">
    <div class="container">
      
      <div class="header-pagina">
        <h1>Sobre Mí</h1>
        <p>Mi misión: Hacer la justicia simple y accesible para vos.</p>
      </div>

      <div class="contenido-grid">
        <div class="col-texto">
          <h2>Dr. [Nombre del Abogado] González</h2>
          <p class="introduccion">
            Soy un abogado comprometido con la transparencia. Durante años, he visto cómo las personas se sienten abrumadas por el lenguaje legal y los procesos complejos. 
          </p>
          <p>
            Mi objetivo principal es ser tu guía y tu representante, brindándote la **información legal necesaria para que entiendas el contexto de tu reclamo**[cite: 6]. Sin sorpresas, sin falsas promesas, solo un análisis honesto de tu situación para encontrar la mejor estrategia legal. 
          </p>
          
          <h3 class="titulo-valores">Mis Pilares Fundamentales</h3>
          <div class="valores-grid">
            <div class="valor-card">
              <h4>Confianza </h4>
              <p>Una relación abogado-cliente basada en la honestidad total desde la primera consulta. </p>
            </div>
            <div class="valor-card">
              <h4>Lealtad </h4>
              <p>Mi compromiso es 100% con tus intereses y la defensa de tus derechos afectados. [cite: 6, 15]</p>
            </div>
            <div class="valor-card">
              <h4>Compromiso </h4>
              <p>Dedicación y perseverancia para acompañarte durante todo el proceso. </p>
            </div>
          </div>
        </div>
        
        <div class="col-imagen">
          <img src="https://via.placeholder.com/450x550" alt="Foto profesional del Dr. González">
          <BotonWhatsapp class="btn-wsp-flotante">
            ¿Tenés una consulta?
          </BotonWhatsapp>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BotonWhatsapp from '../components/BotonWhatsapp.vue';
</script>

<style scoped>
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

.contenido-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: flex-start;
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
  max-width: 450px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.btn-wsp-flotante {
  margin-top: 1.5rem;
}

/* Sección de Valores */
.titulo-valores {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
}
.valores-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 columna en mobile */
  gap: 1.5rem;
}

.valor-card {
  background: var(--color-fondo-secundario);
  padding: 1.5rem;
  border-radius: 5px;
  border-left: 4px solid var(--color-acento);
}
.valor-card h4 {
  color: var(--color-primario);
  font-size: 1.3rem;
}

/* Responsive */
@media (min-width: 768px) {
  .valores-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas en desktop */
  }
}

@media (max-width: 900px) {
  .contenido-grid {
    grid-template-columns: 1fr; /* Apilado en mobile */
  }
  .col-imagen {
    order: -1; /* Pone la imagen arriba en mobile */
    margin-bottom: 2rem;
  }
}
</style>