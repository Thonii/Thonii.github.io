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
    category: 'Big Data & Lakehouse Engineering',
    badge: 'Data Core',
    description: 'Diseño y optimización de pipelines de datos masivos, procesamiento distribuido y modelado analítico.',
    technologies: [
      { name: 'Apache Spark', level: 'Experto', highlight: true },
      { name: 'Apache Iceberg', level: 'Experto', highlight: true },
      { name: 'SQL Avanzado', level: 'Experto', highlight: true },
      { name: 'dbt (data build tool)', level: 'Avanzado', highlight: true },
      { name: 'Apache Airflow', level: 'Avanzado', highlight: true },
      { name: 'Hadoop / HDFS', level: 'Dominio Sólido' },
      { name: 'Data Warehousing', level: 'Experto', highlight: true },
      { name: 'PostgreSQL / BigQuery', level: 'Avanzado' },
    ],
  },
  {
    category: 'AI-Native & Autonomous Systems',
    badge: 'AI & Automation',
    description: 'Orquestación de flujos de trabajo inteligentes, agentes autónomos y arquitecturas de contexto controlado.',
    technologies: [
      { name: 'n8n Automation', level: 'Experto', highlight: true },
      { name: 'Python (Data/AI/APIs)', level: 'Experto', highlight: true },
      { name: 'Multi-Agent Architectures', level: 'Avanzado', highlight: true },
      { name: 'Context Slicing Protocols', level: 'Avanzado', highlight: true },
      { name: 'FastAPI & Pydantic', level: 'Avanzado' },
      { name: 'LLM APIs & Prompt Ops', level: 'Avanzado' },
      { name: 'pgvector / Embeddings', level: 'Dominio Sólido' },
    ],
  },
  {
    category: 'Fullstack & Systems Architecture',
    badge: 'Software Craft',
    description: 'Construcción de aplicaciones web de alta velocidad, tipado estricto y filosofía Mobile-First / Local-First.',
    technologies: [
      { name: 'TypeScript (Estricto)', level: 'Experto', highlight: true },
      { name: 'React & React Hooks', level: 'Experto', highlight: true },
      { name: 'Tailwind CSS', level: 'Experto', highlight: true },
      { name: 'Local-First / IndexedDB', level: 'Avanzado', highlight: true },
      { name: 'Node.js & REST APIs', level: 'Avanzado' },
      { name: 'PWA / Service Workers', level: 'Avanzado' },
      { name: 'Patrones SOLID & Clean Arch', level: 'Avanzado', highlight: true },
    ],
  },
  {
    category: 'Cloud, DevOps & Security',
    badge: 'Infrastructure',
    description: 'Despliegue automatizado, seguridad preventiva (OWASP) e infraestructura reproducible.',
    technologies: [
      { name: 'Docker & Docker Compose', level: 'Avanzado', highlight: true },
      { name: 'GitHub Actions (CI/CD)', level: 'Avanzado', highlight: true },
      { name: 'Linux / Ubuntu Server', level: 'Avanzado' },
      { name: 'GCP (Google Cloud)', level: 'Dominio Sólido' },
      { name: 'OWASP Security Guidelines', level: 'Avanzado', highlight: true },
      { name: 'Git Workflow & Rebase', level: 'Experto' },
    ],
  },
];
