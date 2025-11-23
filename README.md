# Portafolio - Matias Lagos T.

Portafolio personal desarrollado con HTML, CSS (sin frameworks pesados) y Bootstrap CDN para la grilla y componentes básicos.

## Estructura
- `index.html`: Página principal.
- `style.css`: Estilos personalizados optimizados para GitHub Pages.
- `script.js`: Scroll suave y validación básica del formulario de contacto.
- `images/`: Recursos gráficos locales.

## Características
- Diseño responsive con solo dos media queries (>=576px y >=992px).
- Navegación fija con compensación (`scroll-margin-top`) para evitar que el contenido quede oculto al usar enlaces internos.
- Formulario accesible con mensajes dinámicos (`aria-live`).
- Imágenes con atributos `width` y `height` para evitar CLS (Layout Shift) en GitHub Pages.
- Favicon y meta `theme-color` para mejorar apariencia en móviles.

## Proyectos Destacados

- **Concesionaria:** Aplicación web para la gestión de una concesionaria de vehículos.
  - **Presentación del diseño:** [Ver en Behance](https://www.behance.net/gallery/239101539/Portafolio-behance)

## Instrucciones de uso

1. **Clona el repositorio:**
	```bash
	git clone https://github.com/Matiaslagost7/Portafolio.git
	```
2. **Abre la carpeta en tu editor o navegador:**
	- Puedes abrir `index.html` directamente en tu navegador para ver el portafolio localmente.
3. **Publicar en GitHub Pages:**
	- Ve a la configuración del repositorio en GitHub.
	- Busca la sección "Pages".
	- Selecciona la rama `main` y la carpeta raíz (`/`).
	- Guarda y accede a la URL que te proporciona GitHub Pages.

## Dependencias

- [Bootstrap 5.3 (CDN)](https://getbootstrap.com/): Para la grilla y componentes responsivos.
- [Google Fonts: Montserrat](https://fonts.google.com/specimen/Montserrat): Fuente principal.
- No requiere instalación de paquetes ni dependencias adicionales.

## Próximas mejoras sugeridas
- Agregar sección de más proyectos.
- Implementar envío real del formulario (servicio externo o backend ligero).
- Optimizar imágenes (reducir peso con compresión).
- Añadir archivo `404.html` para rutas rotas.
