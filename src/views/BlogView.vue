<template>
  <div class="blog">
    <div class="container">

      <div class="header-pagina">
        <h1>Novedades Jurídicas</h1>
        <p>Información actualizada y clara para entender tus derechos.</p>
      </div>

      <div v-if="loading" class="loading">Cargando artículos...</div>

      <div v-else class="blog-grid">
        <article v-for="post in posts" :key="post.id" class="post-card">
          
          <div class="post-imagen">
            <img :src="post.imagen" :alt="post.titulo">
          </div>

          <div class="post-content">
            <span class="post-fecha">{{ post.fecha }}</span>
            <h2>{{ post.titulo }}</h2>
            <p>{{ post.resumen }}</p>
            
            <RouterLink 
              :to="{ name: 'post-detalle', params: { id: post.id } }" 
              class="leer-mas"
            >
              Leer artículo completo &rarr;
            </RouterLink>
          </div>
        </article>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const posts = ref([])
const loading = ref(true)
const error = ref(null)

// onMounted se ejecuta cuando el componente se "monta"
onMounted(async () => {
  try {
    // Pedimos los datos de nuestro archivo .json
    // (Esta URL es la misma que usarías para una API real)
    const response = await fetch('/data/posts.json')
    if (!response.ok) {
      throw new Error('No se pudieron cargar las novedades.')
    }
    posts.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
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

.post-list {
  max-width: 800px;
  margin: 0 auto;
}

.post-card {
  background: var(--color-fondo-secundario);
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}
/* ... estilos anteriores ... */

.post-card {
  background: var(--color-fondo-secundario);
  border-radius: 8px;
  overflow: hidden; /* Esto es importante para que la imagen respete los bordes */
  border: 1px solid #eee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* NUEVO: Estilos para la imagen */
.post-imagen {
  width: 100%;
  height: 200px; /* Altura fija para que todas se vean parejas */
  overflow: hidden;
}

.post-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Recorta la imagen para llenar el espacio sin deformarse */
  transition: transform 0.3s ease;
}

/* Efecto zoom al pasar el mouse */
.post-card:hover .post-imagen img {
  transform: scale(1.05);
}

/* ... resto de estilos (post-content, etc) ... */

.post-card h2 {
  font-size: 2rem;
  color: var(--color-primario);
  margin-bottom: 0.5rem;
}

.post-fecha {
  display: block;
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
}

.post-resumen {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.btn-leer {
  background-color: var(--color-acento);
  color: var(--color-fondo);
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.3s ease;
}
.btn-leer:hover {
  background-color: var(--color-acento-hover);
}
</style>