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

## Despliegue en GitHub Pages
1. Haz commit y push de los cambios al branch `main`.
2. Ve a: `Settings > Pages` en el repositorio.
3. En **Build and deployment** selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/ (root)`
4. Guarda y espera a que GitHub construya el sitio (puede tardar 1-2 minutos).
5. La URL será: `https://<tu-usuario>.github.io/M8_AE2_ABP-Ejercicio-individual/`

## Buenas prácticas para Pages
- Usa rutas relativas (`./images/...`) como ya está implementado.
- Evita recursos mixtos HTTP (todo es HTTPS).
- Mantén nombres de archivos exactos (respeta mayúsculas/minúsculas).
- No usar funciones JS que dependan de módulos o bundlers (no se usan aquí).

## Cómo probar localmente (Windows PowerShell)
```powershell
# Abrir carpeta y servir con Python simple si lo tienes instalado
cd "c:\Users\matia\Documents\Bootcamp\M8_AE2_ABP-Ejercicio individual"
python -m http.server 8000
# Luego visitar http://localhost:8000
```

## Próximas mejoras sugeridas
- Agregar sección de más proyectos.
- Implementar envío real del formulario (servicio externo o backend ligero).
- Optimizar imágenes (reducir peso con compresión).
- Añadir archivo `404.html` para rutas rotas.

---
Si necesitas convertir esto en versión más minimal aún, puedo ayudarte.
