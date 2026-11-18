export type Language = 'es' | 'en';

export interface TranslationSchema {
  nav: {
    caseStudies: string;
    techMatrix: string;
    experience: string;
    openSource: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    availableBadge: string;
    locationBadge: string;
    roleTitle: string;
    roleSubtitle: string;
    description: string;
    ctaCaseStudies: string;
    ctaGithub: string;
    pillars: {
      bigData: { title: string; subtitle: string };
      ai: { title: string; subtitle: string };
      fullstack: { title: string; subtitle: string };
    };
  };
  metrics: {
    experience: { value: string; label: string; highlight: string };
    spark: { value: string; label: string; highlight: string };
    sla: { value: string; label: string; highlight: string };
    ai: { value: string; label: string; highlight: string };
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterData: string;
    filterAi: string;
    filterFullstack: string;
    viewDeepDive: string;
    hideDeepDive: string;
    stageLabel: string;
    items: {
      id: string;
      badge: string;
      category: 'data' | 'ai' | 'fullstack';
      title: string;
      role: string;
      company: string;
      period: string;
      summary: string;
      metrics: { label: string; value: string }[];
      situationTitle: string;
      situation: string;
      taskTitle: string;
      task: string;
      actionsTitle: string;
      action: string[];
      resultsTitle: string;
      result: string[];
      techStack: string[];
      architectureFlow: {
        title: string;
        steps: { step: string; detail: string }[];
      };
    }[];
  };
  techMatrix: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      category: string;
      badge: string;
      description: string;
      technologies: {
        name: string;
        level: string;
      }[];
    }[];
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    rolesTitle: string;
    educationTitle: string;
    keyAchievements: string;
    atsTitle: string;
    atsDescription: string;
    requestCv: string;
    jobs: {
      company: string;
      role: string;
      location: string;
      period: string;
      type: string;
      description: string;
      highlights: string[];
      skills: string[];
    }[];
    education: {
      institution: string;
      title: string;
      period: string;
      description: string;
    }[];
  };
  openSource: {
    badge: string;
    title: string;
    subtitle: string;
    exploreAll: string;
    repos: {
      name: string;
      repoUrl: string;
      liveUrl?: string;
      description: string;
      tags: string[];
      language: string;
      features: string[];
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    locationValue: string;
    whatsappLabel: string;
    sendEmailButton: string;
    copiedToast: string;
  };
  footer: {
    roleDescription: string;
    solarpunkText: string;
    hostedText: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      caseStudies: 'Case Studies',
      techMatrix: 'Stack & Habilidades',
      experience: 'Experiencia',
      openSource: 'Open Source',
      contact: 'Contacto',
      downloadCv: 'DESCARGAR CV',
    },
    hero: {
      availableBadge: 'Disponible para roles de Ingeniería',
      locationBadge: 'Lima, Perú (GMT-5)',
      roleTitle: 'Anthony Villalobos',
      roleSubtitle: 'Data & Software Engineer | Fullstack & AI Systems Architect',
      description:
        'Especializado en sistemas ERP Offline-First de misión crítica (Next.js, TypeScript, Supabase RLS, Web Bluetooth ESC/POS), pipelines de Big Data distribuidos (Spark, Iceberg) y pasarelas omnicanal con IA y criptografía Signal E2EE (FastAPI, Evolution API, n8n).',
      ctaCaseStudies: 'Explorar Case Studies de Arquitectura',
      ctaGithub: 'Ver Código en GitHub',
      pillars: {
        bigData: { title: 'Big Data & SQL Core', subtitle: 'Spark, Iceberg & Supabase RLS' },
        ai: { title: 'AI & Omnichannel', subtitle: 'FastAPI, WhatsApp E2EE & n8n' },
        fullstack: { title: 'Offline-First & IoT', subtitle: 'Next.js, Dexie & ESC/POS BT' },
      },
    },
    metrics: {
      experience: {
        value: '6+ Años',
        label: 'Experiencia en Datos, Arquitectura y Software',
        highlight: 'AndeaField, Despegar & TecnoAncon',
      },
      spark: {
        value: '329 Tests',
        label: 'Suite Automatizada (Vitest + Pytest) en Producción',
        highlight: 'AndeaField Suite v1.3.1',
      },
      sla: {
        value: '99.8%',
        label: 'Disponibilidad en Data Marts y Operación Offline',
        highlight: 'Lakehouse & Outbox Pattern',
      },
      ai: {
        value: '< 16ms',
        label: 'Respuesta Táctil INP (60 FPS) & Impresión Bluetooth',
        highlight: 'Mobile-First 360x800px',
      },
    },
    caseStudies: {
      badge: 'ARQUITECTURA & SYSTEM DESIGN',
      title: 'Case Studies de Ingeniería',
      subtitle:
        'Desglose de sistemas en producción real bajo el framework STAR (Situación, Tarea, Acción, Resultados) y diseño arquitectónico.',
      filterAll: 'Todos los Casos',
      filterData: 'Big Data & Lakehouse (Despegar)',
      filterAi: 'AI Multi-Agent & WhatsApp E2EE',
      filterFullstack: 'ERP Offline-First & IoT (AndeaField)',
      viewDeepDive: 'Ver Deep Dive',
      hideDeepDive: 'Ocultar Análisis',
      stageLabel: 'ETAPA',
      items: [
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
          situationTitle: '1. Situación & Desafío de Ingeniería',
          situation:
            'La operación logística y comercial en Lima Este dependía de hojas de cálculo con colisiones de códigos, liquidaciones sin validación geográfica en zonas sin cobertura celular (SJL / Huachipa), problemas de descifrado Signal E2EE con identificadores @lid en WhatsApp y congelamiento de UI (INP > 250ms) en smartphones de gama de entrada.',
          taskTitle: '2. Tarea Arquitectónica',
          task:
            'Diseñar y desplegar un ERP unificado bajo Vertical Slice Architecture (Reparto, Oficina, Activación, Comunicaciones, Planta, Facturación y Directorio) con resiliencia 100% Offline-First, impresión física en ruta, control satelital antifraude y costo $0/mes en infraestructura cloud.',
          actionsTitle: '3. Decisiones Técnicas & Acciones Clave',
          action: [
            'Arquitectura Offline-First con Dexie.js (IndexedDB), Outbox Pattern idempotente y resolución de conflictos Last-Write-Wins (LWW), sincronizando con Supabase PostgreSQL (RLS) y BroadcastChannel inter-pestañas.',
            'Desarrollo de driver nativo de impresión térmica ESC/POS (80mm / 48 cols) vía Web Bluetooth API y fallback Android Intent RawBT con sanitización diacrítica ASCII automática.',
            'Implementación de Guard Satelital Haversine (umbral 200m) con bloqueo preventivo, recalibración in-situ y bitácora inmutable gps_audit_logs.',
            'Construcción de Gateway Omnicanal WhatsApp (Evolution API v2 + Python FastAPI Bot Worker) con enrutamiento inteligente de sesiones E2EE (@lid vs @s.whatsapp.net), NLP de mermas y Live Inbox Realtime.',
            'Codificación desde cero de generador vectorial QR SVG puro (ISO/IEC 18004 + Reed-Solomon GF(256) sin dependencias) para Portal Cliente 1-Tap y motor greedy de suscripciones con corte nocturno (23:00 America/Lima).',
          ],
          resultsTitle: '4. Resultados Cuantitativos & Impacto',
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
          role: 'Data Engineer (Data Team Member)',
          company: 'Despegar.com',
          period: '2020 — 2025',
          summary:
            'Participación en el desarrollo y optimización de pipelines de datos masivos sobre Apache Spark y Apache Iceberg para procesar terabytes de eventos transaccionales con SLA de alta disponibilidad.',
          metrics: [
            { label: 'Tiempo de Procesamiento', value: '-30%' },
            { label: 'Disponibilidad / SLA', value: '99.8%' },
            { label: 'Volumen Diario', value: 'Terabytes' },
          ],
          situationTitle: '1. Situación & Desafío de Ingeniería',
          situation:
            'La plataforma de viajes en Latinoamérica requería consolidar terabytes de búsquedas, transacciones y reservas. Los pipelines batch requerían optimización en uniones de alta cardinalidad y modernización hacia tablas con soporte transaccional.',
          taskTitle: '2. Tarea en el Equipo',
          task:
            'Contribuir al desarrollo y mantenimiento de pipelines en arquitectura Medallion (Bronze, Silver, Gold) sobre Apache Spark e Iceberg, asegurando consistencia de datos, particionado eficiente y monitoreo con Airflow.',
          actionsTitle: '3. Decisiones Técnicas & Acciones Clave',
          action: [
            'Implementación y mantenimiento de tablas Apache Iceberg para garantizar transaccionalidad ACID y soporte de Time-Travel.',
            'Optimización de jobs Spark mediante técnicas de salt-key y repartitioning para mitigar data skew en joins de gran escala.',
            'Configuración de tareas periódicas de compactación de micro-archivos y mantenimiento de snapshots.',
            'Integración de pruebas de integridad de datos y orquestación programada con Apache Airflow y dbt.',
          ],
          resultsTitle: '4. Resultados Cuantitativos & Impacto',
          result: [
            'Optimización de hasta un 30% en los tiempos de cómputo de pipelines batch diarios.',
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
                detail: 'Captura de eventos transaccionales y logs en tablas Iceberg en estado crudo e inmutable.',
              },
              {
                step: '2. Procesamiento Spark (Silver)',
                detail: 'Jobs Spark aplicando limpieza, tipado, deduplicación y enriquecimiento de dimensiones.',
              },
              {
                step: '3. Data Marts (Gold)',
                detail: 'Tablas agregadas y modeladas con dbt para consultas analíticas de sub-segundo en BI.',
              },
              {
                step: '4. Orquestación Airflow',
                detail: 'Gestión de dependencias, reintentos automáticos y alertas de calidad de datos.',
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
          situationTitle: '1. Situación & Desafío de Ingeniería',
          situation:
            'Las operaciones comerciales y de desarrollo requerían automatización inteligente sin incurrir en costos desmedidos de tokens, arranques en frío ni riesgos de alucinaciones en llamadas a herramientas.',
          taskTitle: '2. Tarea Arquitectónica',
          task:
            'Construir un motor de orquestación desacoplado combinando n8n, microservicios en Python FastAPI, indexación semántica en SQLite FTS5 y APIs de LLMs con guardrails de seguridad y control estricto de contexto.',
          actionsTitle: '3. Decisiones Técnicas & Acciones Clave',
          action: [
            'Diseño de arquitectura de Context Slicing (L0 a L3) y generación de AST Repomap en <100ms para inyectar únicamente las firmas necesarias al modelo.',
            'Aislamiento de herramientas con validación tipada estricta (Zod / Pydantic v2) y manejo determinista de errores.',
            'Orquestación basada en eventos y webhooks en n8n / Evolution API con trazabilidad y colas de ejecución.',
            'Cosecha transversal de conocimiento (/factory-harvest) hacia un Knowledge Lake centralizado con búsqueda full-text.',
          ],
          resultsTitle: '4. Resultados Cuantitativos & Impacto',
          result: [
            'Automatización del 85% en flujos de respuesta operativa, clasificación de intenciones y triaje de reclamos.',
            'Reducción de hasta un 60% en consumo de tokens gracias a la inyección quirúrgica de contexto.',
            'Ejecución estable 24/7 sin bloqueos por alucinaciones en herramientas.',
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
                step: '1. Ingress & Validación',
                detail: 'Recepción de eventos vía webhooks en n8n/FastAPI con sanitización de payloads y control de acceso.',
              },
              {
                step: '2. Router & Context Slicing',
                detail: 'Selección del agente especialista e inyección quirúrgica de contexto L0-L3 y schemas requeridos.',
              },
              {
                step: '3. Ejecución Aislada',
                detail: 'Llamadas a funciones seguras (APIs, BD, storage) con validación estricta de salida.',
              },
              {
                step: '4. Respuesta & Trazabilidad',
                detail: 'Despacho del resultado en tiempo real y almacenamiento de métricas de observabilidad.',
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
          situationTitle: '1. Situación & Desafío de Ingeniería',
          situation:
            'Negocios y comercios locales en zonas costeras experimentan interrupciones frecuentes de internet. Los sistemas cloud tradicionales se bloquean por completo en medio de operaciones de cobro.',
          taskTitle: '2. Tarea Arquitectónica',
          task:
            'Diseñar una arquitectura Local-First donde el almacenamiento local en el dispositivo sea la fuente primaria de verdad, garantizando respuesta instantánea en 360x800px y sincronización asíncrona segura.',
          actionsTitle: '3. Decisiones Técnicas & Acciones Clave',
          action: [
            'Almacenamiento primario en IndexedDB/SQLite local con UI reactiva y optimista (<50ms).',
            'Diseño Mobile-First optimizado estrictamente para pantallas táctiles de 360x800px sin desbordamientos.',
            'Implementación de cola de eventos inmutables para sincronización asíncrona con resolución de conflictos.',
            'Configuración PWA con Service Workers para ejecución nativa en dispositivos móviles y tabletas.',
          ],
          resultsTitle: '4. Resultados Cuantitativos & Impacto',
          result: [
            '100% de continuidad operativa durante caídas de conectividad.',
            'Experiencia de usuario instantánea y confiable en hardware accesible.',
            'Despliegue bajo la filosofía Solarpunk de tecnología resiliente.',
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
                step: '1. Acción Táctil (<50ms)',
                detail: 'Transacción registrada de inmediato en IndexedDB local con actualización optimista de UI.',
              },
              {
                step: '2. Event Log Inmutable',
                detail: 'Registro encolado con timestamp y metadatos para trazabilidad local.',
              },
              {
                step: '3. Background Sync Worker',
                detail: 'El Service Worker detecta red y envía lotes de eventos al endpoint cloud de respaldo.',
              },
              {
                step: '4. Reconciliación Cloud',
                detail: 'El servidor valida estado consolidado y confirma la sincronización exitosa.',
              },
            ],
          },
        },
      ],
    },
    techMatrix: {
      badge: 'STACK TECNOLÓGICO & COMPETENCIAS',
      title: 'Matriz de Ingeniería',
      subtitle:
        'Tecnologías validadas en producción real para escala de datos, ERPs Offline-First, hardware IoT y automatización con IA.',
      categories: [
        {
          category: 'Big Data, Lakehouse & Relational Core',
          badge: 'Data Core',
          description:
            'Diseño de pipelines distribuidos, modelado transaccional con seguridad RLS y sincronización determinista de datos.',
          technologies: [
            { name: 'Apache Spark & Iceberg', level: 'Experto' },
            { name: 'SQL Avanzado & PostgreSQL', level: 'Experto' },
            { name: 'Supabase (RLS & Realtime)', level: 'Experto' },
            { name: 'dbt (data build tool)', level: 'Avanzado' },
            { name: 'Apache Airflow', level: 'Avanzado' },
            { name: 'Python ETL & Streaming XML', level: 'Experto' },
            { name: 'Data Warehousing & BigQuery', level: 'Experto' },
            { name: 'DuckDB / SQLite FTS5', level: 'Avanzado' },
          ],
        },
        {
          category: 'AI-Native, Omnichannel & Automation',
          badge: 'AI & Messaging',
          description:
            'Pasarelas conversacionales E2EE, microservicios de clasificación NLP, orquestación multi-agente y Context Slicing.',
          technologies: [
            { name: 'Python (FastAPI & Pydantic v2)', level: 'Experto' },
            { name: 'n8n Workflow Orchestration', level: 'Experto' },
            { name: 'WhatsApp Evolution API v2 (E2EE)', level: 'Experto' },
            { name: 'Multi-Agent & Context Slicing', level: 'Avanzado' },
            { name: 'NLP Intent & Claims Engines', level: 'Avanzado' },
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
            { name: 'TypeScript (Estricto)', level: 'Experto' },
            { name: 'Next.js 14 & React 18', level: 'Experto' },
            { name: 'Offline-First (Dexie & Outbox)', level: 'Experto' },
            { name: 'Web Bluetooth ESC/POS Printing', level: 'Avanzado' },
            { name: 'Tailwind CSS (Zero-Jank 60FPS)', level: 'Experto' },
            { name: 'Haversine GPS Guard & Leaflet', level: 'Avanzado' },
            { name: 'ISO 18004 QR Reed-Solomon SVG', level: 'Avanzado' },
          ],
        },
        {
          category: 'Cloud, Testing, DevOps & Security',
          badge: 'Infrastructure',
          description:
            'Arquitectura de costo optimizado, testing automatizado exhaustivo, seguridad OWASP y despliegues reproducibles.',
          technologies: [
            { name: 'Vitest & Pytest (329+ Tests)', level: 'Experto' },
            { name: 'Docker & Linux VPS (Hetzner)', level: 'Avanzado' },
            { name: 'Vercel Edge & GitHub Actions', level: 'Avanzado' },
            { name: 'Supabase CLI Dual-Env FinOps', level: 'Avanzado' },
            { name: 'OWASP & Signal E2EE Routing', level: 'Avanzado' },
            { name: 'Git Workflow & Monorepos', level: 'Experto' },
          ],
        },
      ],
    },
    experience: {
      badge: 'TRAYECTORIA & HISTORIAL',
      title: 'Experiencia Profesional',
      subtitle:
        'Impacto técnico comprobado liderando arquitecturas en producción real, ingeniería de datos masivos y automatización.',
      rolesTitle: 'Roles de Ingeniería & Dirección Técnica',
      educationTitle: 'Formación & Especialización',
      keyAchievements: 'Logros & Responsabilidades Clave:',
      atsTitle: 'Perfil Optimizado para ATS',
      atsDescription:
        'Estructura curricular actualizada con los hitos de AndeaField Suite, Despegar.com y TecnoAncon bajo métricas cuantificables STAR.',
      requestCv: 'Descargar CV actualizado en PDF →',
      jobs: [
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
          skills: [
            'TypeScript',
            'React',
            'Python',
            'n8n',
            'SQLite FTS5',
            'PostgreSQL',
            'GCP',
            'Tailwind CSS',
            'Docker',
          ],
        },
        {
          company: 'Despegar.com',
          role: 'Data Engineer / Data Pipeline Specialist',
          location: 'Buenos Aires, Argentina (Presencial)',
          period: '2020 — 2025',
          type: 'Full-time',
          description:
            'Formé parte del equipo de ingeniería de datos responsable del desarrollo, mantenimiento y optimización de pipelines de datos masivos en Apache Spark, soporte a Data Warehouses y flujos batch para la plataforma líder de viajes.',
          highlights: [
            'Participación activa en el desarrollo y optimización de pipelines de datos distribuidos con Apache Spark (salt-key y repartitioning), mejorando tiempos de cómputo en un 30%.',
            'Soporte en la implementación de arquitecturas transaccionales Lakehouse con Apache Iceberg para garantizar consistencia ACID, Time-Travel y auditoría de datos.',
            'Construcción y modelado de Data Marts analíticos orquestados con Apache Airflow y dbt manteniendo un 99.8% de disponibilidad SLA.',
            'Ejecución de validaciones automáticas de calidad de datos (Data Quality Gates), pruebas de integración y mantenimiento continuo de flujos corporativos.',
          ],
          skills: [
            'Apache Spark',
            'Apache Iceberg',
            'Python',
            'SQL',
            'dbt',
            'Airflow',
            'Hadoop',
            'Docker',
            'Git',
          ],
        },
      ],
      education: [
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
          description:
            'Capacitación técnica intensiva en desarrollo empresarial Java, frameworks de datos distribuidos y metodologías ágiles en entornos corporativos.',
        },
        {
          institution: 'Programa Codo a Codo',
          title: 'Programación Orientada a Objetos & Backend',
          period: '2018 — 2019',
          description:
            'Bases de desarrollo de software, patrones de diseño OOP, lógica algorítmica y buenas prácticas de codificación.',
        },
        {
          institution: 'Formación Continua & Especialización',
          title: 'Modern Data Stack, Offline-First & AI Systems',
          period: '2021 — Presente',
          description:
            'Especialización en optimización de Apache Spark, Apache Iceberg, arquitecturas Offline-First (IndexedDB/Outbox), criptografía de mensajería y orquestación de agentes de IA.',
        },
      ],
    },
    openSource: {
      badge: 'PROOF OF CODE & REPOSITORIOS',
      title: 'Proyectos & Open Source',
      subtitle:
        'Sistemas en producción y herramientas de ingeniería con código modular, tipado estricto y pruebas automatizadas.',
      exploreAll: 'Explorar todos los repositorios en github.com/Thonii →',
      repos: [
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
            'Código fuente de este portafolio de ingeniería. Construido con React 18, Vite, TypeScript estricto, motor nativo de SVG Morphing (Spring Physics) y GitHub Actions.',
          tags: ['Portfolio', 'React 18', 'TypeScript', 'SVG Morphing', 'Solarpunk'],
          language: 'TypeScript',
          features: ['i18n Automático (ES/EN)', 'Spring Physics SVG', 'Mobile-First 360x800px'],
        },
      ],
    },
    contact: {
      badge: 'INICIA UNA CONVERSACIÓN TÉCNICA',
      title: '¿Hablamos de Sistemas, Datos o Arquitectura?',
      subtitle:
        'Abierto a oportunidades como Data Engineer, Senior Fullstack / Software Engineer o Solutions Architect en empresas tecnológicas y proyectos de alto impacto.',
      emailLabel: 'Email Profesional',
      linkedinLabel: 'Red Profesional',
      locationLabel: 'Ubicación & Modalidad',
      locationValue: 'Lima, Perú (GMT-5 / Remoto Global & Híbrido)',
      whatsappLabel: 'WhatsApp Directo',
      sendEmailButton: 'Enviar Correo Directo',
      copiedToast: '¡Email copiado al portapapeles!',
    },
    footer: {
      roleDescription: 'Software, Data & AI Systems Engineering',
      solarpunkText:
        'Filosofía Solarpunk: Tecnología escalable, resiliente y amigable con el ecosistema.',
      hostedText: 'Alojado en GitHub Pages',
    },
  },
  en: {
    nav: {
      caseStudies: 'Case Studies',
      techMatrix: 'Stack & Skills',
      experience: 'Experience',
      openSource: 'Open Source',
      contact: 'Contact',
      downloadCv: 'DOWNLOAD CV',
    },
    hero: {
      availableBadge: 'Available for Engineering Roles',
      locationBadge: 'Lima, Peru (GMT-5)',
      roleTitle: 'Anthony Villalobos',
      roleSubtitle: 'Data & Software Engineer | Fullstack & AI Systems Architect',
      description:
        'Specialized in mission-critical Offline-First ERP systems (Next.js, TypeScript, Supabase RLS, Web Bluetooth ESC/POS), distributed Big Data pipelines (Spark, Iceberg), and AI omnichannel gateways with Signal E2EE cryptography (FastAPI, Evolution API, n8n).',
      ctaCaseStudies: 'Explore Architecture Case Studies',
      ctaGithub: 'View Code on GitHub',
      pillars: {
        bigData: { title: 'Big Data & SQL Core', subtitle: 'Spark, Iceberg & Supabase RLS' },
        ai: { title: 'AI & Omnichannel', subtitle: 'FastAPI, WhatsApp E2EE & n8n' },
        fullstack: { title: 'Offline-First & IoT', subtitle: 'Next.js, Dexie & ESC/POS BT' },
      },
    },
    metrics: {
      experience: {
        value: '6+ Years',
        label: 'Experience in Data, Architecture & Software',
        highlight: 'AndeaField, Despegar & TecnoAncon',
      },
      spark: {
        value: '329 Tests',
        label: 'Automated Test Suite (Vitest + Pytest) in Prod',
        highlight: 'AndeaField Suite v1.3.1',
      },
      sla: {
        value: '99.8%',
        label: 'Availability Across Data Marts & Offline Sync',
        highlight: 'Lakehouse & Outbox Pattern',
      },
      ai: {
        value: '< 16ms',
        label: 'Touch INP Latency (60 FPS) & Bluetooth Printing',
        highlight: 'Mobile-First 360x800px',
      },
    },
    caseStudies: {
      badge: 'ARCHITECTURE & SYSTEM DESIGN',
      title: 'Engineering Case Studies',
      subtitle:
        'Deep dives into real-world production challenges using the STAR framework (Situation, Task, Action, Result) and system design diagrams.',
      filterAll: 'All Cases',
      filterData: 'Big Data & Lakehouse (Despegar)',
      filterAi: 'AI Multi-Agent & WhatsApp E2EE',
      filterFullstack: 'Offline-First ERP & IoT (AndeaField)',
      viewDeepDive: 'View Deep Dive',
      hideDeepDive: 'Hide Analysis',
      stageLabel: 'STAGE',
      items: [
        {
          id: 'andeafield-suite-erp',
          badge: 'Offline-First ERP, IoT & WhatsApp E2EE',
          category: 'fullstack',
          title: 'AndeaField Suite: Unified Agro-Logistics ERP, Mobile ESC/POS & Omnichannel Gateway',
          role: 'Lead Software & Operations Systems Engineer',
          company: 'AndeaField (AFCORP)',
          period: '2026 — Present',
          summary:
            'Unified operational platform (7 modules in a Modular Monolith) for wholesale distribution, territorial activation (2,431 prospects across 48 zones), 80mm Bluetooth ESC/POS thermal printing, Haversine GPS audit, and automated WhatsApp operations.',
          metrics: [
            { label: 'Automated Tests', value: '329 Passing' },
            { label: 'Touch INP Latency', value: '< 16ms (60 FPS)' },
            { label: 'Territorial Reach', value: '48 Zones / 2.4k POS' },
          ],
          situationTitle: '1. Situation & Engineering Challenge',
          situation:
            'Wholesale logistics and field operations in East Lima relied on error-prone spreadsheets with duplicate business codes, unverified deliveries in cellular dead zones, Signal E2EE decryption errors with WhatsApp @lid privacy IDs, and severe UI thread freezes (INP > 250ms) on entry-level Android devices.',
          taskTitle: '2. Architectural Task',
          task:
            'Architect and ship a unified Modular Monolith ERP (Delivery, Dispatch Office, Territorial Activation, WhatsApp Communications, Warehouse Plant, Billing, and Executive Board) with 100% Offline-First resilience, in-field receipt printing, anti-fraud GPS enforcement, and $0/month cloud infrastructure cost.',
          actionsTitle: '3. Technical Decisions & Key Actions',
          action: [
            'Built an Offline-First engine using Dexie.js (IndexedDB), an idempotent Outbox Pattern, and Last-Write-Wins (LWW) conflict resolution synced with Supabase PostgreSQL (RLS) and cross-tab BroadcastChannels.',
            'Engineered a dual-transport 80mm ESC/POS thermal printer driver (48 cols) via Web Bluetooth API and Android Intent RawBT fallback with automatic ASCII diacritic sanitization.',
            'Implemented an unavoidable Haversine Satellite GPS Guard (200m threshold) with in-situ coordinate recalibration and an immutable gps_audit_logs trail.',
            'Developed an Omnichannel WhatsApp Gateway (Evolution API v2 + Python FastAPI Bot Worker) featuring intelligent Signal E2EE @lid session routing, NLP shrinkage/claim detection, and a Realtime WebSockets Live Inbox.',
            'Wrote a zero-dependency pure SVG QR generator (ISO/IEC 18004 + Reed-Solomon GF(256) math) for a 1-Tap Customer Portal alongside a greedy subscription stock-guarantee allocator and 11:00 PM cutoff engine.',
          ],
          resultsTitle: '4. Quantitative Results & Impact',
          result: [
            '196 active B2B merchants and 2,431 geotagged prospects operating with 0% transaction loss across dead-zone routes.',
            '100% elimination of spoofed deliveries via mandatory GPS enforcement and daily cash reconciliation reduced to under 2 minutes.',
            '329 automated unit and integration tests (309 Vitest + 20 Pytest) passing in CI/CD with strict 60 FPS performance (INP < 16ms).',
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
            title: 'AndeaField Suite End-to-End Flow (Plant ➔ Field ➔ Cloud)',
            steps: [
              {
                step: '1. Plant & Subscriptions',
                detail: 'Crate weighing with auto-tare, greedy stock-guarantee allocator for subscribers, and ramp loading handshake.',
              },
              {
                step: '2. Offline Route & GPS',
                detail: 'Haversine satellite guard (<=200m), local Dexie IndexedDB persistence, and background Outbox Pattern flushing.',
              },
              {
                step: '3. Thermal Print & QR',
                detail: '80mm receipt printing via Web Bluetooth/RawBT and customer self-service via pure Reed-Solomon SVG QR codes.',
              },
              {
                step: '4. WhatsApp AI & Board',
                detail: 'FastAPI worker classifies orders/claims over Signal E2EE @lid sessions and feeds live executive margin KPIs.',
              },
            ],
          },
        },
        {
          id: 'scalable-lakehouse',
          badge: 'Big Data & Distributed Systems',
          category: 'data',
          title: 'High-Throughput Lakehouse & Distributed Data Pipelines',
          role: 'Data Engineer (Data Team Member)',
          company: 'Despegar.com',
          period: '2020 — 2025',
          summary:
            'Contributed to the development and optimization of massive data pipelines using Apache Spark and Apache Iceberg to process terabytes of transactional events under high-availability SLAs.',
          metrics: [
            { label: 'Processing Time', value: '-30%' },
            { label: 'SLA Availability', value: '99.8%' },
            { label: 'Daily Volume', value: 'Terabytes' },
          ],
          situationTitle: '1. Situation & Engineering Challenge',
          situation:
            'The leading online travel agency in Latin America required consolidating terabytes of searches, bookings, and financial events. Batch pipelines faced high-cardinality skew bottlenecks and needed modernizing to transactional table formats.',
          taskTitle: '2. Team Task & Scope',
          task:
            'Contribute to developing and maintaining data pipelines across a Medallion Architecture (Bronze, Silver, Gold) on Apache Spark and Apache Iceberg, ensuring data consistency, efficient partitioning, and robust monitoring with Airflow.',
          actionsTitle: '3. Technical Decisions & Key Actions',
          action: [
            'Maintained and optimized Apache Iceberg tables to provide ACID transactions and reliable Time-Travel reprojection.',
            'Tuned Spark jobs using salt-key salting and custom repartitioning strategies to eliminate skew on large joins.',
            'Configured automated file compaction and snapshot lifecycle management.',
            'Integrated automated data quality validation gates with Airflow and dbt.',
          ],
          resultsTitle: '4. Quantitative Results & Impact',
          result: [
            'Up to 30% reduction in execution times across daily batch workloads.',
            '99.8% SLA availability for business reporting and analytics marts.',
            'High consistency and auditability across transactional pipelines.',
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
            title: 'Medallion Lakehouse Architecture Flow',
            steps: [
              {
                step: '1. Raw Ingestion (Bronze)',
                detail: 'Capturing streaming transactional events and logs into immutable Iceberg raw tables.',
              },
              {
                step: '2. Spark Processing (Silver)',
                detail: 'Distributed Spark jobs applying deduplication, schema validation, and dimension enrichment.',
              },
              {
                step: '3. Data Marts (Gold)',
                detail: 'Curated dimensional tables modeled with dbt for sub-second analytical queries.',
              },
              {
                step: '4. Airflow Orchestration',
                detail: 'Managing DAG dependencies, automated retries, and data quality alert gates.',
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
          period: '2025 — Present',
          summary:
            'Autonomous agent architecture, SQLite FTS5 knowledge graph, and workflow orchestration with n8n, Python FastAPI, and LLMs utilizing a Context Slicing protocol (L0-L3) for low-latency automations.',
          metrics: [
            { label: 'Manual Work', value: '-85%' },
            { label: 'Decision Latency', value: '< 800ms' },
            { label: 'Token Efficiency', value: '60%' },
          ],
          situationTitle: '1. Situation & Engineering Challenge',
          situation:
            'Business operations required intelligent decision automation without excessive token costs, cold-start delays, or risk of hallucination during tool execution.',
          taskTitle: '2. Architectural Task',
          task:
            'Build a decoupled orchestration engine combining n8n event-driven workflows, Python FastAPI microservices, SQLite FTS5 knowledge indexing, and structured LLM APIs with strict context control.',
          actionsTitle: '3. Technical Decisions & Key Actions',
          action: [
            'Designed a 4-layer Context Slicing protocol (L0 to L3) and <100ms AST Repomap generator to inject only necessary domain tokens per agent turn.',
            'Implemented tool sandboxing with strict type validation (Zod / Pydantic v2) and graceful error-handling loops.',
            'Structured asynchronous event webhooks in n8n and Evolution API with execution queues and retries.',
            'Built automated cross-project knowledge harvesting (/factory-harvest) into a centralized full-text searchable Knowledge Lake.',
          ],
          resultsTitle: '4. Quantitative Results & Impact',
          result: [
            '85% automation of operational responses, intent classification, and claim triage pipelines.',
            '60% reduction in token consumption via surgical context injection.',
            'Reliable 24/7 execution with zero tool-hallucination crashes.',
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
            title: 'Asynchronous Multi-Agent Orchestration Flow',
            steps: [
              {
                step: '1. Ingress & Validation',
                detail: 'Receiving webhook events in n8n/FastAPI with payload sanitization and access controls.',
              },
              {
                step: '2. Router & Context Slicing',
                detail: 'Routing to specialized subagent and injecting surgical L0-L3 schema and prompt slice.',
              },
              {
                step: '3. Sandboxed Tool Execution',
                detail: 'Executing sandboxed API and database functions with output schema validation.',
              },
              {
                step: '4. Output & Observability',
                detail: 'Dispatching final payload to consumers in real time and storing telemetry metrics.',
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
          period: '2025 — Present',
          summary:
            'Touch-optimized, mobile-first (360x800px) point-of-sale and inventory system with Local-First architecture, background synchronization, and full resilience against network dropouts.',
          metrics: [
            { label: 'Offline Uptime', value: '100%' },
            { label: 'Touch Latency', value: '< 50ms' },
            { label: 'Compatibility', value: 'Mobile-First' },
          ],
          situationTitle: '1. Situation & Engineering Challenge',
          situation:
            'Merchants in coastal regions frequently suffer from power and internet outages. Conventional cloud-only POS systems lock up completely during checkout.',
          taskTitle: '2. Architectural Task',
          task:
            'Design a Local-First POS architecture where on-device storage is the primary source of truth, delivering instantaneous <50ms UI response on 360x800px mobile screens with seamless background syncing.',
          actionsTitle: '3. Technical Decisions & Key Actions',
          action: [
            'Primary on-device persistence in IndexedDB/SQLite with optimistic UI updates (<50ms).',
            'Mobile-First layout specifically calibrated for 360x800px touchscreens with zero layout shifts.',
            'Immutable event-sourcing log for background sync with deterministic conflict resolution.',
            'Lightweight PWA packaging with Service Workers for native mobile execution.',
          ],
          resultsTitle: '4. Quantitative Results & Impact',
          result: [
            '100% operational continuity during connectivity failures.',
            'Instant, reliable user experience on accessible mobile hardware.',
            'Deployed under the Solarpunk philosophy of resilient, local-first community tech.',
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
            title: 'Local-First & Asynchronous Replication Flow',
            steps: [
              {
                step: '1. Touch Action (<50ms)',
                detail: 'Transaction recorded immediately to local IndexedDB with optimistic UI feedback.',
              },
              {
                step: '2. Immutable Event Log',
                detail: 'Appends transaction event with timestamp and checksum.',
              },
              {
                step: '3. Background Sync Worker',
                detail: 'Service Worker detects connectivity and pushes event batches to the cloud.',
              },
              {
                step: '4. Cloud Reconciliation',
                detail: 'Server verifies consolidated state and acks sync completion.',
              },
            ],
          },
        },
      ],
    },
    techMatrix: {
      badge: 'TECH STACK & COMPETENCIES',
      title: 'Engineering Matrix',
      subtitle:
        'Production-verified technologies for distributed data scaling, Offline-First ERPs, mobile IoT hardware, and AI automation.',
      categories: [
        {
          category: 'Big Data, Lakehouse & Relational Core',
          badge: 'Data Core',
          description:
            'Designing high-throughput distributed pipelines, RLS-secured transactional models, and deterministic data synchronization.',
          technologies: [
            { name: 'Apache Spark & Iceberg', level: 'Expert' },
            { name: 'Advanced SQL & PostgreSQL', level: 'Expert' },
            { name: 'Supabase (RLS & Realtime)', level: 'Expert' },
            { name: 'dbt (data build tool)', level: 'Advanced' },
            { name: 'Apache Airflow', level: 'Advanced' },
            { name: 'Python ETL & Streaming XML', level: 'Expert' },
            { name: 'Data Warehousing & BigQuery', level: 'Expert' },
            { name: 'DuckDB / SQLite FTS5', level: 'Advanced' },
          ],
        },
        {
          category: 'AI-Native, Omnichannel & Automation',
          badge: 'AI & Messaging',
          description:
            'E2EE conversational gateways, NLP intent/claim microservices, multi-agent orchestration, and Context Slicing.',
          technologies: [
            { name: 'Python (FastAPI & Pydantic v2)', level: 'Expert' },
            { name: 'n8n Workflow Orchestration', level: 'Expert' },
            { name: 'WhatsApp Evolution API v2 (E2EE)', level: 'Expert' },
            { name: 'Multi-Agent & Context Slicing', level: 'Advanced' },
            { name: 'NLP Intent & Claims Engines', level: 'Advanced' },
            { name: 'LLM APIs (Gemini / OpenAI)', level: 'Advanced' },
            { name: 'RAG & Vector Embeddings', level: 'Proficient' },
          ],
        },
        {
          category: 'Fullstack, Offline-First & Mobile IoT',
          badge: 'Software Craft',
          description:
            '60 FPS (Zero-Jank) web apps, dead-zone offline synchronization, and direct browser-to-hardware integration.',
          technologies: [
            { name: 'TypeScript (Strict)', level: 'Expert' },
            { name: 'Next.js 14 & React 18', level: 'Expert' },
            { name: 'Offline-First (Dexie & Outbox)', level: 'Expert' },
            { name: 'Web Bluetooth ESC/POS Printing', level: 'Advanced' },
            { name: 'Tailwind CSS (Zero-Jank 60FPS)', level: 'Expert' },
            { name: 'Haversine GPS Guard & Leaflet', level: 'Advanced' },
            { name: 'ISO 18004 QR Reed-Solomon SVG', level: 'Advanced' },
          ],
        },
        {
          category: 'Cloud, Testing, DevOps & Security',
          badge: 'Infrastructure',
          description:
            'Cost-optimized cloud architecture, exhaustive automated test suites, OWASP security, and reproducible deployments.',
          technologies: [
            { name: 'Vitest & Pytest (329+ Tests)', level: 'Expert' },
            { name: 'Docker & Linux VPS (Hetzner)', level: 'Advanced' },
            { name: 'Vercel Edge & GitHub Actions', level: 'Advanced' },
            { name: 'Supabase CLI Dual-Env FinOps', level: 'Advanced' },
            { name: 'OWASP & Signal E2EE Routing', level: 'Advanced' },
            { name: 'Git Workflow & Monorepos', level: 'Expert' },
          ],
        },
      ],
    },
    experience: {
      badge: 'CAREER & TRACK RECORD',
      title: 'Professional Experience',
      subtitle:
        'Proven technical impact leading production software architectures, massive data engineering, and intelligent automation.',
      rolesTitle: 'Engineering Roles & Technical Leadership',
      educationTitle: 'Education & Specialization',
      keyAchievements: 'Key Responsibilities & Achievements:',
      atsTitle: 'ATS-Optimized Profile',
      atsDescription:
        'Curriculum updated with quantifiable STAR achievements across AndeaField Suite, Despegar.com, and TecnoAncon.',
      requestCv: 'Download Updated PDF Resume →',
      jobs: [
        {
          company: 'AndeaField (AFCORP)',
          role: 'Lead Software & Operations Systems Engineer (Fullstack & Data Architect)',
          location: 'Lima, Peru (Hybrid / Field & Office)',
          period: '2026 — Present',
          type: 'Full-time / Lead Architect',
          description:
            'End-to-end technical leadership architecting, developing, and shipping AndeaField Suite (v1.3.1), a unified ERP platform powering wholesale logistics, territorial activation, warehouse production, billing, and omnichannel customer operations.',
          highlights: [
            'Architected a Modular Monolith (Next.js 14, strict TypeScript, Supabase RLS) integrating 7 operational modules serving 196 active B2B merchants and 2,431 geotagged prospects across 48 zones in East Lima.',
            'Engineered an Offline-First sync engine with Dexie.js (IndexedDB), Outbox Pattern, and LWW conflict resolution, achieving 0% transaction loss in cellular dead zones and < 16ms touch INP latency (60 FPS).',
            'Built a dual-transport 80mm ESC/POS mobile thermal printing service via Web Bluetooth API and Android Intent RawBT, plus a zero-dependency pure SVG QR generator (ISO 18004 Reed-Solomon GF(256)).',
            'Developed an Omnichannel WhatsApp Gateway (Evolution API v2 + Python FastAPI Bot Worker on Hetzner VPS) solving Signal E2EE @lid privacy routing, automated NLP shrinkage claims, and a Realtime WebSockets Live Inbox.',
            'Implemented an anti-fraud Haversine GPS Guard (200m threshold), a greedy subscription stock-guarantee allocator, and an automated suite of 329 unit/integration tests (309 Vitest + 20 Pytest).',
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
          location: 'Ancón, Lima, Peru',
          period: '2025 — Present',
          type: 'Leadership / Founder',
          description:
            'Software factory and technology initiative creating scalable, resilient software solutions driven by Solarpunk principles (Local-First, Mobile-First, and AI-Native architectures).',
          highlights: [
            'Architected tecnoancon-lake (Knowledge Graph with SQLite FTS5 and L0-L3 Context Slicing protocol), cutting LLM token consumption by 60% and eliminating cold starts across AI agents.',
            'Built POSito, an offline-first point-of-sale and inventory system optimized for 360x800px touchscreens with < 50ms latency.',
            'Designed multi-agent automation engines with n8n, Python FastAPI, strict TypeScript, and OWASP preventative security audits.',
          ],
          skills: [
            'TypeScript',
            'React',
            'Python',
            'n8n',
            'SQLite FTS5',
            'PostgreSQL',
            'GCP',
            'Tailwind CSS',
            'Docker',
          ],
        },
        {
          company: 'Despegar.com',
          role: 'Data Engineer / Data Pipeline Specialist',
          location: 'Buenos Aires, Argentina (On-site)',
          period: '2020 — 2025',
          type: 'Full-time',
          description:
            'Part of the data engineering team responsible for developing, maintaining, and optimizing massive batch pipelines in Apache Spark, supporting Data Warehouses and corporate data marts for the leading Latin American travel platform.',
          highlights: [
            'Active contributor in developing and optimizing distributed Spark pipelines (salt-key and custom repartitioning), improving compute execution times by 30%.',
            'Supported migration to transactional Lakehouse table architectures using Apache Iceberg for reliable ACID compliance, Time-Travel, and auditing.',
            'Maintained and modeled analytical Data Marts orchestrated with Apache Airflow and dbt with 99.8% SLA availability.',
            'Implemented automated data quality checks (Data Quality Gates), integration tests, and continuous pipeline health monitoring.',
          ],
          skills: [
            'Apache Spark',
            'Apache Iceberg',
            'Python',
            'SQL',
            'dbt',
            'Airflow',
            'Hadoop',
            'Docker',
            'Git',
          ],
        },
      ],
      education: [
        {
          institution: 'Universidad Tecnológica Nacional (UTN)',
          title: 'University Degree in Computer Programming',
          period: '2018 — 2020',
          description:
            'Higher formal university education in software engineering, data structures, algorithms, relational databases, and systems architecture.',
        },
        {
          institution: 'IT University at Despegar',
          title: 'Java Developer & Big Data Specialist',
          period: '2019 — 2020',
          description:
            'Intensive corporate training program in enterprise Java, distributed data frameworks, and agile development methodologies.',
        },
        {
          institution: 'Codo a Codo Program',
          title: 'Object-Oriented Programming & Backend',
          period: '2018 — 2019',
          description:
            'Software engineering foundations, OOP design patterns, algorithmic logic, and clean code practices.',
        },
        {
          institution: 'Continuous Learning & Specialization',
          title: 'Modern Data Stack, Offline-First & AI Systems',
          period: '2021 — Present',
          description:
            'Specialization in Apache Spark tuning, Apache Iceberg internals, Offline-First architectures (IndexedDB/Outbox), messaging cryptography, and multi-agent AI orchestration.',
        },
      ],
    },
    openSource: {
      badge: 'PROOF OF CODE & REPOSITORIES',
      title: 'Open Source & Projects',
      subtitle:
        'Production systems and engineering tools built with modular architecture, strict typing, and automated test suites.',
      exploreAll: 'Explore all repositories at github.com/Thonii →',
      repos: [
        {
          name: 'andeafield-suite',
          repoUrl: 'https://github.com/Thonii/AFActivacion',
          liveUrl: 'https://andeafield-sjl.vercel.app',
          description:
            'Unified Offline-First Agro-Logistics ERP: Haversine GPS Delivery, Territorial Activation (48 zones), 80mm Web Bluetooth ESC/POS Printing, Reed-Solomon QR Portal, and FastAPI WhatsApp Gateway.',
          tags: ['Next.js 14', 'TypeScript', 'Supabase RLS', 'Dexie Offline', 'FastAPI', 'ESC/POS'],
          language: 'TypeScript',
          features: ['329 Tests (Vitest/Pytest)', 'Web Bluetooth 80mm', 'WhatsApp Signal E2EE'],
        },
        {
          name: 'tecnoancon-lake',
          repoUrl: 'https://github.com/Thonii/sysmap-app',
          description:
            'Living Knowledge Graph powered by SQLite FTS5 and L0-L3 Context Slicing protocol to harvest architectures, ADRs, and feed AI agents with zero cold starts.',
          tags: ['Knowledge Graph', 'SQLite FTS5', 'Context Slicing', 'TypeScript', 'Python'],
          language: 'TypeScript',
          features: ['60% Token Savings', 'AST Repomap <100ms', 'Multi-Repo Harvester'],
        },
        {
          name: 'nexo-legal & n8n-portf',
          repoUrl: 'https://github.com/Thonii/nexo-legal',
          description:
            'LegalTech platform for intelligent contract analysis paired with automated n8n workflows for client onboarding, signing, and multi-channel provisioning.',
          tags: ['LegalTech', 'Python', 'n8n', 'AI Analysis', 'Automation'],
          language: 'Python',
          features: ['Clause extraction', 'n8n provisioning', 'OWASP security'],
        },
        {
          name: 'Thonii.github.io',
          repoUrl: 'https://github.com/Thonii/Thonii.github.io',
          liveUrl: 'https://thonii.github.io',
          description:
            'Source code of this engineering portfolio. Built with React 18, Vite, strict TypeScript, a native Spring Physics SVG Morphing engine, and GitHub Actions CI/CD.',
          tags: ['Portfolio', 'React 18', 'TypeScript', 'SVG Morphing', 'Solarpunk'],
          language: 'TypeScript',
          features: ['Automatic i18n (ES/EN)', 'Spring Physics SVG', 'Mobile-First 360x800px'],
        },
      ],
    },
    contact: {
      badge: 'START A TECHNICAL CONVERSATION',
      title: 'Let’s Discuss Systems, Data, or Architecture',
      subtitle:
        'Open to opportunities as a Data Engineer, Senior Fullstack / Software Engineer, or Solutions Architect at high-growth tech companies and global scale.',
      emailLabel: 'Professional Email',
      linkedinLabel: 'Professional Network',
      locationLabel: 'Location & Mode',
      locationValue: 'Lima, Peru (GMT-5 / Global Remote & Hybrid)',
      whatsappLabel: 'Direct WhatsApp',
      sendEmailButton: 'Send Direct Email',
      copiedToast: 'Email copied to clipboard!',
    },
    footer: {
      roleDescription: 'Software, Data & AI Systems Engineering',
      solarpunkText:
        'Solarpunk Ethos: Scalable, resilient technology built in harmony with communities.',
      hostedText: 'Hosted on GitHub Pages',
    },
  },
};
