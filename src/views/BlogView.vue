<template>
  <div class="blog">
    <div class="container">

      <div class="header-pagina">
        <h1>Blog de Novedades Jurídicas</h1>
        <p>Información clara y actualizada sobre el mundo legal.</p>
      </div>

      <div class="post-list">
        
        <p v-if="loading">Cargando artículos...</p>
        <p v-if="error">{{ error }}</p>

        <article v-for="post in posts" :key="post.id" class="post-card">
          <h2>{{ post.titulo }}</h2>
          <span class="post-fecha">{{ post.fecha }}</span>
          <p class="post-resumen">{{ post.resumen }}</p>
          
          <RouterLink :to="{ name: 'post-detalle', params: { id: post.id } }" class="btn-leer">
            Leer Artículo Completo
          </RouterLink>
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