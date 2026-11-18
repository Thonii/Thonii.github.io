export interface TechCategory {
  category: string;
  badge: string;
  description: string;
  technologies: {
    name: string;
    level: 'Avanzado' | 'Experto' | 'Dominio Sólido';
    highlight?: boolean;
  }[];
}

export const techMatrix: TechCategory[] = [
  {
    category: 'Big Data, Lakehouse & Relational Core',
    badge: 'Data Core',
    description:
      'Diseño de pipelines distribuidos, modelado transaccional con seguridad RLS y sincronización determinista de datos.',
    technologies: [
      { name: 'Apache Spark & Iceberg', level: 'Experto', highlight: true },
      { name: 'SQL Avanzado & PostgreSQL', level: 'Experto', highlight: true },
      { name: 'Supabase (RLS & Realtime)', level: 'Experto', highlight: true },
      { name: 'dbt (data build tool)', level: 'Avanzado', highlight: true },
      { name: 'Apache Airflow', level: 'Avanzado', highlight: true },
      { name: 'Python ETL & Streaming XML', level: 'Experto', highlight: true },
      { name: 'Data Warehousing & BigQuery', level: 'Experto', highlight: true },
      { name: 'DuckDB / SQLite FTS5', level: 'Avanzado' },
    ],
  },
  {
    category: 'AI-Native, Omnichannel & Automation',
    badge: 'AI & Messaging',
    description:
      'Pasarelas conversacionales E2EE, microservicios de clasificación NLP, orquestación multi-agente y Context Slicing.',
    technologies: [
      { name: 'Python (FastAPI & Pydantic v2)', level: 'Experto', highlight: true },
      { name: 'n8n Workflow Orchestration', level: 'Experto', highlight: true },
      { name: 'WhatsApp Evolution API v2 (E2EE)', level: 'Experto', highlight: true },
      { name: 'Multi-Agent & Context Slicing', level: 'Avanzado', highlight: true },
      { name: 'NLP Intent & Claims Engines', level: 'Avanzado', highlight: true },
      { name: 'LLM APIs (Gemini / OpenAI)', level: 'Avanzado' },
      { name: 'RAG & Vector Embeddings', level: 'Dominio Sólido' },
    ],
  },
  {
    category: 'Fullstack, Offline-First & Mobile IoT',
    badge: 'Software Craft',
    description:
      'Aplicaciones web de 60 FPS (Zero-Jank), sincronización offline en zonas sin red e integración directa con hardware.',
    technologies: [
      { name: 'TypeScript (Estricto)', level: 'Experto', highlight: true },
      { name: 'Next.js 14 & React 18', level: 'Experto', highlight: true },
      { name: 'Offline-First (Dexie & Outbox)', level: 'Experto', highlight: true },
      { name: 'Web Bluetooth ESC/POS Printing', level: 'Avanzado', highlight: true },
      { name: 'Tailwind CSS (Zero-Jank 60FPS)', level: 'Experto', highlight: true },
      { name: 'Haversine GPS Guard & Leaflet', level: 'Avanzado', highlight: true },
      { name: 'ISO 18004 QR Reed-Solomon SVG', level: 'Avanzado', highlight: true },
    ],
  },
  {
    category: 'Cloud, Testing, DevOps & Security',
    badge: 'Infrastructure',
    description:
      'Arquitectura de costo optimizado, testing automatizado exhaustivo, seguridad OWASP y despliegues reproducibles.',
    technologies: [
      { name: 'Vitest & Pytest (329+ Tests)', level: 'Experto', highlight: true },
      { name: 'Docker & Linux VPS (Hetzner)', level: 'Avanzado', highlight: true },
      { name: 'Vercel Edge & GitHub Actions', level: 'Avanzado', highlight: true },
      { name: 'Supabase CLI Dual-Env FinOps', level: 'Avanzado' },
      { name: 'OWASP & Signal E2EE Routing', level: 'Avanzado', highlight: true },
      { name: 'Git Workflow & Monorepos', level: 'Experto' },
    ],
  },
];
