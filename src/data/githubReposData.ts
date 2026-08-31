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
    name: 'tecnoancon-lake',
    repoUrl: 'https://github.com/Thonii/tecnoancon-lake',
    description:
      'Grafo de conocimiento vivo y sistema de persistencia de contexto L0-L3 para alimentar agentes de software factory de forma quirúrgica.',
    tags: ['Context Slicing', 'Knowledge Graph', 'Python', 'AI-Native'],
    language: 'Python',
    features: ['Reducción 60% tokens', 'Generación AST Repomap <100ms', 'ADR Registry'],
  },
  {
    name: 'POSito',
    repoUrl: 'https://github.com/Thonii/POSito',
    liveUrl: 'https://posito.tecnoancon.com',
    description:
      'Sistema POS y control de inventarios táctil para Android y web. Diseñado bajo principios Mobile-First (360x800px) y arquitectura offline-ready.',
    tags: ['Mobile-First', 'Local-First', 'TypeScript', 'Tailwind'],
    language: 'TypeScript',
    features: ['100% Uptime Offline', 'Respuesta táctil <50ms', 'Sync seguro'],
  },
  {
    name: 'inti-ai-orchestrator',
    repoUrl: 'https://github.com/Thonii/inti-ai',
    description:
      'Motor de orquestación de agentes autónomos y flujos de automatización inteligentes integrados con n8n, FastAPI y guardrails de seguridad.',
    tags: ['Multi-Agent', 'n8n', 'Python', 'FastAPI', 'LLMs'],
    language: 'Python',
    features: ['Tool Sandboxing', 'Validación Zod/Pydantic', 'Event-Driven'],
  },
  {
    name: 'Thonii.github.io',
    repoUrl: 'https://github.com/Thonii/Thonii.github.io',
    liveUrl: 'https://thonii.github.io',
    description:
      'Código fuente de este portafolio de ingeniería corporativa. Construido con React, Vite, TypeScript estricto y Tailwind CSS.',
    tags: ['Portfolio', 'React', 'Vite', 'GitHub Actions', 'Solarpunk'],
    language: 'TypeScript',
    features: ['CI/CD Automático', 'Lighthouse 100/100', 'Zero bloat'],
  },
];
