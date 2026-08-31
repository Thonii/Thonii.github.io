export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Leadership / Founder' | 'Education';
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Despegar.com',
    role: 'Data Engineer / Senior Data Pipeline Specialist',
    location: 'Buenos Aires / Remoto',
    period: '2020 — 2025',
    type: 'Full-time',
    description:
      'Diseño, implementación y mantenimiento de infraestructuras de datos a gran escala para la plataforma de viajes líder de Latinoamérica. Responsable de la estabilidad, rendimiento y evolución de los Data Warehouses y flujos batch/streaming corporativos.',
    highlights: [
      'Lideré la migración y optimización de pipelines de datos masivos con Apache Spark, reduciendo tiempos de procesamiento en un 30%.',
      'Implementación de arquitecturas Lakehouse transaccionales con Apache Iceberg, garantizando consistencia ACID y Time-Travel para auditorías financieras.',
      'Construcción de Data Marts analíticos y pipelines orquestados con Airflow y dbt con 99.8% de disponibilidad.',
      'Mentoring a desarrolladores junior y establecimiento de buenas prácticas de CI/CD, testing de datos y monitoreo de pipelines.',
    ],
    skills: ['Apache Spark', 'Apache Iceberg', 'Python', 'SQL', 'dbt', 'Airflow', 'Hadoop', 'Docker', 'Git'],
  },
  {
    company: 'TecnoAncon',
    role: 'Founder & Lead Systems Architect',
    location: 'Ancón, Lima, Perú',
    period: '2024 — Presente',
    type: 'Leadership / Founder',
    description:
      'Fábrica de software e iniciativa tecnológica enfocada en construir soluciones escalables, seguras y resilientes bajo la filosofía Solarpunk (arquitectura Local-First, Mobile-First y AI-Native).',
    highlights: [
      'Arquitectura e implementación de POSito, sistema de punto de venta offline-first con soporte táctil 360x800px para comercios locales.',
      'Diseño de motores de orquestación de agentes de IA con n8n y Python con protocolo de Context Slicing.',
      'Desarrollo de portales web y plataformas de impacto comunitario con TypeScript estricto, Tailwind CSS y buenas prácticas OWASP.',
    ],
    skills: ['TypeScript', 'React', 'Python', 'n8n', 'Node.js', 'PostgreSQL', 'GCP', 'Tailwind CSS', 'Docker'],
  },
];

export const education = [
  {
    institution: 'IT University at Despegar',
    title: 'Desarrollador Java & Big Data Specialist',
    period: '2019 — 2020',
    description: 'Especialización intensiva en ingeniería de software empresarial, Java y ecosistemas de datos distribuidos.',
  },
  {
    institution: 'Programa Codo a Codo',
    title: 'Programación Orientada a Objetos & Algoritmos',
    period: '2018 — 2019',
    description: 'Bases formales de ingeniería de software, estructuras de datos y desarrollo backend.',
  },
  {
    institution: 'Formación Continua & Certificaciones',
    title: 'Modern Data Stack & AI Engineering',
    period: '2021 — Presente',
    description: 'Apache Spark Performance Tuning, Apache Iceberg Internals, dbt Analytics Engineering, LLM Multi-Agent Orchestration.',
  },
];
