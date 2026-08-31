export interface CaseStudy {
  id: string;
  badge: string;
  category: 'data' | 'ai' | 'fullstack';
  title: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  metrics: { label: string; value: string }[];
  situation: string;
  task: string;
  action: string[];
  result: string[];
  techStack: string[];
  architectureFlow: {
    title: string;
    steps: { step: string; detail: string }[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'scalable-lakehouse',
    badge: 'Big Data & Distributed Systems',
    category: 'data',
    title: 'High-Throughput Lakehouse & Distributed Data Pipelines',
    role: 'Senior Data Engineer',
    company: 'Despegar.com',
    period: '2020 — 2025',
    summary: 'Rediseño y optimización de pipelines de datos masivos sobre Apache Spark y Apache Iceberg para procesar terabytes de eventos transaccionales con SLA de misión crítica.',
    metrics: [
      { label: 'Tiempo de Procesamiento', value: '-30%' },
      { label: 'Disponibilidad / SLA', value: '99.8%' },
      { label: 'Volumen Diario', value: 'Terabytes' },
    ],
    situation:
      'La plataforma líder de viajes en Latinoamérica requería consolidar terabytes de búsquedas, transacciones y reservas en tiempo y forma. Los pipelines legacy sufrían de cuellos de botella por data skew en joins masivos y tiempos prolongados de reconciliación en cambios de esquema.',
    task:
      'Diseñar e implementar una arquitectura Lakehouse Medallion (Bronze, Silver, Gold) sobre Apache Spark y Apache Iceberg, garantizando transaccionalidad ACID, particionado dinámico y optimización de consultas para analytics estratégico.',
    action: [
      'Implementación de transacciones ACID y Time-Travel con Apache Iceberg para garantizar consistencia y reprocesamiento confiable.',
      'Optimización de ejecuciones Spark mediante salt-key repartitioning en uniones de alta cardinalidad, eliminando data skew.',
      'Automatización de compresión de micro-archivos (Compaction) y recolección de snapshots para reducir costos de almacenamiento en S3/HDFS.',
      'Definición de Data Quality Gates con dbt y pruebas de integridad ejecutadas automáticamente en orquestadores Apache Airflow.',
    ],
    result: [
      'Reducción del 30% en los tiempos totales de ejecución de los jobs batch diarios.',
      'Disponibilidad del 99.8% en los Data Marts de toma de decisiones financieras y comerciales.',
      'Cero inconsistencias en auditorías de datos transaccionales multi-país.',
    ],
    techStack: [
      'Apache Spark',
      'Apache Iceberg',
      'Python',
      'SQL / dbt',
      'Apache Airflow',
      'Docker',
      'Hadoop / HDFS',
      'CI/CD',
    ],
    architectureFlow: {
      title: 'Flujo de Arquitectura Medallion Lakehouse',
      steps: [
        {
          step: '1. Ingestión Cruda (Bronze)',
          detail: 'Captura de eventos streaming y réplicas de bases transaccionales en tablas Iceberg en estado inmutable.',
        },
        {
          step: '2. Procesamiento Distribuido (Silver)',
          detail: 'Jobs Spark aplicando limpieza, deduplicación, validación de esquemas y enriquecimiento de dimensiones.',
        },
        {
          step: '3. Data Marts Agregados (Gold)',
          detail: 'Modelado dimensional optimizado con dbt para consultas analíticas de sub-segundo en BI y ML.',
        },
        {
          step: '4. Orquestación & Calidad',
          detail: 'Airflow gestionando dependencias y disparando alertas proactivas ante desvíos de calidad de datos.',
        },
      ],
    },
  },
  {
    id: 'ai-orchestration-engine',
    badge: 'AI-Native & Autonomous Workflows',
    category: 'ai',
    title: 'Event-Driven Multi-Agent Orchestration & Workflow Engine',
    role: 'Lead AI & Systems Architect',
    company: 'TecnoAncon AI Lab',
    period: '2024 — Presente',
    summary: 'Arquitectura de agentes autónomos y orquestación con n8n, Python y LLMs bajo un protocolo de Context Slicing para automatización de operaciones complejas con baja latencia.',
    metrics: [
      { label: 'Intervención Manual', value: '-85%' },
      { label: 'Latencia de Decisión', value: '< 800ms' },
      { label: 'Ahorro de Tokens', value: '60%' },
    ],
    situation:
      'Las empresas y operaciones modernas pierden cientos de horas en tareas manuales entre CRM, bases de datos y soporte. Las soluciones comerciales de IA existentes generaban altos costos de tokens y riesgo de alucinaciones sin aislamiento de contexto.',
    task:
      'Construir un motor de orquestación de agentes desacoplado (Hub-and-Spoke) que combine n8n, servicios en Python y LLMs estructurados con guardrails de seguridad y persistencia de estado.',
    action: [
      'Diseño del protocolo de Context Slicing (L0 Constitución inmutable a L3 contexto quirúrgico) para evitar sobrecarga de tokens en llamadas a modelos.',
      'Construcción de subagentes especializados con aislamiento de herramientas (Tool Sandboxing) y validación estricta de esquemas con Pydantic/Zod.',
      'Integración de n8n para orquestación basada en eventos, webhooks asíncronos y circuitos de reintento automático.',
      'Implementación de observabilidad y auditoría de decisiones en tiempo real con trazabilidad completa de prompts y respuestas.',
    ],
    result: [
      'Automatización del 85% de los flujos de respuesta operativa y clasificación de leads.',
      'Reducción del 60% en consumo de tokens gracias a la inyección precisa de contexto.',
      'Ejecución resiliente 24/7 sin fallos catastróficos por alucinaciones en herramientas.',
    ],
    techStack: [
      'Python',
      'TypeScript',
      'n8n Orchestration',
      'OpenAI / Gemini / Anthropic APIs',
      'PostgreSQL',
      'Docker',
      'GCP',
      'FastAPI',
    ],
    architectureFlow: {
      title: 'Flujo de Orquestación Multi-Agente Asíncrono',
      steps: [
        {
          step: '1. Ingress & Validación de Eventos',
          detail: 'Recepción de eventos vía webhooks en n8n con sanitización de payloads y control de acceso.',
        },
        {
          step: '2. Enrutador & Slicing de Contexto',
          detail: 'Selección del agente especialista e inyección únicamente del AST y datos necesarios (L1-L3).',
        },
        {
          step: '3. Ejecución de Herramientas Aisladas',
          detail: 'Llamadas a funciones seguras (BD, APIs, Cloud Storage) con validación estricta de salida.',
        },
        {
          step: '4. Respuesta & Trazabilidad',
          detail: 'Persistencia del estado de la conversación y despacho a clientes/dashboards con alertas.',
        },
      ],
    },
  },
  {
    id: 'local-first-pos',
    badge: 'Mobile-First & Offline Architecture',
    category: 'fullstack',
    title: 'Solarpunk Local-First Point of Sale & Inventory Engine',
    role: 'Fullstack & Systems Architect',
    company: 'POSito / TecnoAncon',
    period: '2024 — Presente',
    summary: 'Sistema de punto de venta e inventarios táctil mobile-first (360x800px) con arquitectura Local-First, sincronización en segundo plano y resiliencia total ante caídas de red.',
    metrics: [
      { label: 'Uptime Offline', value: '100%' },
      { label: 'Respuesta Táctil', value: '< 50ms' },
      { label: 'Compatibilidad', value: 'Mobile-First' },
    ],
    situation:
      'Los negocios locales en zonas costeras y emergentes enfrentan cortes intermitentes de electricidad e internet. Los sistemas POS tradicionales en la nube se bloquean por completo, provocando pérdidas de ventas y colas.',
    task:
      'Diseñar un sistema POS y control de stock que opere 100% offline-first en dispositivos móviles y quioscos táctiles de bajo costo, sincronizando de forma segura y sin conflictos al reconectarse.',
    action: [
      'Arquitectura de almacenamiento local primario sobre IndexedDB/SQLite local, tratando el servidor remoto como un bus de réplica asíncrono.',
      'Diseño Mobile-First optimizado estrictamente para pantallas táctiles de 360x800px con feedback táctil inmediato y cero latencia de red en checkout.',
      'Implementación de sincronización basada en registros de eventos (Event Sourcing) con resolución determinista de conflictos.',
      'Empaquetado PWA ligero (<2MB de carga inicial) con Service Workers para ejecución nativa en Android y tabletas.',
    ],
    result: [
      '100% de continuidad operativa durante interrupciones de internet sin pérdida de tickets ni descuadre de caja.',
      'Experiencia de usuario instantánea (< 50ms en registrar ítems y cobrar).',
      'Despliegue exitoso en comercios locales bajo la filosofía Solarpunk de tecnología resiliente.',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'IndexedDB / SQLite',
      'Service Workers (PWA)',
      'Node.js / Express',
      'Zod Validation',
    ],
    architectureFlow: {
      title: 'Flujo Local-First & Replicación Asíncrona',
      steps: [
        {
          step: '1. Acción Táctil Local (<50ms)',
          detail: 'Venta o movimiento registrado de inmediato en IndexedDB local con actualización optimista de UI.',
        },
        {
          step: '2. Registro de Eventos (Event Log)',
          detail: 'Cada transacción se encola como un evento inmutable con timestamp y hash criptográfico.',
        },
        {
          step: '3. Background Sync Worker',
          detail: 'Service worker detecta conectividad y envía lotes de eventos al endpoint cloud central.',
        },
        {
          step: '4. Reconciliación & Notificaciones',
          detail: 'El servidor valida inventario consolidado y propaga el estado a la app móvil del dueño.',
        },
      ],
    },
  },
];
