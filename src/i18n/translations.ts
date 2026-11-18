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
      repoUrl?: string;
      liveUrl?: string;
      links?: { label: string; url: string }[];
      isPrivate?: boolean;
      privateLabel?: string;
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
      caseStudies: 'Casos de Éxito',
      techMatrix: 'Tecnologías & Habilidades',
      experience: 'Experiencia',
      openSource: 'Proyectos & Código',
      contact: 'Contacto',
      downloadCv: 'DESCARGAR CV',
    },
    hero: {
      availableBadge: 'Disponible para Proyectos y Roles de Ingeniería',
      locationBadge: 'Lima, Perú (GMT-5)',
      roleTitle: 'Anthony Villalobos',
      roleSubtitle: 'Ingeniero de Software y Datos | Arquitecto de Sistemas e IA',
      description:
        'Especializado en plataformas empresariales con operación sin conexión a internet (Next.js, TypeScript, PostgreSQL, impresión térmica Bluetooth), procesamiento de datos a gran escala (Apache Spark, Iceberg) y automatización omnicanal con Inteligencia Artificial y WhatsApp cifrado (Python FastAPI, n8n).',
      ctaCaseStudies: 'Explorar Casos de Éxito y Arquitectura',
      ctaGithub: 'Ver Repositorios en GitHub',
      pillars: {
        bigData: { title: 'Ingeniería de Datos', subtitle: 'Spark, Iceberg y PostgreSQL' },
        ai: { title: 'IA y Automatización', subtitle: 'FastAPI, Bots WhatsApp y n8n' },
        fullstack: { title: 'Sistemas Móviles e IoT', subtitle: 'Operación Sin Red e Impresión BT' },
      },
    },
    metrics: {
      experience: {
        value: '6+ Años',
        label: 'Experiencia en Datos, Arquitectura y Desarrollo',
        highlight: 'AndeaField, Despegar y TecnoAncon',
      },
      spark: {
        value: '329 Pruebas',
        label: 'Pruebas Automatizadas Validando Producción',
        highlight: 'AndeaField Suite v1.3.1',
      },
      sla: {
        value: '99.8%',
        label: 'Disponibilidad en Sistemas de Datos y Campo',
        highlight: 'Sincronización Sin Pérdidas',
      },
      ai: {
        value: '< 16ms',
        label: 'Respuesta Táctil Instantánea (60 FPS) en Móviles',
        highlight: 'Diseño Móvil 360x800px',
      },
    },
    caseStudies: {
      badge: 'ARQUITECTURA Y DISEÑO DE SISTEMAS',
      title: 'Casos de Éxito en Ingeniería',
      subtitle:
        'Soluciones reales en producción desglosadas por Situación, Objetivo, Decisiones Técnicas y Resultados medibles.',
      filterAll: 'Todos los Casos',
      filterData: 'Datos a Gran Escala (Despegar)',
      filterAi: 'Inteligencia Artificial y WhatsApp',
      filterFullstack: 'Sistemas sin Conexión e Impresión (AndeaField)',
      viewDeepDive: 'Ver Detalle Técnico',
      hideDeepDive: 'Ocultar Detalle',
      stageLabel: 'ETAPA',
      items: [
        {
          id: 'andeafield-suite-erp',
          badge: 'Sistema Operativo sin Conexión, Impresión Móvil y WhatsApp',
          category: 'fullstack',
          title: 'AndeaField Suite: Plataforma Integral de Logística, Impresión Térmica Móvil y Atención por WhatsApp',
          role: 'Ingeniero Principal de Software y Sistemas Operativos',
          company: 'AndeaField (AFCORP)',
          period: '2026 — Presente',
          summary:
            'Plataforma corporativa unificada (7 módulos integrados) para distribución mayorista, gestión territorial (2,431 comercios en 48 zonas de Lima), impresión de comprobantes por Bluetooth (80mm), auditoría satelital GPS y atención automatizada por WhatsApp.',
          metrics: [
            { label: 'Pruebas Automatizadas', value: '329 Aprobadas' },
            { label: 'Velocidad Táctil', value: '< 16ms (60 FPS)' },
            { label: 'Cobertura en Campo', value: '48 Zonas / 2.4k Puntos' },
          ],
          situationTitle: '1. Situación y Reto Operativo',
          situation:
            'La operación logística y comercial en Lima Este dependía de hojas de cálculo propensas a códigos duplicados, entregas en zonas sin señal celular (San Juan de Lurigancho y Huachipa), fallos de cifrado al responder mensajes de WhatsApp y lentitud en teléfonos Android de gama de entrada bajo el sol.',
          taskTitle: '2. Objetivo Arquitectónico',
          task:
            'Diseñar y poner en producción una plataforma unificada (Reparto, Oficina, Activación Comercial, Comunicaciones WhatsApp, Planta, Facturación y Directorio Ejecutivo) capaz de funcionar al 100% sin internet, imprimir tickets físicos en ruta y auditar entregas por GPS a costo cero de servidores.',
          actionsTitle: '3. Decisiones Técnicas e Implementación',
          action: [
            'Motor de operación sin internet (IndexedDB con Dexie.js) y cola de sincronización automática que guarda cada entrega en el teléfono y la sube a PostgreSQL (Supabase) apenas detecta señal, sin perder ni duplicar datos.',
            'Controlador propio de impresión térmica móvil (tickets de 80mm / 48 columnas) conectado por Web Bluetooth y Android RawBT, limpiando tildes y caracteres especiales automáticamente.',
            'Candado Satelital GPS (fórmula Haversine a 200 metros) que verifica que el camión esté frente al comercio antes de liquidar, con recalibración en puerta y registro inmutable de auditoría.',
            'Pasarela Omnicanal de WhatsApp (Evolution API v2 + microservicio Python FastAPI) que resuelve el cifrado de extremo a extremo (identificadores @lid), detecta pedidos o reclamos de merma y actualiza la bandeja de oficina en vivo.',
            'Generador matemático propio de códigos QR vectoriales (estándar ISO 18004 Reed-Solomon sin librerías externas) para que el comerciante consulte y ajuste sus entregas en 1 toque, junto a un motor de reserva garantizada de stock para suscriptores.',
          ],
          resultsTitle: '4. Resultados e Impacto en el Negocio',
          result: [
            '196 comercios activos y 2,431 puntos de venta georreferenciados operando con 0% de pérdida de información en zonas sin cobertura.',
            'Eliminación total de entregas no verificadas mediante validación GPS obligatoria y reducción del arqueo de caja diario a menos de 2 minutos.',
            '329 pruebas automatizadas (Vitest y Pytest) asegurando calidad continua y fluidez de 60 cuadros por segundo en cualquier celular.',
          ],
          techStack: [
            'Next.js 14',
            'TypeScript Estricto',
            'Supabase (PostgreSQL + RLS)',
            'Dexie.js (Base Local)',
            'Python FastAPI',
            'WhatsApp Evolution API v2',
            'Impresión Bluetooth ESC/POS',
            'Mapas Leaflet y GPS Haversine',
            'Vitest y Pytest',
          ],
          architectureFlow: {
            title: 'Flujo Operativo de AndeaField Suite (Planta ➔ Calle ➔ Oficina)',
            steps: [
              {
                step: '1. Planta y Suscripciones',
                detail: 'Pesaje de jabas con descuento automático de tara, reserva garantizada de stock para clientes suscritos y acta de conformidad en rampa.',
              },
              {
                step: '2. Ruta sin Red y GPS',
                detail: 'Verificación satelital a <=200m del local, guardado instantáneo en la memoria del móvil y sincronización en segundo plano.',
              },
              {
                step: '3. Impresión y Portal QR',
                detail: 'Emisión de comprobante físico de 80mm por Bluetooth y autogestión de pedidos del cliente escaneando su QR de mostrador.',
              },
              {
                step: '4. Bot WhatsApp y Directorio',
                detail: 'El asistente en Python clasifica pedidos y mermas por WhatsApp, reflejando costos y márgenes en vivo para la gerencia.',
              },
            ],
          },
        },
        {
          id: 'scalable-lakehouse',
          badge: 'Ingeniería de Datos y Procesamiento Distribuido',
          category: 'data',
          title: 'Plataforma de Datos de Alto Rendimiento y Tuberías Distribuidas (Lakehouse)',
          role: 'Ingeniero de Datos (Equipo Corporativo)',
          company: 'Despegar.com',
          period: '2020 — 2025',
          summary:
            'Desarrollo y optimización de flujos de datos masivos sobre Apache Spark y Apache Iceberg para procesar terabytes de transacciones y búsquedas diarias con alta disponibilidad.',
          metrics: [
            { label: 'Tiempo de Cómputo', value: '-30%' },
            { label: 'Disponibilidad (SLA)', value: '99.8%' },
            { label: 'Volumen Diario', value: 'Terabytes' },
          ],
          situationTitle: '1. Situación y Reto de Ingeniería',
          situation:
            'La plataforma de viajes líder en Latinoamérica necesitaba consolidar terabytes de búsquedas, reservas y transacciones diarias. Los procesos por lotes presentaban cuellos de botella en cruces de alto volumen y requerían modernizarse hacia tablas transaccionales.',
          taskTitle: '2. Objetivo en el Equipo',
          task:
            'Desarrollar y mantener flujos de datos estructurados en capas de calidad (Bronce, Plata y Oro) sobre Apache Spark e Iceberg, garantizando integridad transaccional, particionado eficiente y monitoreo automatizado con Airflow.',
          actionsTitle: '3. Decisiones Técnicas e Implementación',
          action: [
            'Implementación y mantenimiento de tablas Apache Iceberg para asegurar transacciones confiables (ACID) y consultas históricas (Time-Travel).',
            'Optimización de procesos en Apache Spark aplicando técnicas de distribución balanceada (salt-key y reparticionado) para evitar saturaciones de memoria.',
            'Automatización de tareas de compactación de archivos pequeños y limpieza de instantáneas para optimizar costos y velocidad de lectura.',
            'Integración de controles automáticos de calidad de datos y programación de flujos con Apache Airflow y dbt.',
          ],
          resultsTitle: '4. Resultados e Impacto Medible',
          result: [
            'Reducción de hasta un 30% en los tiempos de procesamiento diario de datos.',
            'Disponibilidad del 99.8% en los repositorios analíticos utilizados por las áreas comerciales y financieras.',
            'Trazabilidad completa y consistencia en las auditorías de datos regionales.',
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
            title: 'Flujo de Procesamiento de Datos por Capas',
            steps: [
              {
                step: '1. Captura Inicial (Bronce)',
                detail: 'Recepción de eventos transaccionales y registros del sistema en tablas Iceberg inmutables.',
              },
              {
                step: '2. Limpieza y Cruce (Plata)',
                detail: 'Procesos distribuidos en Spark que validan, eliminan duplicados y enriquecen la información.',
              },
              {
                step: '3. Modelos de Negocio (Oro)',
                detail: 'Tablas consolidadas con dbt listas para consultas rápidas en tableros de inteligencia de negocios.',
              },
              {
                step: '4. Control y Alertas (Airflow)',
                detail: 'Coordinación automática de dependencias, reintentos y alertas tempranas de calidad.',
              },
            ],
          },
        },
        {
          id: 'ai-orchestration-engine',
          badge: 'Inteligencia Artificial y Automatización de Procesos',
          category: 'ai',
          title: 'Motor de Orquestación de Agentes de IA y Memoria de Contexto',
          role: 'Arquitecto Principal de Sistemas e IA',
          company: 'TecnoAncon AI Lab',
          period: '2025 — Presente',
          summary:
            'Arquitectura de asistentes autónomos, base de conocimiento indexada (SQLite FTS5) y flujos automatizados con n8n, Python FastAPI y modelos de lenguaje con inyección precisa de contexto.',
          metrics: [
            { label: 'Carga Manual', value: '-85%' },
            { label: 'Tiempo de Respuesta', value: '< 800ms' },
            { label: 'Ahorro en Costos IA', value: '60%' },
          ],
          situationTitle: '1. Situación y Reto Operativo',
          situation:
            'Las operaciones comerciales y de soporte requerían automatizar decisiones y atención sin incurrir en altos costos de procesamiento de IA, demoras de respuesta ni errores por respuestas inventadas.',
          taskTitle: '2. Objetivo Arquitectónico',
          task:
            'Construir un sistema coordinador desacoplado que combine flujos de eventos en n8n, servicios rápidos en Python FastAPI, búsqueda documental instantánea y controles estrictos de seguridad.',
          actionsTitle: '3. Decisiones Técnicas e Implementación',
          action: [
            'Diseño de un protocolo de Contexto por Capas (L0 a L3) que entrega a la IA únicamente el fragmento exacto de información que necesita en cada consulta.',
            'Validación estricta de entradas y salidas mediante esquemas tipados (Pydantic v2 y Zod) para evitar errores de ejecución.',
            'Automatización basada en eventos y webhooks en n8n con colas de trabajo y reintentos automáticos.',
            'Centralización del conocimiento técnico en un repositorio indexado con búsqueda de texto completo en milisegundos.',
          ],
          resultsTitle: '4. Resultados e Impacto Medible',
          result: [
            'Automatización del 85% en la clasificación de consultas, atención operativa y derivación de casos.',
            'Reducción del 60% en el consumo de tokens de modelos de IA gracias a la entrega quirúrgica de contexto.',
            'Operación continua 24/7 estable y auditable.',
          ],
          techStack: [
            'Python',
            'FastAPI y Pydantic v2',
            'TypeScript',
            'Automatización n8n',
            'SQLite FTS5 / PostgreSQL',
            'APIs de IA (Gemini / OpenAI)',
            'Docker',
          ],
          architectureFlow: {
            title: 'Flujo de Automatización Inteligente por Eventos',
            steps: [
              {
                step: '1. Recepción y Filtro',
                detail: 'Ingreso de mensajes o eventos vía webhooks en n8n/FastAPI con validación de seguridad.',
              },
              {
                step: '2. Selección de Contexto',
                detail: 'El enrutador identifica la tarea e inyecta solo las reglas y datos pertinentes al asistente.',
              },
              {
                step: '3. Ejecución Controlada',
                detail: 'Consulta a bases de datos o servicios externos verificando que la respuesta cumpla el formato exigido.',
              },
              {
                step: '4. Entrega y Registro',
                detail: 'Envío de la respuesta al usuario o sistema destino guardando trazabilidad completa.',
              },
            ],
          },
        },
        {
          id: 'local-first-pos',
          badge: 'Aplicaciones Móviles y Comercio Local',
          category: 'fullstack',
          title: 'POSito: Punto de Venta e Inventario Táctil sin Dependencia de Internet',
          role: 'Arquitecto de Sistemas y Desarrollador Fullstack',
          company: 'POSito / TecnoAncon',
          period: '2025 — Presente',
          summary:
            'Sistema de punto de venta y control de stock diseñado para pantallas móviles (360x800px), capaz de operar al 100% durante caídas de internet con sincronización automática en segundo plano.',
          metrics: [
            { label: 'Operación sin Red', value: '100%' },
            { label: 'Respuesta al Toque', value: '< 50ms' },
            { label: 'Adaptabilidad', value: 'Móvil Primero' },
          ],
          situationTitle: '1. Situación y Reto Operativo',
          situation:
            'Los comercios y negocios locales sufren cortes intermitentes de señal o internet. Los sistemas tradicionales en la nube se detienen por completo durante una caída, frenando las ventas en mostrador.',
          taskTitle: '2. Objetivo Arquitectónico',
          task:
            'Construir un punto de venta donde la base de datos local del dispositivo sea la fuente principal, logrando cobros instantáneos (<50ms) en pantallas táctiles y respaldo automático en la nube.',
          actionsTitle: '3. Decisiones Técnicas e Implementación',
          action: [
            'Almacenamiento directo en el dispositivo (IndexedDB / SQLite) con respuesta visual inmediata en cada venta.',
            'Interfaz ergonómica calibrada para teléfonos de 360x800px operable cómodamente con una sola mano.',
            'Historial inmutable de transacciones que se sincroniza en lote apenas se restablece la conexión.',
            'Aplicación Web Progresiva (PWA) instalable directamente en celulares y tabletas Android sin tiendas intermedias.',
          ],
          resultsTitle: '4. Resultados e Impacto Medible',
          result: [
            '100% de continuidad de ventas y cuadre de caja exacto incluso sin conexión a internet.',
            'Velocidad de cobro instantánea en equipos móviles económicos.',
            'Tecnología accesible y resiliente aplicada al comercio real.',
          ],
          techStack: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'IndexedDB / SQLite',
            'PWA (Service Workers)',
            'Node.js',
            'Validación Zod',
          ],
          architectureFlow: {
            title: 'Flujo de Venta Local y Respaldo Automático',
            steps: [
              {
                step: '1. Cobro Instantáneo (<50ms)',
                detail: 'La venta se guarda de inmediato en la memoria del teléfono actualizando el stock al instante.',
              },
              {
                step: '2. Bitácora de Movimientos',
                detail: 'Cada operación queda sellada con hora exacta e identificador único en la cola local.',
              },
              {
                step: '3. Sincronización en Fondo',
                detail: 'Al detectar internet, el sistema envía los lotes pendientes al servidor sin interrumpir al cajero.',
              },
              {
                step: '4. Consolidación en Nube',
                detail: 'El servidor confirma el respaldo y actualiza los reportes para el dueño del negocio.',
              },
            ],
          },
        },
      ],
    },
    techMatrix: {
      badge: 'COMPETENCIAS Y HERRAMIENTAS',
      title: 'Matriz de Especialización Técnica',
      subtitle:
        'Tecnologías aplicadas en producción para sistemas empresariales, ingeniería de datos, hardware móvil y automatización.',
      categories: [
        {
          category: 'Ingeniería de Datos y Bases Relacionales',
          badge: 'Datos y Analítica',
          description:
            'Procesamiento de grandes volúmenes de información, modelado SQL seguro y sincronización de datos empresariales.',
          technologies: [
            { name: 'Apache Spark y Apache Iceberg', level: 'Experto' },
            { name: 'SQL Avanzado y PostgreSQL', level: 'Experto' },
            { name: 'Supabase (Seguridad RLS y Tiempo Real)', level: 'Experto' },
            { name: 'dbt (Modelado Analítico)', level: 'Avanzado' },
            { name: 'Apache Airflow (Orquestación)', level: 'Avanzado' },
            { name: 'Procesos ETL en Python (Excel/XML)', level: 'Experto' },
            { name: 'Data Warehousing y BigQuery', level: 'Experto' },
            { name: 'DuckDB y SQLite FTS5', level: 'Avanzado' },
          ],
        },
        {
          category: 'Inteligencia Artificial y Mensajería Omnicanal',
          badge: 'IA y Automatización',
          description:
            'Pasarelas de WhatsApp con cifrado de extremo a extremo, clasificación automática de pedidos y flujos autónomos.',
          technologies: [
            { name: 'Python (FastAPI y Pydantic v2)', level: 'Experto' },
            { name: 'Automatización con n8n', level: 'Experto' },
            { name: 'WhatsApp Evolution API v2 (Cifrado E2EE)', level: 'Experto' },
            { name: 'Sistemas Multi-Agente y Contexto', level: 'Avanzado' },
            { name: 'Detección de Pedidos y Mermas (NLP)', level: 'Avanzado' },
            { name: 'Integración de Modelos (Gemini / OpenAI)', level: 'Avanzado' },
            { name: 'Búsqueda Semántica y Vectores', level: 'Dominio Sólido' },
          ],
        },
        {
          category: 'Desarrollo Web, Sistemas sin Red e IoT Móvil',
          badge: 'Software y Campo',
          description:
            'Aplicaciones rápidas a 60 FPS en celulares, trabajo sin cobertura celular y conexión directa con impresoras y GPS.',
          technologies: [
            { name: 'TypeScript (Tipado Estricto)', level: 'Experto' },
            { name: 'Next.js 14 y React 18', level: 'Experto' },
            { name: 'Operación sin Red (Dexie IndexedDB)', level: 'Experto' },
            { name: 'Impresión Térmica Bluetooth (ESC/POS 80mm)', level: 'Avanzado' },
            { name: 'Tailwind CSS (Diseño Móvil 60 FPS)', level: 'Experto' },
            { name: 'Auditoría GPS Haversine y Mapas Leaflet', level: 'Avanzado' },
            { name: 'Generación Matemática de QR Vectorial', level: 'Avanzado' },
          ],
        },
        {
          category: 'Infraestructura, Calidad y Seguridad',
          badge: 'DevOps y Calidad',
          description:
            'Despliegues automatizados, suites de pruebas exhaustivas, optimización de costos en la nube y seguridad preventiva.',
          technologies: [
            { name: 'Pruebas con Vitest y Pytest (329+ Tests)', level: 'Experto' },
            { name: 'Docker y Servidores Linux (VPS)', level: 'Avanzado' },
            { name: 'Despliegue en Vercel y GitHub Actions', level: 'Avanzado' },
            { name: 'Gestión Dual de Base de Datos ($0 Costo)', level: 'Avanzado' },
            { name: 'Seguridad Web OWASP y Cifrado Signal', level: 'Avanzado' },
            { name: 'Control de Versiones Git y Monorepos', level: 'Experto' },
          ],
        },
      ],
    },
    experience: {
      badge: 'TRAYECTORIA PROFESIONAL',
      title: 'Experiencia Laboral',
      subtitle:
        'Resultados comprobados liderando plataformas operativas en producción, ingeniería de datos corporativa y automatización.',
      rolesTitle: 'Roles de Ingeniería y Liderazgo Técnico',
      educationTitle: 'Formación Académica y Especialización',
      keyAchievements: 'Logros y Responsabilidades Principales:',
      atsTitle: 'Currículum Ejecutivo en PDF',
      atsDescription:
        'Documento de 1 página A4 en español claro con métricas de impacto verificables en AndeaField, Despegar.com y TecnoAncon.',
      requestCv: 'Descargar CV actualizado en PDF →',
      jobs: [
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
          skills: [
            'TypeScript',
            'React',
            'Python',
            'n8n',
            'SQLite FTS5',
            'PostgreSQL',
            'Google Cloud',
            'Tailwind CSS',
            'Docker',
          ],
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
          skills: [
            'Apache Spark',
            'Apache Iceberg',
            'Python',
            'SQL',
            'dbt',
            'Apache Airflow',
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
            'Formación universitaria en ingeniería de software, estructuras de datos, algoritmos, bases de datos relacionales y arquitectura de sistemas.',
        },
        {
          institution: 'IT University at Despegar',
          title: 'Especialización en Desarrollo Java y Grandes Volúmenes de Datos',
          period: '2019 — 2020',
          description:
            'Programa intensivo corporativo en desarrollo de software empresarial, procesamiento de datos distribuidos y metodologías ágiles.',
        },
        {
          institution: 'Programa Codo a Codo',
          title: 'Programación Orientada a Objetos y Desarrollo Backend',
          period: '2018 — 2019',
          description:
            'Fundamentos de ingeniería de software, patrones de diseño, lógica algorítmica y buenas prácticas de programación.',
        },
        {
          institution: 'Formación Continua y Especialización',
          title: 'Arquitectura de Datos Moderna, Sistemas sin Conexión e IA',
          period: '2021 — Presente',
          description:
            'Especialización continua en optimización de Apache Spark, Apache Iceberg, aplicaciones con sincronización sin red (IndexedDB), mensajería cifrada y automatización con IA.',
        },
      ],
    },
    openSource: {
      badge: 'SISTEMAS Y REPOSITORIOS',
      title: 'Proyectos Destacados y Código',
      subtitle:
        'Plataformas empresariales privadas bajo acuerdos de confidencialidad y proyectos propios de código abierto en GitHub.',
      exploreAll: 'Explorar repositorios públicos en github.com/Thonii →',
      repos: [
        {
          name: 'AndeaField Suite (ERP Corporativo)',
          isPrivate: true,
          privateLabel: 'Privado · Producción',
          description:
            'Plataforma integral privada para distribución mayorista: Reparto con bloqueo GPS Haversine, Activación en 48 zonas, Impresión Bluetooth de 80mm, Portal Cliente con QR y Bot de WhatsApp en Python.',
          tags: ['Next.js 14', 'TypeScript', 'Supabase RLS', 'Operación sin Red', 'FastAPI', 'Impresión BT'],
          language: 'TypeScript',
          features: ['329 Pruebas Automatizadas', 'Impresión Térmica 80mm', 'Código Privado Protegido'],
        },
        {
          name: 'Perú Monitor (Core API & UI Mapa)',
          links: [
            { label: 'peru-monitor-core', url: 'https://github.com/Thonii/peru-monitor-core' },
            { label: 'peru-monitor-ui', url: 'https://github.com/Thonii/peru-monitor-ui' },
          ],
          description:
            'Plataforma de inteligencia situacional en tiempo real que consolida sismos (USGS/IGP), clima y conflictos sociales en el Perú. Incluye motor backend en Python FastAPI con Gemini 2.5 Flash y mapa interactivo Next.js + Leaflet.',
          tags: ['FastAPI', 'Gemini AI', 'Next.js', 'Leaflet Maps', 'Python', 'Telegram Bot'],
          language: 'Python / TypeScript',
          features: ['Análisis y Geolocalización IA', 'Alertas en Telegram', 'Mapa Móvil 360x800px'],
        },
        {
          name: 'nexo-legal & n8n-portf',
          links: [
            { label: 'nexo-legal', url: 'https://github.com/Thonii/nexo-legal' },
            { label: 'n8n-portf', url: 'https://github.com/Thonii/n8n-portf' },
          ],
          description:
            'Plataforma de tecnología legal en Python para revisión inteligente de contratos (nexo-legal) y flujos automatizados en n8n para alta de clientes, firma y aprovisionamiento multicanal (n8n-portf).',
          tags: ['LegalTech', 'Python', 'n8n', 'Análisis Documental', 'Automatización'],
          language: 'Python / JavaScript',
          features: ['Extracción de cláusulas', 'Flujos automáticos n8n', 'Seguridad de datos OWASP'],
        },
        {
          name: 'Thonii.github.io (Este Portafolio)',
          repoUrl: 'https://github.com/Thonii/Thonii.github.io',
          liveUrl: 'https://thonii.github.io',
          description:
            'Código fuente abierto de este portafolio profesional. Desarrollado con React 18, Vite, TypeScript estricto, motor propio de animación vectorial de iconos y despliegue continuo.',
          tags: ['Portafolio', 'React 18', 'TypeScript', 'Animación SVG', 'Solarpunk'],
          language: 'TypeScript',
          features: ['Bilingüe Español / Inglés', 'Físicas de Resorte SVG', 'Diseño Móvil 360x800px'],
        },
      ],
    },
    contact: {
      badge: 'CONTACTO DIRECTO',
      title: '¿Conversamos sobre Ingeniería, Datos o Sistemas?',
      subtitle:
        'Disponible para posiciones como Ingeniero de Software Senior, Ingeniero de Datos o Arquitecto de Sistemas en Lima (híbrido/presencial) y remoto global.',
      emailLabel: 'Correo Electrónico',
      linkedinLabel: 'Perfil de LinkedIn',
      locationLabel: 'Ubicación y Modalidad',
      locationValue: 'Lima, Perú (GMT-5 / Híbrido y Remoto)',
      whatsappLabel: 'WhatsApp Directo',
      sendEmailButton: 'Enviar Correo Ahora',
      copiedToast: '¡Correo copiado al portapapeles!',
    },
    footer: {
      roleDescription: 'Ingeniería de Software, Datos y Sistemas',
      solarpunkText:
        'Filosofía Solarpunk: Tecnología sólida, eficiente y pensada para las personas.',
      hostedText: 'Desplegado en GitHub Pages',
    },
  },
  en: {
    nav: {
      caseStudies: 'Case Studies',
      techMatrix: 'Stack & Skills',
      experience: 'Experience',
      openSource: 'Projects & Code',
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
      badge: 'PRODUCTION SYSTEMS & REPOSITORIES',
      title: 'Featured Projects & Open Source',
      subtitle:
        'Proprietary enterprise platforms under NDA alongside public open-source engineering tools on GitHub.',
      exploreAll: 'Explore public repositories at github.com/Thonii →',
      repos: [
        {
          name: 'AndeaField Suite (Enterprise ERP)',
          isPrivate: true,
          privateLabel: 'Private · Production',
          description:
            'Proprietary Offline-First Agro-Logistics ERP: Haversine GPS Delivery, Territorial Activation (48 zones), 80mm Web Bluetooth ESC/POS Printing, Reed-Solomon QR Portal, and FastAPI WhatsApp Gateway.',
          tags: ['Next.js 14', 'TypeScript', 'Supabase RLS', 'Dexie Offline', 'FastAPI', 'ESC/POS'],
          language: 'TypeScript',
          features: ['329 Automated Tests', 'Web Bluetooth 80mm', 'Private Corporate Repo'],
        },
        {
          name: 'Perú Monitor (Core API & Map UI)',
          links: [
            { label: 'peru-monitor-core', url: 'https://github.com/Thonii/peru-monitor-core' },
            { label: 'peru-monitor-ui', url: 'https://github.com/Thonii/peru-monitor-ui' },
          ],
          description:
            'Real-time situational intelligence platform consolidating seismic events (USGS/IGP), weather, and social conflicts in Peru. Features a Python FastAPI backend with Gemini 2.5 Flash NLP and a Next.js + Leaflet map frontend.',
          tags: ['FastAPI', 'Gemini AI', 'Next.js', 'Leaflet Maps', 'Python', 'Telegram Bot'],
          language: 'Python / TypeScript',
          features: ['AI Geolocation & NLP', 'Telegram Critical Alerts', 'Mobile-First 360x800px'],
        },
        {
          name: 'nexo-legal & n8n-portf',
          links: [
            { label: 'nexo-legal', url: 'https://github.com/Thonii/nexo-legal' },
            { label: 'n8n-portf', url: 'https://github.com/Thonii/n8n-portf' },
          ],
          description:
            'LegalTech platform in Python for intelligent contract analysis (nexo-legal) paired with automated n8n workflows for client onboarding, signing, and multi-channel provisioning (n8n-portf).',
          tags: ['LegalTech', 'Python', 'n8n', 'AI Analysis', 'Automation'],
          language: 'Python / JavaScript',
          features: ['Clause extraction', 'n8n provisioning', 'OWASP security'],
        },
        {
          name: 'Thonii.github.io (This Portfolio)',
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
