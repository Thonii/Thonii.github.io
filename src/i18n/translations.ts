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
      roleSubtitle: 'Data & Software Engineer | AI Systems Architect',
      description:
        'Especializado en pipelines de Big Data distribuidos (Spark, Iceberg), orquestación de agentes de IA y workflows (n8n, Python), y aplicaciones web modernas bajo arquitectura Local-First / Mobile-First con filosofía Solarpunk.',
      ctaCaseStudies: 'Explorar Case Studies de Arquitectura',
      ctaGithub: 'Ver Código en GitHub',
      pillars: {
        bigData: { title: 'Big Data Core', subtitle: 'Apache Spark & Iceberg' },
        ai: { title: 'AI-Native Systems', subtitle: 'Multi-Agent & n8n' },
        fullstack: { title: 'Software Craft', subtitle: 'TypeScript & Python' },
      },
    },
    metrics: {
      experience: {
        value: '5+ Años',
        label: 'Experiencia en Datos y Desarrollo de Software',
        highlight: 'Despegar.com & TecnoAncon',
      },
      spark: {
        value: '-30%',
        label: 'Optimización de Tiempos en Pipelines Spark',
        highlight: 'Procesamiento Distribuido',
      },
      sla: {
        value: '99.8%',
        label: 'Disponibilidad en Data Marts y Producción',
        highlight: 'Arquitectura Medallion',
      },
      ai: {
        value: '85%',
        label: 'Automatización de Tareas Operativas con AI',
        highlight: 'Orquestación n8n + Python',
      },
    },
    caseStudies: {
      badge: 'ARQUITECTURA & SYSTEM DESIGN',
      title: 'Case Studies de Ingeniería',
      subtitle:
        'Desglose de problemas de escala real bajo el framework STAR (Situación, Tarea, Acción, Resultados) y diseño de sistemas.',
      filterAll: 'Todos los Casos',
      filterData: 'Big Data & Lakehouse (Despegar)',
      filterAi: 'AI Multi-Agent & n8n',
      filterFullstack: 'Mobile-First & Offline POS',
      viewDeepDive: 'Ver Deep Dive',
      hideDeepDive: 'Ocultar Análisis',
      stageLabel: 'ETAPA',
      items: [
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
          title: 'Event-Driven Multi-Agent Orchestration & Workflow Engine',
          role: 'Lead AI & Systems Architect',
          company: 'TecnoAncon AI Lab',
          period: '2025 — Presente',
          summary:
            'Arquitectura de agentes autónomos y orquestación con n8n, Python y LLMs bajo un protocolo de Context Slicing para automatización de operaciones complejas con baja latencia.',
          metrics: [
            { label: 'Intervención Manual', value: '-85%' },
            { label: 'Latencia de Decisión', value: '< 800ms' },
            { label: 'Ahorro de Tokens', value: '60%' },
          ],
          situationTitle: '1. Situación & Desafío de Ingeniería',
          situation:
            'Las operaciones y flujos comerciales requerían automatización inteligente sin incurrir en costos desmedidos de tokens, latencias elevadas ni riesgos de alucinaciones en llamadas a herramientas.',
          taskTitle: '2. Tarea Arquitectónica',
          task:
            'Construir un motor de orquestación desacoplado combinando n8n, microservicios en Python y APIs de LLMs con guardrails de seguridad y control estricto de contexto.',
          actionsTitle: '3. Decisiones Técnicas & Acciones Clave',
          action: [
            'Diseño de arquitectura de Context Slicing (L0 a L3) para inyectar únicamente la información necesaria al modelo en cada turno.',
            'Aislamiento de herramientas con validación tipada estricta (Zod / Pydantic) y manejo de excepciones.',
            'Orquestación basada en eventos y webhooks en n8n con trazabilidad y colas de ejecución.',
            'Persistencia estructurada en PostgreSQL y observabilidad de ejecuciones.',
          ],
          resultsTitle: '4. Resultados Cuantitativos & Impacto',
          result: [
            'Automatización del 85% en flujos de respuesta operativa y clasificación.',
            'Reducción de hasta un 60% en consumo de tokens gracias a la inyección precisa de contexto.',
            'Ejecución estable 24/7 sin bloqueos por alucinaciones en herramientas.',
          ],
          techStack: [
            'Python',
            'TypeScript',
            'n8n Orchestration',
            'LLM APIs (OpenAI / Gemini)',
            'PostgreSQL',
            'Docker',
            'FastAPI',
          ],
          architectureFlow: {
            title: 'Flujo de Orquestación Multi-Agente Asíncrono',
            steps: [
              {
                step: '1. Ingress & Validación',
                detail: 'Recepción de eventos vía webhooks en n8n con sanitización de payloads y control de acceso.',
              },
              {
                step: '2. Router & Context Slicing',
                detail: 'Selección del agente especialista e inyección quirúrgica de contexto y schemas requeridos.',
              },
              {
                step: '3. Ejecución Aislada',
                detail: 'Llamadas a funciones seguras (APIs, BD, storage) con validación estricta de salida.',
              },
              {
                step: '4. Respuesta & Trazabilidad',
                detail: 'Despacho del resultado y almacenamiento de métricas de observabilidad.',
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
        'Tecnologías dominadas en producción para escala de datos, orquestación de IA y aplicaciones web robustas.',
      categories: [
        {
          category: 'Big Data & Lakehouse Engineering',
          badge: 'Data Core',
          description:
            'Diseño y optimización de pipelines de datos masivos, procesamiento distribuido y modelado analítico.',
          technologies: [
            { name: 'Apache Spark', level: 'Experto' },
            { name: 'Apache Iceberg', level: 'Experto' },
            { name: 'SQL Avanzado', level: 'Experto' },
            { name: 'dbt (data build tool)', level: 'Avanzado' },
            { name: 'Apache Airflow', level: 'Avanzado' },
            { name: 'Hadoop / HDFS', level: 'Dominio Sólido' },
            { name: 'Data Warehousing', level: 'Experto' },
            { name: 'PostgreSQL / BigQuery', level: 'Avanzado' },
          ],
        },
        {
          category: 'AI-Native & Autonomous Systems',
          badge: 'AI & Automation',
          description:
            'Orquestación de flujos de trabajo inteligentes, agentes autónomos y arquitecturas de contexto controlado.',
          technologies: [
            { name: 'n8n Automation', level: 'Experto' },
            { name: 'Python (Data/AI/APIs)', level: 'Experto' },
            { name: 'Multi-Agent Architectures', level: 'Avanzado' },
            { name: 'Context Slicing Protocols', level: 'Avanzado' },
            { name: 'FastAPI & Pydantic', level: 'Avanzado' },
            { name: 'LLM APIs & Prompt Ops', level: 'Avanzado' },
            { name: 'pgvector / Embeddings', level: 'Dominio Sólido' },
          ],
        },
        {
          category: 'Fullstack & Systems Architecture',
          badge: 'Software Craft',
          description:
            'Construcción de aplicaciones web de alta velocidad, tipado estricto y filosofía Mobile-First / Local-First.',
          technologies: [
            { name: 'TypeScript (Estricto)', level: 'Experto' },
            { name: 'React & React Hooks', level: 'Experto' },
            { name: 'Tailwind CSS', level: 'Experto' },
            { name: 'Local-First / IndexedDB', level: 'Avanzado' },
            { name: 'Node.js & REST APIs', level: 'Avanzado' },
            { name: 'PWA / Service Workers', level: 'Avanzado' },
            { name: 'Patrones SOLID & Clean Arch', level: 'Avanzado' },
          ],
        },
        {
          category: 'Cloud, DevOps & Security',
          badge: 'Infrastructure',
          description:
            'Despliegue automatizado, seguridad preventiva (OWASP) e infraestructura reproducible.',
          technologies: [
            { name: 'Docker & Docker Compose', level: 'Avanzado' },
            { name: 'GitHub Actions (CI/CD)', level: 'Avanzado' },
            { name: 'Linux / Ubuntu Server', level: 'Avanzado' },
            { name: 'GCP (Google Cloud)', level: 'Dominio Sólido' },
            { name: 'OWASP Security Guidelines', level: 'Avanzado' },
            { name: 'Git Workflow & Rebase', level: 'Experto' },
          ],
        },
      ],
    },
    experience: {
      badge: 'TRAYECTORIA & HISTORIAL',
      title: 'Experiencia Profesional',
      subtitle:
        'Historial comprobado en empresas líderes de tecnología y dirección de proyectos de software.',
      rolesTitle: 'Roles de Ingeniería & Dirección Técnica',
      educationTitle: 'Formación & Especialización',
      keyAchievements: 'Logros & Responsabilidades Clave:',
      atsTitle: 'Perfil Optimizado para ATS',
      atsDescription:
        'Estructura curricular con métricas cuantificables STAR, experiencia en plataformas de alta demanda y disponibilidad para roles de impacto.',
      requestCv: 'Solicitar CV en PDF formateado →',
      jobs: [
        {
          company: 'Despegar.com',
          role: 'Data Engineer / Data Pipeline Specialist',
          location: 'Buenos Aires (Presencial)',
          period: '2020 — 2025',
          type: 'Full-time',
          description:
            'Formé parte del equipo de ingeniería de datos responsable del desarrollo, mantenimiento y optimización de pipelines de datos masivos en Apache Spark, soporte a Data Warehouses y flujos batch para la plataforma de viajes.',
          highlights: [
            'Participación activa en el desarrollo y optimización de pipelines de datos distribuidos con Apache Spark, mejorando tiempos de cómputo en un 30%.',
            'Soporte en la implementación de arquitecturas transaccionales con Apache Iceberg para garantizar consistencia y auditoría de datos.',
            'Construcción y modelado de Data Marts analíticos orquestados con Apache Airflow y dbt con 99.8% de disponibilidad.',
            'Ejecución de validaciones de calidad de datos, pruebas de integración y mantenimiento continuo de flujos corporativos.',
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
        {
          company: 'TecnoAncon',
          role: 'Founder & Lead Systems Architect',
          location: 'Ancón, Lima, Perú',
          period: '2025 — Presente',
          type: 'Leadership / Founder',
          description:
            'Fábrica de software e iniciativa tecnológica enfocada en construir soluciones escalables, seguras y resilientes bajo la filosofía Solarpunk (arquitectura Local-First, Mobile-First y AI-Native).',
          highlights: [
            'Arquitectura e implementación de POSito, sistema de punto de venta offline-first con soporte táctil 360x800px para comercios.',
            'Diseño de motores de orquestación de agentes de IA con n8n y Python con protocolo de Context Slicing.',
            'Desarrollo de portales web y plataformas de software con TypeScript estricto, Tailwind CSS y buenas prácticas OWASP.',
          ],
          skills: [
            'TypeScript',
            'React',
            'Python',
            'n8n',
            'Node.js',
            'PostgreSQL',
            'GCP',
            'Tailwind CSS',
            'Docker',
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
          title: 'Modern Data Stack & AI Engineering',
          period: '2021 — Presente',
          description:
            'Especialización en optimización de Apache Spark, arquitectura interna de Apache Iceberg, ingeniería analítica con dbt y orquestación de agentes de IA.',
        },
      ],
    },
    openSource: {
      badge: 'PROOF OF CODE & REPOSITORIOS',
      title: 'Proyectos & Open Source',
      subtitle:
        'Código limpio, modular, fuertemente tipado y versionado públicamente en GitHub.',
      exploreAll: 'Explorar todos los repositorios en github.com/Thonii →',
      repos: [
        {
          name: 'sysmap-app',
          repoUrl: 'https://github.com/Thonii/sysmap-app',
          description:
            'Herramienta en Python para mapeo visual, diagnóstico y auditoría estructural de componentes y dependencias del sistema.',
          tags: ['Python', 'System Mapping', 'CLI', 'Tooling'],
          language: 'Python',
          features: ['Diagnóstico de dependencias', 'Exportación visual', 'Modular'],
        },
        {
          name: 'nexo-legal',
          repoUrl: 'https://github.com/Thonii/nexo-legal',
          description:
            'Plataforma LegalTech para gestión inteligente de contratos, análisis de documentos legales y automatización de procesos jurídicos.',
          tags: ['LegalTech', 'Python', 'AI Analysis', 'Contracts'],
          language: 'Python',
          features: ['Extracción de cláusulas', 'Seguridad de datos', 'Validación'],
        },
        {
          name: 'n8n-portf (Client Onboarding Workflow)',
          repoUrl: 'https://github.com/Thonii/n8n-portf',
          description:
            'Workflow automatizado en n8n para el ciclo de onboarding de clientes: firma de contrato, aprovisionamiento de recursos y notificaciones multicanal.',
          tags: ['n8n', 'Automation', 'JavaScript', 'Google Drive API', 'Discord'],
          language: 'JavaScript',
          features: ['Aprovisionamiento automático', 'Integración Drive/Trello', 'Alertas Discord'],
        },
        {
          name: 'Thonii.github.io',
          repoUrl: 'https://github.com/Thonii/Thonii.github.io',
          liveUrl: 'https://thonii.github.io',
          description:
            'Código fuente de este portafolio de ingeniería. Construido con React 18, Vite, TypeScript estricto, Tailwind CSS y GitHub Actions.',
          tags: ['Portfolio', 'React', 'TypeScript', 'Vite', 'Solarpunk'],
          language: 'TypeScript',
          features: ['i18n Automático', 'Lighthouse 100/100', 'Mobile-First 360x800px'],
        },
      ],
    },
    contact: {
      badge: 'INICIA UNA CONVERSACIÓN TÉCNICA',
      title: '¿Hablamos de Sistemas, Datos o Arquitectura?',
      subtitle:
        'Abierto a oportunidades como Data Engineer, Software Engineer o Solutions Architect en empresas de tecnología y escala global.',
      emailLabel: 'Email Profesional',
      linkedinLabel: 'Red Profesional',
      locationLabel: 'Ubicación & Modalidad',
      locationValue: 'Ancón, Lima, Perú (GMT-5 / Remoto Global)',
      whatsappLabel: 'WhatsApp Directo',
      sendEmailButton: 'Enviar Correo Directo',
      copiedToast: '¡Email copiado al portapapeles!',
    },
    footer: {
      roleDescription: 'Software & Data Engineering',
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
      roleSubtitle: 'Data & Software Engineer | AI Systems Architect',
      description:
        'Specialized in distributed Big Data pipelines (Spark, Iceberg), AI agent & workflow orchestration (n8n, Python), and modern web applications built on Local-First / Mobile-First architecture with Solarpunk principles.',
      ctaCaseStudies: 'Explore Architecture Case Studies',
      ctaGithub: 'View Code on GitHub',
      pillars: {
        bigData: { title: 'Big Data Core', subtitle: 'Apache Spark & Iceberg' },
        ai: { title: 'AI-Native Systems', subtitle: 'Multi-Agent & n8n' },
        fullstack: { title: 'Software Craft', subtitle: 'TypeScript & Python' },
      },
    },
    metrics: {
      experience: {
        value: '5+ Years',
        label: 'Experience in Data & Software Engineering',
        highlight: 'Despegar.com & TecnoAncon',
      },
      spark: {
        value: '-30%',
        label: 'Compute Time Optimization in Spark Pipelines',
        highlight: 'Distributed Processing',
      },
      sla: {
        value: '99.8%',
        label: 'Availability on Critical Data Marts & Production',
        highlight: 'Medallion Architecture',
      },
      ai: {
        value: '85%',
        label: 'Operational Workflow Automation with AI',
        highlight: 'n8n + Python Orchestration',
      },
    },
    caseStudies: {
      badge: 'ARCHITECTURE & SYSTEM DESIGN',
      title: 'Engineering Case Studies',
      subtitle:
        'Deep dives into production scale challenges using the STAR framework (Situation, Task, Action, Result) and system design diagrams.',
      filterAll: 'All Cases',
      filterData: 'Big Data & Lakehouse (Despegar)',
      filterAi: 'AI Multi-Agent & n8n',
      filterFullstack: 'Mobile-First & Offline POS',
      viewDeepDive: 'View Deep Dive',
      hideDeepDive: 'Hide Analysis',
      stageLabel: 'STAGE',
      items: [
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
          title: 'Event-Driven Multi-Agent Orchestration & Workflow Engine',
          role: 'Lead AI & Systems Architect',
          company: 'TecnoAncon AI Lab',
          period: '2025 — Present',
          summary:
            'Autonomous agent architecture and orchestration with n8n, Python, and LLMs utilizing a Context Slicing protocol for low-latency operational automations.',
          metrics: [
            { label: 'Manual Work', value: '-85%' },
            { label: 'Decision Latency', value: '< 800ms' },
            { label: 'Token Efficiency', value: '60%' },
          ],
          situationTitle: '1. Situation & Engineering Challenge',
          situation:
            'Business operations required intelligent decision automation without excessive token costs, high inference latencies, or risk of hallucination during tool execution.',
          taskTitle: '2. Architectural Task',
          task:
            'Build a decoupled orchestration engine combining n8n event-driven workflows, Python microservices, and structured LLM APIs with robust security guardrails and context control.',
          actionsTitle: '3. Technical Decisions & Key Actions',
          action: [
            'Designed a 4-layer Context Slicing protocol (L0 to L3) to inject only necessary AST and domain tokens per agent turn.',
            'Implemented tool sandboxing with strict type validation (Zod / Pydantic) and graceful error-handling loops.',
            'Structured asynchronous event webhooks in n8n with execution queues and retries.',
            'Maintained PostgreSQL state persistence and full observability over prompt/response lifecycle.',
          ],
          resultsTitle: '4. Quantitative Results & Impact',
          result: [
            '85% automation of operational responses and lead qualification pipelines.',
            '60% reduction in token consumption via surgical context injection.',
            'Reliable 24/7 execution with zero tool-hallucination crashes.',
          ],
          techStack: [
            'Python',
            'TypeScript',
            'n8n Orchestration',
            'LLM APIs (OpenAI / Gemini)',
            'PostgreSQL',
            'Docker',
            'FastAPI',
          ],
          architectureFlow: {
            title: 'Asynchronous Multi-Agent Orchestration Flow',
            steps: [
              {
                step: '1. Ingress & Validation',
                detail: 'Receiving webhook events in n8n with payload sanitization and access controls.',
              },
              {
                step: '2. Router & Context Slicing',
                detail: 'Routing to specialized subagent and injecting surgical schema and prompt slice.',
              },
              {
                step: '3. Sandboxed Tool Execution',
                detail: 'Executing sandboxed API and database functions with output schema validation.',
              },
              {
                step: '4. Output & Observability',
                detail: 'Dispatching final payload to consumers and storing telemetry metrics.',
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
        'Production-tested technologies for distributed data scaling, AI workflow orchestration, and resilient web apps.',
      categories: [
        {
          category: 'Big Data & Lakehouse Engineering',
          badge: 'Data Core',
          description:
            'Designing and maintaining high-throughput pipelines, distributed processing, and analytical modeling.',
          technologies: [
            { name: 'Apache Spark', level: 'Expert' },
            { name: 'Apache Iceberg', level: 'Expert' },
            { name: 'Advanced SQL', level: 'Expert' },
            { name: 'dbt (data build tool)', level: 'Advanced' },
            { name: 'Apache Airflow', level: 'Advanced' },
            { name: 'Hadoop / HDFS', level: 'Proficient' },
            { name: 'Data Warehousing', level: 'Expert' },
            { name: 'PostgreSQL / BigQuery', level: 'Advanced' },
          ],
        },
        {
          category: 'AI-Native & Autonomous Systems',
          badge: 'AI & Automation',
          description:
            'Intelligent workflow orchestration, autonomous multi-agent systems, and context-managed architectures.',
          technologies: [
            { name: 'n8n Automation', level: 'Expert' },
            { name: 'Python (Data/AI/APIs)', level: 'Expert' },
            { name: 'Multi-Agent Architectures', level: 'Advanced' },
            { name: 'Context Slicing Protocols', level: 'Advanced' },
            { name: 'FastAPI & Pydantic', level: 'Advanced' },
            { name: 'LLM APIs & Prompt Ops', level: 'Advanced' },
            { name: 'pgvector / Embeddings', level: 'Proficient' },
          ],
        },
        {
          category: 'Fullstack & Systems Architecture',
          badge: 'Software Craft',
          description:
            'Building high-performance web applications, strict typing, and Mobile-First / Local-First architecture.',
          technologies: [
            { name: 'TypeScript (Strict)', level: 'Expert' },
            { name: 'React & React Hooks', level: 'Expert' },
            { name: 'Tailwind CSS', level: 'Expert' },
            { name: 'Local-First / IndexedDB', level: 'Advanced' },
            { name: 'Node.js & REST APIs', level: 'Advanced' },
            { name: 'PWA / Service Workers', level: 'Advanced' },
            { name: 'SOLID & Clean Arch', level: 'Advanced' },
          ],
        },
        {
          category: 'Cloud, DevOps & Security',
          badge: 'Infrastructure',
          description:
            'Automated CI/CD pipelines, OWASP-compliant preventative security, and reproducible environments.',
          technologies: [
            { name: 'Docker & Docker Compose', level: 'Advanced' },
            { name: 'GitHub Actions (CI/CD)', level: 'Advanced' },
            { name: 'Linux / Ubuntu Server', level: 'Advanced' },
            { name: 'GCP (Google Cloud)', level: 'Proficient' },
            { name: 'OWASP Security Guidelines', level: 'Advanced' },
            { name: 'Git Workflow & Rebase', level: 'Expert' },
          ],
        },
      ],
    },
    experience: {
      badge: 'CAREER & TRACK RECORD',
      title: 'Professional Experience',
      subtitle:
        'Demonstrated track record at high-traffic tech platforms and technical software leadership.',
      rolesTitle: 'Engineering Roles & Technical Leadership',
      educationTitle: 'Education & Specialization',
      keyAchievements: 'Key Responsibilities & Achievements:',
      atsTitle: 'ATS-Optimized Profile',
      atsDescription:
        'Clear curriculum structure with STAR metrics, verified enterprise data platform experience, and immediate remote/hybrid availability.',
      requestCv: 'Request ATS-formatted PDF Resume →',
      jobs: [
        {
          company: 'Despegar.com',
          role: 'Data Engineer / Data Pipeline Specialist',
          location: 'Buenos Aires (On-site)',
          period: '2020 — 2025',
          type: 'Full-time',
          description:
            'Part of the data engineering team responsible for developing, maintaining, and optimizing massive batch pipelines in Apache Spark, supporting Data Warehouses and corporate data marts for the travel platform.',
          highlights: [
            'Active contributor in developing and optimizing distributed Spark pipelines, improving compute execution times by 30%.',
            'Supported migration to transactional table architectures using Apache Iceberg for reliable ACID compliance and auditing.',
            'Maintained and modeled analytical Data Marts orchestrated with Apache Airflow and dbt with 99.8% availability.',
            'Implemented automated data quality checks, integration tests, and routine pipeline health maintenance.',
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
        {
          company: 'TecnoAncon',
          role: 'Founder & Lead Systems Architect',
          location: 'Ancón, Lima, Peru',
          period: '2025 — Present',
          type: 'Leadership / Founder',
          description:
            'Software factory and technology initiative creating scalable, resilient software solutions driven by Solarpunk principles (Local-First, Mobile-First, and AI-Native architectures).',
          highlights: [
            'Architected and implemented POSito, an offline-first point-of-sale system optimized for 360x800px touchscreens.',
            'Designed multi-agent AI orchestration engines with n8n and Python under the Context Slicing protocol.',
            'Developed modern web portals with strict TypeScript, Tailwind CSS, and OWASP security standards.',
          ],
          skills: [
            'TypeScript',
            'React',
            'Python',
            'n8n',
            'Node.js',
            'PostgreSQL',
            'GCP',
            'Tailwind CSS',
            'Docker',
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
          title: 'Modern Data Stack & AI Engineering',
          period: '2021 — Present',
          description:
            'Specialization in Apache Spark tuning, Apache Iceberg internals, analytics engineering with dbt, and multi-agent AI orchestration.',
        },
      ],
    },
    openSource: {
      badge: 'PROOF OF CODE & REPOSITORIES',
      title: 'Open Source & Projects',
      subtitle:
        'Clean, modular, strictly typed code versioned publicly on GitHub.',
      exploreAll: 'Explore all repositories at github.com/Thonii →',
      repos: [
        {
          name: 'sysmap-app',
          repoUrl: 'https://github.com/Thonii/sysmap-app',
          description:
            'Python-based utility for visual mapping, diagnostics, and structural auditing of system components and dependencies.',
          tags: ['Python', 'System Mapping', 'CLI', 'Tooling'],
          language: 'Python',
          features: ['Dependency diagnostics', 'Visual exports', 'Modular'],
        },
        {
          name: 'nexo-legal',
          repoUrl: 'https://github.com/Thonii/nexo-legal',
          description:
            'LegalTech platform for intelligent contract management, legal document analysis, and automated legal operations.',
          tags: ['LegalTech', 'Python', 'AI Analysis', 'Contracts'],
          language: 'Python',
          features: ['Clause extraction', 'Data security', 'Validation'],
        },
        {
          name: 'n8n-portf (Client Onboarding Workflow)',
          repoUrl: 'https://github.com/Thonii/n8n-portf',
          description:
            'Automated n8n workflow orchestrating the client onboarding lifecycle: contract signing, resource provisioning, and multi-channel notifications.',
          tags: ['n8n', 'Automation', 'JavaScript', 'Google Drive API', 'Discord'],
          language: 'JavaScript',
          features: ['Automated provisioning', 'Drive/Trello integration', 'Discord alerts'],
        },
        {
          name: 'Thonii.github.io',
          repoUrl: 'https://github.com/Thonii/Thonii.github.io',
          liveUrl: 'https://thonii.github.io',
          description:
            'Source code of this engineering portfolio. Built with React 18, Vite, strict TypeScript, Tailwind CSS, and GitHub Actions CI/CD.',
          tags: ['Portfolio', 'React', 'TypeScript', 'Vite', 'Solarpunk'],
          language: 'TypeScript',
          features: ['Automatic i18n', 'Lighthouse 100/100', 'Mobile-First 360x800px'],
        },
      ],
    },
    contact: {
      badge: 'START A TECHNICAL CONVERSATION',
      title: 'Let’s Discuss Systems, Data, or Architecture',
      subtitle:
        'Open to opportunities as a Data Engineer, Software Engineer, or Solutions Architect at high-growth tech companies and global scale.',
      emailLabel: 'Professional Email',
      linkedinLabel: 'Professional Network',
      locationLabel: 'Location & Mode',
      locationValue: 'Ancón, Lima, Peru (GMT-5 / Global Remote)',
      whatsappLabel: 'Direct WhatsApp',
      sendEmailButton: 'Send Direct Email',
      copiedToast: 'Email copied to clipboard!',
    },
    footer: {
      roleDescription: 'Software & Data Engineering',
      solarpunkText:
        'Solarpunk Ethos: Scalable, resilient technology built in harmony with communities.',
      hostedText: 'Hosted on GitHub Pages',
    },
  },
};
