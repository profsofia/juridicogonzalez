# ⚖️ Sitio Web - Jurídico González

Este repositorio contiene el código fuente del sitio web oficial para el estudio jurídico "Jurídico González". El proyecto fue desarrollado como una Single Page Application (SPA) moderna, rápida y completamente responsiva.

**Ver la demo en vivo:** [https://juridico-gonzalez.netlify.app](https://juridico-gonzalez.netlify.app)

---

## 📋 Descripción del Proyecto

El objetivo de este proyecto era crear una presencia digital profesional para un estudio jurídico, basada en el brief de un cliente. Los pilares fundamentales del proyecto son:

* **Confianza y Claridad:** Transmitir los valores de "Confianza, Lealtad y Compromiso".
* **Simpleza:** Presentar la información legal de forma "simple y entendible", desmitificando la complejidad de la justicia.
* **Conversión:** Facilitar el contacto directo a través de un botón de WhatsApp prominente y un formulario de contacto.
* **Contenido Dinámico:** Incluir un blog para publicar "novedades jurídicas" y atraer tráfico.

![Captura de pantalla del sitio web de Juridico Gonzalez](<img width="1345" height="616" alt="image" src="https://github.com/user-attachments/assets/628ae932-793c-4d02-a9f0-3830868cee9e" />
)


## ✨ Características Principales

* **100% Responsivo:** Diseño adaptativo con un menú hamburguesa funcional para una experiencia perfecta en móviles.
* **Ruteo del Lado del Cliente:** Navegación instantánea entre páginas (Inicio, Sobre Mí, Servicios, Contacto) usando `vue-router`.
* **Blog Dinámico:** Sistema de blog que consume datos desde un archivo JSON (preparado para escalar a un Headless CMS).
* **Componentes Reutilizables:** Creación de componentes modulares como `Navbar`, `Footer`, y `BotonWhatsapp`.
* **Branding Personalizado:** Integración de logo, paleta de colores profesional (Azul oscuro y Naranja) y tipografía legal (Merriweather y Lato).

---

## 💻 Stack de Tecnología

* **Framework:** [Vue.js 3](https://vuejs.org/) (usando Composition API)
* **Bundler:** [Vite](https://vitejs.dev/)
* **Ruteo:** [Vue Router](https://router.vuejs.org/)
* **Hosting:** [Netlify](https://www.netlify.com/)

---

## 🚀 Cómo ejecutar este proyecto localmente

Si querés clonar y correr este proyecto en tu máquina local, seguí estos pasos:

1.  **Cloná el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/juridico-gonzalez.git](https://github.com/tu-usuario/juridico-gonzalez.git)
    ```

2.  **Navegá a la carpeta del proyecto:**
    ```bash
    cd juridico-gonzalez
    ```

3.  **Instalá las dependencias:**
    ```bash
    npm install
    ```

4.  **Corré el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  **Abrí tu navegador** en `http://localhost:5173` (o la URL que indique Vite).
