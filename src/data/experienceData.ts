export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Tiempo Completo' | 'Tiempo Completo / Liderazgo Técnico' | 'Liderazgo / Fundador' | 'Education';
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'AndeaField (AFCORP)',
    role: 'Ingeniero Principal de Software y Sistemas Operativos (Arquitecto Fullstack y Datos)',
    location: 'Lima, Perú (Híbrido · Operaciones, Planta y Campo)',
    period: '2026 — Presente',
    type: 'Tiempo Completo / Liderazgo Técnico',
    description:
      'Liderazgo técnico integral en el diseño, desarrollo y puesta en producción de AndeaField Suite (v1.3.1), plataforma empresarial que unifica reparto logístico, activación territorial, planta de enjabe, facturación, portal de clientes y atención por WhatsApp.',
    highlights: [
      'Arquitectura de plataforma modular (Next.js 14, TypeScript estricto y PostgreSQL en Supabase con seguridad por filas RLS) integrando 7 módulos operativos para gestionar 196 comercios activos y 2,431 puntos de venta en 48 zonas de Lima Este.',
      'Desarrollo del motor de operación sin conexión (Dexie.js IndexedDB) con cola de sincronización automática y resolución de conflictos, logrando 0% pérdida de liquidaciones en zonas sin señal móvil y respuesta táctil menor a 16ms (60 FPS).',
      'Implementación de impresión térmica móvil de comprobantes (80mm / 48 columnas) mediante Web Bluetooth y Android RawBT, junto con un generador propio de códigos QR vectoriales (ISO 18004 Reed-Solomon) para autogestión de pedidos del cliente.',
      'Construcción de la pasarela omnicanal de WhatsApp (Evolution API v2 + servicio Python FastAPI en servidor Linux) resolviendo el cifrado Signal para identificadores de privacidad (@lid), detección automática de mermas y bandeja de chat en tiempo real.',
      'Diseño del candado satelital GPS Haversine (radio de 200m) contra entregas ficticias, motor de reserva garantizada de stock para clientes suscritos y suite de 329 pruebas automatizadas (309 en Vitest + 20 en Pytest).',
    ],
    skills: [
      'Next.js 14',
      'TypeScript',
      'Supabase (PostgreSQL / RLS)',
      'Dexie.js (Operación sin Red)',
      'Python FastAPI',
      'WhatsApp Evolution API',
      'Impresión Bluetooth 80mm',
      'Mapas Leaflet y GPS',
      'Vitest y Pytest',
      'Docker',
    ],
  },
  {
    company: 'TecnoAncon',
    role: 'Fundador y Arquitecto Principal de Sistemas',
    location: 'Ancón, Lima, Perú',
    period: '2025 — Presente',
    type: 'Liderazgo / Fundador',
    description:
      'Estudio de ingeniería de software enfocado en desarrollar soluciones rápidas, seguras y resilientes con funcionamiento sin internet, diseño móvil primero (360x800px) e integración práctica de Inteligencia Artificial.',
    highlights: [
      'Creación de tecnoancon-lake (base de conocimiento indexada en SQLite FTS5 con inyección de contexto por capas), reduciendo en un 60% el consumo de recursos en asistentes de IA.',
      'Desarrollo de POSito, sistema de punto de venta e inventario táctil sin dependencia de internet con respuesta menor a 50ms para comercios locales.',
      'Diseño de flujos de automatización empresarial con n8n, servicios en Python FastAPI y auditorías preventivas de seguridad OWASP.',
    ],
    skills: ['TypeScript', 'React', 'Python', 'n8n', 'SQLite FTS5', 'PostgreSQL', 'Google Cloud', 'Tailwind CSS', 'Docker'],
  },
  {
    company: 'Despegar.com',
    role: 'Ingeniero de Datos / Especialista en Tuberías de Datos',
    location: 'Buenos Aires, Argentina (Presencial)',
    period: '2020 — 2025',
    type: 'Tiempo Completo',
    description:
      'Integrante del equipo corporativo de ingeniería de datos responsable del desarrollo, mantenimiento y optimización de procesos masivos en Apache Spark y repositorios analíticos para la agencia de viajes líder de Latinoamérica.',
    highlights: [
      'Desarrollo y optimización de flujos de procesamiento distribuido con Apache Spark (balanceo de particiones y claves), reduciendo los tiempos de cómputo diario en un 30%.',
      'Implementación de tablas transaccionales con Apache Iceberg para asegurar consistencia de datos (ACID), consultas históricas y auditorías confiables.',
      'Construcción y mantenimiento de modelos analíticos orquestados con Apache Airflow y dbt, sosteniendo un 99.8% de disponibilidad en producción.',
      'Aplicación de controles automatizados de calidad de datos, pruebas de integración y soporte continuo a las áreas de negocio.',
    ],
    skills: ['Apache Spark', 'Apache Iceberg', 'Python', 'SQL', 'dbt', 'Apache Airflow', 'Hadoop', 'Docker', 'Git'],
  },
];

export const education = [
  {
    institution: 'Universidad Tecnológica Nacional (UTN)',
    title: 'Tecnicatura Universitaria en Programación',
    period: '2018 — 2020',
    description:
      'Formación universitaria en ingeniería de software, estructuras de datos, algoritmos, bases de datos relacionales y arquitectura de sistemas.',
  },
  {
    institution: 'IT University at Despegar',
    title: 'Especialización en Desarrollo Java y Grandes Volúmenes de Datos',
    period: '2019 — 2020',
    description: 'Programa intensivo corporativo en desarrollo de software empresarial, procesamiento de datos distribuidos y metodologías ágiles.',
  },
  {
    institution: 'Programa Codo a Codo',
    title: 'Programación Orientada a Objetos y Desarrollo Backend',
    period: '2018 — 2019',
    description: 'Fundamentos de ingeniería de software, patrones de diseño, lógica algorítmica y buenas prácticas de programación.',
  },
  {
    institution: 'Formación Continua y Especialización',
    title: 'Arquitectura de Datos Moderna, Sistemas sin Conexión e IA',
    period: '2021 — Presente',
    description:
      'Especialización continua en optimización de Apache Spark, Apache Iceberg, aplicaciones con sincronización sin red (IndexedDB), mensajería cifrada y automatización con IA.',
  },
];
