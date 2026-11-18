export interface GithubRepo {
  name: string;
  repoUrl: string;
  liveUrl?: string;
  description: string;
  tags: string[];
  stars?: number;
  language: 'TypeScript' | 'Python' | 'SQL' | 'Rust';
  features: string[];
}

export const githubRepos: GithubRepo[] = [
  {
    name: 'andeafield-suite',
    repoUrl: 'https://github.com/Thonii/AFActivacion',
    liveUrl: 'https://andeafield-sjl.vercel.app',
    description:
      'ERP Agro-Logístico Unificado Offline-First: Reparto GPS Haversine, Activación Territorial (48 zonas), Impresión Bluetooth ESC/POS 80mm, Portal QR Reed-Solomon y Gateway WhatsApp FastAPI.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase RLS', 'Dexie Offline', 'FastAPI', 'ESC/POS'],
    language: 'TypeScript',
    features: ['329 Tests (Vitest/Pytest)', 'Web Bluetooth 80mm', 'WhatsApp Signal E2EE'],
  },
  {
    name: 'tecnoancon-lake',
    repoUrl: 'https://github.com/Thonii/sysmap-app',
    description:
      'Grafo de conocimiento vivo con motor SQLite FTS5 y protocolo de Context Slicing (L0-L3) para cosechar arquitecturas, ADRs y alimentar agentes de IA sin arranques en frío.',
    tags: ['Knowledge Graph', 'SQLite FTS5', 'Context Slicing', 'TypeScript', 'Python'],
    language: 'TypeScript',
    features: ['Ahorro 60% tokens', 'AST Repomap <100ms', 'Harvester Multi-Repo'],
  },
  {
    name: 'nexo-legal & n8n-portf',
    repoUrl: 'https://github.com/Thonii/nexo-legal',
    description:
      'Plataforma LegalTech para análisis inteligente de contratos y flujos automatizados en n8n para onboarding, firma y aprovisionamiento multicanal.',
    tags: ['LegalTech', 'Python', 'n8n', 'AI Analysis', 'Automation'],
    language: 'Python',
    features: ['Extracción de cláusulas', 'Aprovisionamiento n8n', 'Seguridad OWASP'],
  },
  {
    name: 'Thonii.github.io',
    repoUrl: 'https://github.com/Thonii/Thonii.github.io',
    liveUrl: 'https://thonii.github.io',
    description:
      'Código fuente de este portafolio de ingeniería corporativa. Construido con React 18, Vite, TypeScript estricto, motor nativo de SVG Morphing (Spring Physics) y Tailwind CSS.',
    tags: ['Portfolio', 'React 18', 'TypeScript', 'SVG Morphing', 'Solarpunk'],
    language: 'TypeScript',
    features: ['i18n Automático (ES/EN)', 'Spring Physics SVG', 'Mobile-First 360x800px'],
  },
];
