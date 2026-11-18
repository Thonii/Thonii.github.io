export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Full-time / Lead Architect' | 'Leadership / Founder' | 'Education';
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'AndeaField (AFCORP)',
    role: 'Lead Software & Operations Systems Engineer (Fullstack & Data Architect)',
    location: 'Lima, Perú (Híbrido / Campo & Oficina)',
    period: '2026 — Presente',
    type: 'Full-time / Lead Architect',
    description:
      'Liderazgo técnico integral en el diseño, desarrollo y puesta en producción de AndeaField Suite (v1.3.1), plataforma ERP unificada para logística, prospección territorial, producción en planta, facturación y atención omnicanal.',
    highlights: [
      'Arquitectura de Monolito Modular (Next.js 14, TypeScript, Supabase RLS) integrando 7 módulos operativos para gestionar 196 comercios activos y 2,431 prospectos georreferenciados en 48 zonas de Lima Este.',
      'Motor Offline-First con Dexie.js (IndexedDB), Outbox Pattern y resolución de conflictos LWW, logrando 0% pérdida de liquidaciones en zonas sin cobertura móvil y respuesta táctil INP < 16ms (60 FPS).',
      'Implementación de impresión térmica móvil ESC/POS (80mm / 48 columnas) vía Web Bluetooth API y Android Intent RawBT, junto con un generador vectorial QR SVG puro (ISO 18004 Reed-Solomon GF(256)) sin dependencias.',
      'Construcción de Gateway Omnicanal WhatsApp (Evolution API v2 + Python FastAPI Bot Worker en VPS Hetzner) con soporte criptográfico Signal E2EE para identificadores @lid, detección NLP de mermas y Live Inbox Realtime.',
      'Diseño de Guard Satelital Haversine (200m) antifraude, algoritmo greedy de suscripciones con garantía incondicional de stock y suite de 329 tests unitarios automatizados (309 Vitest + 20 Pytest).',
    ],
    skills: [
      'Next.js 14',
      'TypeScript',
      'Supabase (PostgreSQL/RLS)',
      'Dexie.js (Offline-First)',
      'Python FastAPI',
      'Evolution API (WhatsApp E2EE)',
      'Web Bluetooth ESC/POS',
      'Leaflet / Haversine GPS',
      'Vitest & Pytest',
      'Docker',
    ],
  },
  {
    company: 'TecnoAncon',
    role: 'Founder & Lead Systems Architect',
    location: 'Ancón, Lima, Perú',
    period: '2025 — Presente',
    type: 'Leadership / Founder',
    description:
      'Fábrica de software e iniciativa tecnológica enfocada en construir soluciones escalables, seguras y resilientes bajo la filosofía Solarpunk (arquitectura Local-First, Mobile-First y AI-Native).',
    highlights: [
      'Arquitectura de tecnoancon-lake (Knowledge Graph con SQLite FTS5 y protocolo Context Slicing L0-L3), reduciendo un 60% el consumo de tokens y eliminando arranques en frío en agentes de IA.',
      'Implementación de POSito, sistema de punto de venta e inventario offline-first con soporte táctil 360x800px y respuesta < 50ms para comercios locales.',
      'Diseño de motores de automatización y agentes con n8n, Python FastAPI, TypeScript estricto y auditorías preventivas OWASP.',
    ],
    skills: ['TypeScript', 'React', 'Python', 'n8n', 'SQLite FTS5', 'PostgreSQL', 'GCP', 'Tailwind CSS', 'Docker'],
  },
  {
    company: 'Despegar.com',
    role: 'Data Engineer / Data Pipeline Specialist',
    location: 'Buenos Aires, Argentina (Presencial)',
    period: '2020 — 2025',
    type: 'Full-time',
    description:
      'Diseño, implementación y mantenimiento de infraestructuras de datos a gran escala para la plataforma de viajes líder de Latinoamérica. Responsable de la estabilidad, rendimiento y evolución de los Data Warehouses y flujos batch corporativos.',
    highlights: [
      'Participación activa en el desarrollo y optimización de pipelines de datos distribuidos con Apache Spark (salt-key y repartitioning), mejorando tiempos de cómputo en un 30%.',
      'Soporte en la implementación de arquitecturas Lakehouse transaccionales con Apache Iceberg, garantizando consistencia ACID y Time-Travel para auditorías.',
      'Construcción y modelado de Data Marts analíticos orquestados con Apache Airflow y dbt manteniendo un 99.8% de disponibilidad SLA.',
      'Ejecución de validaciones automáticas de calidad de datos (Data Quality Gates), pruebas de integración y monitoreo de pipelines.',
    ],
    skills: ['Apache Spark', 'Apache Iceberg', 'Python', 'SQL', 'dbt', 'Airflow', 'Hadoop', 'Docker', 'Git'],
  },
];

export const education = [
  {
    institution: 'Universidad Tecnológica Nacional (UTN)',
    title: 'Tecnicatura Universitaria en Programación',
    period: '2018 — 2020',
    description:
      'Formación académica superior en ingeniería de software, estructuras de datos, algoritmos, bases de datos relacionales y arquitectura de sistemas.',
  },
  {
    institution: 'IT University at Despegar',
    title: 'Desarrollador Java & Big Data Specialist',
    period: '2019 — 2020',
    description: 'Especialización intensiva en ingeniería de software empresarial, Java y ecosistemas de datos distribuidos.',
  },
  {
    institution: 'Programa Codo a Codo',
    title: 'Programación Orientada a Objetos & Backend',
    period: '2018 — 2019',
    description: 'Bases formales de ingeniería de software, estructuras de datos y desarrollo backend.',
  },
  {
    institution: 'Formación Continua & Especialización',
    title: 'Modern Data Stack, Offline-First & AI Systems',
    period: '2021 — Presente',
    description:
      'Apache Spark Performance Tuning, Apache Iceberg Internals, Offline-First Architectures (IndexedDB/Outbox), Messaging Cryptography & Multi-Agent AI Orchestration.',
  },
];
