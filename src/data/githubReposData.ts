export interface GithubRepo {
  name: string;
  repoUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  privateLabel?: string;
  description: string;
  tags: string[];
  stars?: number;
  language: 'TypeScript' | 'Python' | 'SQL' | 'Rust';
  features: string[];
}

export const githubRepos: GithubRepo[] = [
  {
    name: 'AndeaField Suite (ERP Corporativo)',
    isPrivate: true,
    privateLabel: 'Privado · Producción',
    description:
      'Plataforma integral privada para distribución mayorista: Reparto con bloqueo GPS Haversine, Activación en 48 zonas, Impresión Bluetooth de 80mm, Portal Cliente con QR y Bot de WhatsApp en Python.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase RLS', 'Operación sin Red', 'FastAPI', 'Impresión BT'],
    language: 'TypeScript',
    features: ['329 Pruebas Automatizadas', 'Impresión Térmica 80mm', 'Código Privado Protegido'],
  },
  {
    name: 'tecnoancon-lake (Grafo de Conocimiento)',
    repoUrl: 'https://github.com/Thonii/sysmap-app',
    description:
      'Sistema de memoria técnica indexado con SQLite FTS5 e inyección de contexto por capas (L0-L3) para documentar arquitecturas y acelerar asistentes de IA reduciendo costos.',
    tags: ['Base de Conocimiento', 'SQLite FTS5', 'Arquitectura IA', 'TypeScript', 'Python'],
    language: 'TypeScript',
    features: ['Ahorro 60% en Tokens', 'Mapa de Código <100ms', 'Auditoría Multi-Proyecto'],
  },
  {
    name: 'nexo-legal y n8n-portf',
    repoUrl: 'https://github.com/Thonii/nexo-legal',
    description:
      'Plataforma de tecnología legal para revisión automatizada de contratos en Python, acompañada de flujos en n8n para alta de clientes y notificaciones.',
    tags: ['LegalTech', 'Python', 'n8n', 'Análisis Documental', 'Automatización'],
    language: 'Python',
    features: ['Extracción de cláusulas', 'Flujos automáticos n8n', 'Seguridad de datos'],
  },
  {
    name: 'Thonii.github.io (Este Portafolio)',
    repoUrl: 'https://github.com/Thonii/Thonii.github.io',
    liveUrl: 'https://thonii.github.io',
    description:
      'Código fuente abierto de este portafolio profesional. Desarrollado con React 18, Vite, TypeScript estricto, motor propio de animación vectorial de iconos y despliegue continuo.',
    tags: ['Portafolio', 'React 18', 'TypeScript', 'Animación SVG', 'Solarpunk'],
    language: 'TypeScript',
    features: ['Bilingüe Español / Inglés', 'Físicas de Resorte SVG', 'Diseño Móvil 360x800px'],
  },
];
