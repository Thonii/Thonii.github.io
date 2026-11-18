export interface GithubRepo {
  name: string;
  repoUrl?: string;
  liveUrl?: string;
  links?: { label: string; url: string }[];
  isPrivate?: boolean;
  privateLabel?: string;
  description: string;
  tags: string[];
  stars?: number;
  language: 'TypeScript' | 'Python' | 'SQL' | 'Rust' | 'Python / TypeScript' | 'Python / JavaScript';
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
    name: 'Perú Monitor (Core API & UI Mapa)',
    links: [
      { label: 'peru-monitor-core', url: 'https://github.com/Thonii/peru-monitor-core' },
      { label: 'peru-monitor-ui', url: 'https://github.com/Thonii/peru-monitor-ui' },
    ],
    description:
      'Plataforma de inteligencia situacional en tiempo real que consolida sismos (USGS/IGP), clima y conflictos sociales en el Perú. Incluye motor backend en Python FastAPI con Gemini 2.5 Flash y mapa interactivo Next.js + Leaflet.',
    tags: ['FastAPI', 'Gemini AI', 'Next.js', 'Leaflet Maps', 'Python', 'Telegram Bot'],
    language: 'Python / TypeScript',
    features: ['Análisis y Geolocalización IA', 'Alertas en Telegram', 'Mapa Móvil 360x800px'],
  },
  {
    name: 'nexo-legal & n8n-portf',
    links: [
      { label: 'nexo-legal', url: 'https://github.com/Thonii/nexo-legal' },
      { label: 'n8n-portf', url: 'https://github.com/Thonii/n8n-portf' },
    ],
    description:
      'Plataforma de tecnología legal en Python para revisión inteligente de contratos (nexo-legal) y flujos automatizados en n8n para alta de clientes, firma y aprovisionamiento multicanal (n8n-portf).',
    tags: ['LegalTech', 'Python', 'n8n', 'Análisis Documental', 'Automatización'],
    language: 'Python / JavaScript',
    features: ['Extracción de cláusulas', 'Flujos automáticos n8n', 'Seguridad de datos OWASP'],
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
