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
    id: 'andeafield-suite-erp',
    badge: 'Offline-First ERP, IoT & WhatsApp E2EE',
    category: 'fullstack',
    title: 'AndeaField Suite: Unified Agro-Logistics ERP, Mobile ESC/POS & Omnichannel Gateway',
    role: 'Lead Software & Operations Systems Engineer',
    company: 'AndeaField (AFCORP)',
    period: '2026 — Presente',
    summary:
      'Plataforma operativa unificada (7 módulos en Monolito Modular) para distribución mayorista, prospección territorial (2,431 prospectos en 48 zonas), impresión térmica Bluetooth ESC/POS 80mm, auditoría satelital GPS Haversine y atención automatizada por WhatsApp.',
    metrics: [
      { label: 'Tests Automatizados', value: '329 Passing' },
      { label: 'Latencia Táctil INP', value: '< 16ms (60 FPS)' },
      { label: 'Cobertura Territorial', value: '48 Zonas / 2.4k PDV' },
    ],
    situation:
      'La operación logística y comercial en Lima Este dependía de hojas de cálculo con colisiones de códigos, liquidaciones sin validación geográfica en zonas sin cobertura celular (SJL / Huachipa), problemas de descifrado Signal E2EE con identificadores @lid en WhatsApp y congelamiento de UI (INP > 250ms) en smartphones de gama de entrada.',
    task:
      'Diseñar y desplegar un ERP unificado bajo Vertical Slice Architecture (Reparto, Oficina, Activación, Comunicaciones, Planta, Facturación y Directorio) con resiliencia 100% Offline-First, impresión física en ruta, control satelital antifraude y costo $0/mes en infraestructura cloud.',
    action: [
      'Arquitectura Offline-First con Dexie.js (IndexedDB), Outbox Pattern idempotente y resolución de conflictos Last-Write-Wins (LWW), sincronizando con Supabase PostgreSQL (RLS) y BroadcastChannel inter-pestañas.',
      'Desarrollo de driver nativo de impresión térmica ESC/POS (80mm / 48 cols) vía Web Bluetooth API y fallback Android Intent RawBT con sanitización diacrítica ASCII automática.',
      'Implementación de Guard Satelital Haversine (umbral 200m) con bloqueo preventivo, recalibración in-situ y bitácora inmutable gps_audit_logs.',
      'Construcción de Gateway Omnicanal WhatsApp (Evolution API v2 + Python FastAPI Bot Worker) con enrutamiento inteligente de sesiones E2EE (@lid vs @s.whatsapp.net), NLP de mermas y Live Inbox Realtime.',
      'Codificación desde cero de generador vectorial QR SVG puro (ISO/IEC 18004 + Reed-Solomon GF(256) sin dependencias) para Portal Cliente 1-Tap y motor greedy de suscripciones con corte nocturno (23:00 America/Lima).',
    ],
    result: [
      '196 comercios activos y 2,431 prospectos georreferenciados operando con 0% pérdida de transacciones en zonas sin señal 4G.',
      'Eliminación total de entregas ficticias mediante auditoría GPS obligatoria y reducción del cierre de caja diario a menos de 2 minutos.',
      '329 tests unitarios y de integración (309 Vitest + 20 Pytest) pasando al 100% en CI/CD con rendimiento estricto de 60 FPS (INP < 16ms).',
    ],
    techStack: [
      'Next.js 14',
      'TypeScript (Strict)',
      'Supabase (PostgreSQL + RLS)',
      'Dexie.js (IndexedDB)',
      'Python FastAPI',
      'Evolution API v2 (WhatsApp E2EE)',
      'Web Bluetooth ESC/POS',
      'Leaflet & Haversine GPS',
      'Vitest & Pytest',
    ],
    architectureFlow: {
      title: 'Flujo Operativo AndeaField Suite (Planta ➔ Calle ➔ Nube)',
      steps: [
        {
          step: '1. Planta & Suscripciones',
          detail: 'Enjabe con tara automática, algoritmo greedy de garantía de stock para suscritos y handshake físico en rampa.',
        },
        {
          step: '2. Reparto Offline & GPS',
          detail: 'Validación satelital Haversine (<=200m), persistencia en Dexie IndexedDB y drenado asíncrono por Outbox Pattern.',
        },
        {
          step: '3. Impresión & Portal QR',
          detail: 'Emisión de ticket térmico 80mm por Web Bluetooth/RawBT y autogestión de pedidos con QR vectorial Reed-Solomon.',
        },
        {
          step: '4. WhatsApp Bot & Directorio',
          detail: 'FastAPI clasifica pedidos/mermas con soporte E2EE @lid y consolida KPIs financieros en vivo para el Directorio.',
        },
      ],
    },
  },
  {
    id: 'scalable-lakehouse',
    badge: 'Big Data & Distributed Systems',
    category: 'data',
    title: 'High-Throughput Lakehouse & Distributed Data Pipelines',
    role: 'Data Engineer',
    company: 'Despegar.com',
    period: '2020 — 2025',
    summary:
      'Desarrollo y optimización de pipelines de datos masivos sobre Apache Spark y Apache Iceberg para procesar terabytes de eventos transaccionales con SLA de alta disponibilidad.',
    metrics: [
      { label: 'Tiempo de Procesamiento', value: '-30%' },
      { label: 'Disponibilidad / SLA', value: '99.8%' },
      { label: 'Volumen Diario', value: 'Terabytes' },
    ],
    situation:
      'La plataforma líder de viajes en Latinoamérica requería consolidar terabytes de búsquedas, transacciones y reservas. Los pipelines batch requerían optimización en uniones de alta cardinalidad y modernización hacia tablas con soporte transaccional.',
    task:
      'Contribuir al desarrollo y mantenimiento de pipelines en arquitectura Medallion (Bronze, Silver, Gold) sobre Apache Spark e Iceberg, asegurando consistencia de datos, particionado eficiente y monitoreo con Airflow.',
    action: [
      'Implementación y mantenimiento de tablas Apache Iceberg para garantizar transaccionalidad ACID y soporte de Time-Travel.',
      'Optimización de ejecuciones Spark mediante salt-key repartitioning en uniones de alta cardinalidad, mitigando data skew.',
      'Configuración de tareas periódicas de compactación de micro-archivos y mantenimiento de snapshots.',
      'Integración de pruebas de integridad de datos y orquestación programada con Apache Airflow y dbt.',
    ],
    result: [
      'Optimización de hasta un 30% en los tiempos de cómputo de los jobs batch diarios.',
      'Disponibilidad del 99.8% en los Data Marts para reportes y analítica de negocio.',
      'Alta consistencia y trazabilidad en los flujos de datos transaccionales.',
    ],
    techStack: [
      'Apache Spark',
      'Apache Iceberg',
      'Python',
      'SQL / dbt',
      'Apache Airflow',
      'Docker',
      'Hadoop / HDFS',
      'Git',
    ],
    architectureFlow: {
      title: 'Flujo de Arquitectura Medallion Lakehouse',
      steps: [
        {
          step: '1. Ingestión Cruda (Bronze)',
          detail: 'Captura de eventos transaccionales y logs en tablas Iceberg en estado inmutable.',
        },
        {
          step: '2. Procesamiento Distribuido (Silver)',
          detail: 'Jobs Spark aplicando limpieza, deduplicación, validación de esquemas y enriquecimiento de dimensiones.',
        },
        {
          step: '3. Data Marts Agregados (Gold)',
          detail: 'Modelado dimensional optimizado con dbt para consultas analíticas de sub-segundo en BI.',
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
    title: 'Event-Driven Multi-Agent Orchestration & Context Slicing Engine',
    role: 'Lead AI & Systems Architect',
    company: 'TecnoAncon AI Lab',
    period: '2025 — Presente',
    summary:
      'Arquitectura de agentes autónomos, grafo de conocimiento SQLite FTS5 y orquestación con n8n, Python FastAPI y LLMs bajo protocolo de Context Slicing (L0-L3) para automatización de operaciones con baja latencia.',
    metrics: [
      { label: 'Intervención Manual', value: '-85%' },
      { label: 'Latencia de Decisión', value: '< 800ms' },
      { label: 'Ahorro de Tokens', value: '60%' },
    ],
    situation:
      'Las operaciones comerciales y de desarrollo requerían automatización inteligente sin incurrir en costos desmedidos de tokens, arranques en frío ni riesgos de alucinaciones en llamadas a herramientas.',
    task:
      'Construir un motor de orquestación desacoplado combinando n8n, microservicios en Python FastAPI, indexación semántica en SQLite FTS5 y APIs de LLMs con guardrails de seguridad y control estricto de contexto.',
    action: [
      'Diseño del protocolo de Context Slicing (L0 a L3) y generación de AST Repomap en <100ms para inyectar únicamente las firmas necesarias al modelo.',
      'Construcción de subagentes especializados con aislamiento de herramientas (Tool Sandboxing) y validación estricta con Pydantic v2 / Zod.',
      'Integración de n8n y Evolution API para orquestación basada en eventos, webhooks asíncronos y circuitos de reintento.',
      'Cosecha transversal de conocimiento (/factory-harvest) hacia un Knowledge Lake centralizado con búsqueda full-text.',
    ],
    result: [
      'Automatización del 85% de los flujos de respuesta operativa, clasificación de intenciones y triaje de reclamos.',
      'Reducción del 60% en consumo de tokens gracias a la inyección precisa de contexto.',
      'Ejecución resiliente 24/7 sin fallos por alucinaciones en herramientas.',
    ],
    techStack: [
      'Python',
      'FastAPI & Pydantic v2',
      'TypeScript',
      'n8n Orchestration',
      'SQLite FTS5 / PostgreSQL',
      'LLM APIs (OpenAI / Gemini)',
      'Docker',
    ],
    architectureFlow: {
      title: 'Flujo de Orquestación Multi-Agente Asíncrono',
      steps: [
        {
          step: '1. Ingress & Validación de Eventos',
          detail: 'Recepción de eventos vía webhooks en n8n/FastAPI con sanitización de payloads y control de acceso.',
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
          detail: 'Persistencia del estado de la conversación y despacho en tiempo real con métricas de observabilidad.',
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
    period: '2025 — Presente',
    summary:
      'Sistema de punto de venta e inventarios táctil mobile-first (360x800px) con arquitectura Local-First, sincronización en segundo plano y resiliencia total ante caídas de red.',
    metrics: [
      { label: 'Uptime Offline', value: '100%' },
      { label: 'Respuesta Táctil', value: '< 50ms' },
      { label: 'Compatibilidad', value: 'Mobile-First' },
    ],
    situation:
      'Los negocios locales en zonas costeras y emergentes enfrentan cortes intermitentes de electricidad e internet. Los sistemas POS tradicionales en la nube se bloquean por completo, provocando pérdidas de ventas.',
    task:
      'Diseñar un sistema POS y control de stock que opere 100% offline-first en dispositivos móviles y quioscos táctiles de bajo costo, sincronizando de forma segura y sin conflictos al reconectarse.',
    action: [
      'Arquitectura de almacenamiento local primario sobre IndexedDB/SQLite local, tratando el servidor remoto como un bus de réplica asíncrono.',
      'Diseño Mobile-First optimizado estrictamente para pantallas táctiles de 360x800px con feedback táctil inmediato y cero latencia de red en checkout.',
      'Implementación de sincronización basada en registros de eventos (Event Sourcing) con resolución determinista de conflictos.',
      'Empaquetado PWA ligero con Service Workers para ejecución nativa en Android y tabletas.',
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
      'Node.js',
      'Zod',
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
          detail: 'Cada transacción se encola como un evento inmutable con timestamp y metadatos.',
        },
        {
          step: '3. Background Sync Worker',
          detail: 'Service worker detecta conectividad y envía lotes de eventos al endpoint cloud central.',
        },
        {
          step: '4. Reconciliación & Notificaciones',
          detail: 'El servidor valida inventario consolidado y confirma la sincronización exitosa.',
        },
      ],
    },
  },
];
