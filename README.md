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

## Problemáticas Detectadas y Mejoras Aplicadas

Se identificaron áreas de mejora en el proyecto y se aplicaron las siguientes soluciones:

- **Optimización de imágenes:**
  - **Problemática:** Las imágenes de alta resolución ralentizaban la carga del sitio.
  - **Solución:** Se comprimieron las imágenes para reducir su peso sin una pérdida notable de calidad. Se considera el uso de formatos modernos como WebP para futuras actualizaciones, que ofrecen una compresión superior a JPEG y PNG.

- **Refactorización y organización de CSS:**
  - **Problemática:** El archivo `style.css` podía volverse difícil de mantener a medida que el proyecto creciera.
  - **Solución:** Se recomienda dividir el CSS en archivos más pequeños y específicos (por ejemplo, `header.css`, `projects.css`) e importarlos en un archivo principal para mejorar la modularidad.

- **Modularidad en JavaScript:**
  - **Problemática:** Un único archivo JavaScript para toda la interactividad puede dificultar la depuración y escalabilidad.
  - **Solución:** Se sugiere dividir el código JavaScript en módulos que manejen funcionalidades específicas (ej. un módulo para el carrusel, otro para el formulario). Esto facilita el mantenimiento y asegura que el sitio permanezca funcional si JavaScript está deshabilitado.
