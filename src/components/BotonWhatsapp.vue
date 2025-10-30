<template>
  <a :href="whatsappLink" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">
    <slot>Contactar por WhatsApp</slot>
  </a>
</template>

<script setup>
import { computed } from 'vue'

// Podrías pasar el teléfono como prop, pero para empezar lo hardcodeamos
const telefono = '5491157548838' // Reemplazar con el número real
const mensaje = encodeURIComponent('Hola, vengo de su sitio web y quisiera hacer una consulta.')

const whatsappLink = computed(() => {
  return `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`
})
</script>

<style scoped>
.btn-whatsapp {
  display: inline-block;
  background-color: var(--color-acento);
  color: var(--color-fondo);
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-whatsapp:hover {
  background-color: var(--color-acento-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>