<template>
  <div class="post-detalle">
    <div class="container">
      
      <p v-if="loading">Cargando artículo...</p>
      <p v-if="error">{{ error }}</p>

      <article v-if="post">
        <header class="post-header">
          <h1>{{ post.titulo }}</h1>
          <span class="post-fecha">{{ post.fecha }}</span>
        </header>

        <div class="post-contenido" v-html="post.contenido"></div>

        <RouterLink to="/blog" class="btn-volver">&larr; Volver al Blog</RouterLink>
      </article>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute() // Para obtener el :id de la URL
const post = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  const postId = route.params.id // Obtenemos el ID (ej: "nueva-ley-alquileres-2025")

  try {
    const response = await fetch('/data/posts.json')
    if (!response.ok) {
      throw new Error('No se pudo cargar el artículo.')
    }
    const allPosts = await response.json()
    
    // Buscamos en la lista el posteo que coincida con el ID
    post.value = allPosts.find(p => p.id === postId)

    if (!post.value) {
      throw new Error('Artículo no encontrado.')
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.post-detalle {
  max-width: 800px; /* Ancho ideal para lectura */
  margin: 0 auto;
  padding: 2rem 0;
}

.post-header {
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--color-acento);
  margin-bottom: 2rem;
}

.post-header h1 {
  font-size: 2.8rem;
  line-height: 1.3;
}

.post-fecha {
  font-size: 1rem;
  color: #555;
  margin-top: 1rem;
  display: block;
}

.post-contenido {
  font-size: 1.15rem;
  line-height: 1.8;
}

/* Estilos para el contenido que viene del v-html 
  Usamos :deep() para que Vue aplique estilos DENTRO del v-html
*/
:deep(.post-contenido p) {
  margin-bottom: 1.5rem;
}

:deep(.post-contenido h3) {
  font-size: 1.6rem;
  color: var(--color-primario);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

:deep(.post-contenido strong) {
  color: var(--color-texto);
}

.btn-volver {
  display: inline-block;
  margin-top: 3rem;
  font-weight: 700;
  color: var(--color-primario);
  text-decoration: none;
}
.btn-volver:hover {
  text-decoration: underline;
}
</style>