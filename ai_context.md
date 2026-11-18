# AI Context - Continuidad de Sesión

## 1. Current Status
Portafolio corporativo bilingüe (`ES`/`EN`) **Thonii.github.io** y currículums en PDF (`public/Anthony_Villalobos_CV.pdf`, `public/resume-anthony-villalobos.pdf` y `tecnoancon-lake/Anthony_Villalobos_CV_Senior_Backend_Data_Engineer.pdf`) 100% actualizados, humanizados en español claro para el mercado de Lima y con cero enlaces expuestos a entornos o repositorios privados de **AndeaField**.

## 2. Recent Changes
1. **Diferenciación Clara Español vs Inglés y Humanización en Español (`src/i18n/translations.ts`, `cv_template.html`)**:
   - En la versión `ES` y en el CV PDF, se tradujeron los anglicismos innecesarios a su versión natural y ejecutiva en español (*"Casos de Éxito"*, *"Ver Detalle Técnico"*, *"Operación sin Conexión a Internet"*, *"Ingeniero Principal de Software y Sistemas Operativos"*, *"Ingeniería de Datos y Procesamiento Distribuido"*, *"329 Pruebas Aprobadas"*), manteniendo intactos los nombres de las tecnologías (`Apache Spark`, `Next.js 14`, `TypeScript`, `Python FastAPI`, `Supabase`, `Bluetooth ESC/POS`).
   - La versión `EN` se conserva 100% en inglés técnico internacional para reclutadores extranjeros.
2. **Protección de Privacidad Corporativa de AndeaField (`@security`)**:
   - Eliminadas por completo las URLs al prototipo (`andeafield-sjl.vercel.app`) y al repositorio (`github.com/Thonii/AFActivacion`) tanto del CV en PDF como del portafolio web.
   - Añadido soporte de badge `🔒 Privado · Producción` (`isPrivate: true`) en `GithubProjects.tsx` para destacar sistemas empresariales propietarios sin exponer enlaces ni datos de negocio.
3. **Regeneración de PDFs y Despliegue a Producción**:
   - Recompilado el CV en PDF de 1 página A4 con Chrome Headless y pusheado a `origin/main` para despliegue automático en GitHub Pages.

## 3. Active Constraints
- **Mobile-First Obligatorio (360x800px)** y rendimiento **Zero-Jank (60 FPS)**.
- **Privacidad Estricta**: Todo el ecosistema de AndeaField se presenta como código corporativo privado sin enlaces públicos a despliegues ni repositorios.
- **Idioma**: Español natural, claro y ejecutivo en `ES` (sin espanglish), diferenciándose nítidamente de la versión `EN`.

## 4. Pending Backlog
1. Monitorear el despliegue en vivo en `https://thonii.github.io`.
