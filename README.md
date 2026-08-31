# Anthony Villalobos — Senior Data & Software Engineer Portfolio

Portafolio de ingeniería corporativa de **Anthony Villalobos**, alojado en **GitHub Pages** (`https://thonii.github.io`).

Diseñado específicamente para **Engineering Managers, Principal Architects y Tech Recruiters**, estructurado bajo metodología **STAR**, **System Design Diagrams**, métricas de impacto cuantitativo y filosofía **Mobile-First / Solarpunk**.

---

## 🚀 Stack Tecnológico

- **Framework:** React 18 + TypeScript (Estricto) + Vite
- **Styling:** Tailwind CSS + Tokens Dark Mode Solarpunk
- **Iconografía:** Lucide React
- **Fuentes:** JetBrains Mono (Código & Métricas), Sora (Títulos), Inter (Cuerpo)
- **CI/CD & Hosting:** GitHub Actions (`.github/workflows/deploy.yml`) hacia GitHub Pages

---

## 📂 Estructura del Proyecto

```
Thonii.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline automático de Build & Deploy a GitHub Pages
├── public/
│   └── favicon.svg             # Favicon vectorial
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Barra de navegación glassmorphic & mobile drawer
│   │   ├── HeroSection.tsx     # Posicionamiento senior & propuesta de valor
│   │   ├── MetricsBar.tsx      # Estadísticas de ingeniería (SLA, Latencia, Años)
│   │   ├── CaseStudies.tsx     # Deep dives arquitectónicos (STAR framework)
│   │   ├── SystemDiagram.tsx   # Visualizador de flujos de sistemas
│   │   ├── TechMatrix.tsx      # Matriz de habilidades categorizadas
│   │   ├── Experience.tsx      # Timeline laboral corporativo (Despegar + TecnoAncon)
│   │   ├── GithubProjects.tsx  # Repositorios destacados con badges
│   │   ├── ContactSection.tsx  # Canales directos & 1-click email copy
│   │   └── Footer.tsx          # Firma Solarpunk & copyright
│   ├── data/
│   │   ├── caseStudiesData.ts  # Contenido detallado de los proyectos
│   │   ├── experienceData.ts   # Historial corporativo y educación
│   │   ├── githubReposData.ts  # Repositorios públicos de GitHub
│   │   └── techStackData.ts    # Tecnologías y niveles de dominio
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Instalación y Desarrollo Local

```bash
# 1. Instalar dependencias
npm install
# o con pnpm
pnpm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

---

## 🌐 Despliegue en GitHub Pages

1. Sube este repositorio a GitHub bajo el nombre `Thonii.github.io`.
2. En GitHub ve a **Settings > Pages**.
3. En **Build and deployment > Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada `git push` a `main` disparará automáticamente el flujo de compilación y despliegue a `https://thonii.github.io`.
