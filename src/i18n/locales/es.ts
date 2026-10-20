import type { Translation } from "./en";

export const es: Translation = {
  nav: {
    home: "Inicio",
    talk: "Hablemos",
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    projects: "Proyectos",
    leadership: "Liderazgo",
    contact: "Contacto",
    resume: "CV",
  },
  hero: {
    greeting: "Hola, soy",
    work: "Ver mis proyectos",
    tag: "Disponible para oportunidades remotas",
    name: "Alex Junior",
    role: "Senior Software Engineer",
    subtitle:
      "13 años construyendo software escalable, infraestructura cloud y sistemas distribuidos.",
    contact: "Contáctame",
    resume: "Descargar CV",
    scroll: "Desliza para explorar",
  },
  about: {
    kicker: "Sobre mí",
    title: "Ingeniería de <hl>sistemas confiables</hl> y liderazgo de equipos que <hl>entregan</hl>.",
    p1: "Soy Senior Software Engineer y Tech Lead con 13 años de experiencia diseñando sistemas backend, arquitecturas distribuidas e infraestructura en la nube para empresas de Brasil, España, Argentina y equipos 100% remotos.",
    p2: "Mi foco está en APIs escalables, microservicios, DevOps y mentoría técnica — traduciendo requisitos complejos en software robusto y mantenible.",
    p3: "Mi experiencia se concentra en el ecosistema Node.js, Golang, PHP, Docker, Kubernetes, PostgreSQL, Redis, MongoDB y plataformas cloud, siempre con foco en construir sistemas confiables, escalables y fáciles de mantener.",
    p4: "Además del desarrollo, apoyo a los equipos de ingeniería mediante revisiones de código, definición de arquitectura, mentoría técnica y mejora continua de los procesos de desarrollo.",
    stats: {
      years: "Años de experiencia",
      projects: "Proyectos entregados",
      lead: "Experiencia como Tech Lead",
      remote: "Remote-first",
    },
    chips: [
      "Tech Lead",
      "Backend",
      "Arquitectura de Software",
      "Cloud",
      "DevOps",
      "Microservicios",
      "APIs",
      "Sistemas Distribuidos",
      "Escalabilidad",
      "Buenas Prácticas",
      "Mentoría",
      "Liderazgo de Equipos",
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Un stack moderno y con criterio.",
    subtitle:
      "Herramientas que uso a diario para construir backends confiables y plataformas en la nube.",
    groups: {
      backend: "Backend",
      databases: "Bases de datos",
      cloud: "Cloud",
      architecture: "Arquitectura",
      devops: "DevOps",
      observability: "Observabilidad",
    },
  },
  experience: {
    kicker: "Experiencia",
    title: "Trayectoria entre equipos de producto y plataforma.",
    present: "Actual",
    items: [
      {
        company: "Northwind Technologies",
        role: "Tech Lead / Senior Backend Engineer",
        period: "2022 — Actual",
        description: [
          "Liderando un equipo distribuido en una plataforma SaaS multi-tenant. Responsable de arquitectura, code reviews, mentoría y migración de monolito a microservicios event-driven.",
        ],
        stack: ["Go", "Node.js", "Kubernetes", "AWS", "Kafka", "PostgreSQL"],
      },
      {
        company: "Helios Retail",
        role: "Senior Software Engineer",
        period: "2019 — 2022",
        description: [
          "Diseñé APIs de alto rendimiento para plataformas de ruteo y trade marketing atendiendo a miles de agentes de campo en LATAM.",
        ],
        stack: ["Node.js", "TypeScript", "Redis", "Docker", "GCP"],
      },
      {
        company: "Atlas Digital",
        role: "Software Engineer",
        period: "2016 — 2019",
        description: [
          "Entregué módulos ERP e integraciones para clientes corporativos. Introduje Clean Architecture y CI/CD al equipo.",
        ],
        stack: ["PHP", "Python", "MySQL", "Docker", "Nginx"],
      },
      {
        company: "Primeros roles",
        role: "Backend Developer",
        period: "2012 — 2016",
        description: [
          "Comencé mi carrera entregando backends web y aprendiendo los fundamentos de diseño escalable, bases de datos y Linux.",
        ],
        stack: ["PHP", "MySQL", "Linux"],
      },
    ],
  },
  projects: {
    viewAll: "Ver todos los proyectos",
    kicker: "Proyectos",
    title: "Trabajos seleccionados.",
    subtitle: "Algunas plataformas que he arquitecto y construido.",
    demo: "Demo",
    code: "Código",
    items: [
      {
        name: "ERP SaaS",
        description:
          "ERP multi-tenant con permisos granulares, billing y auditoría — para empresas medianas.",
        stack: ["Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      },
      {
        name: "Plataforma de Ruteo",
        description:
          "Motor de ruteo de alto rendimiento para flotas logísticas con replanificación en tiempo real.",
        stack: ["Go", "Redis", "GCP", "gRPC"],
      },
      {
        name: "Plataforma de Trade Marketing",
        description:
          "Plataforma de ejecución en campo para marcas CPG — encuestas, planogramas y analítica.",
        stack: ["Node.js", "TypeScript", "PostgreSQL"],
      },
      {
        name: "AI Shelf Recognition",
        description:
          "Pipeline de visión por computador que convierte fotos de tienda en share-of-shelf.",
        stack: ["Python", "AWS", "Docker"],
      },
      {
        name: "Customer Service Platform",
        description:
          "Mesa de servicio omnicanal con SLAs, ruteo y automatizaciones.",
        stack: ["Node.js", "PostgreSQL", "Redis"],
      },
      {
        name: "SaaS de Gestión de Iglesias",
        description:
          "Plataforma de comunidad y donaciones usada por congregaciones en LATAM.",
        stack: ["Node.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  leadership: {
    kicker: "Liderazgo Técnico",
    title: "No solo entregar código — construir equipos que entregan.",
    subtitle: "Así lidero la práctica de ingeniería en el día a día.",
    items: {
      lead: { title: "Liderazgo Técnico", desc: "Dirección técnica y desbloqueo de equipos." },
      // mentor: { title: "Mentoría", desc: "1:1s, planes de crecimiento y sesiones de pairing." },
      review: { title: "Code Review", desc: "Reviews accionables, amables y orientados a principios." },
      arch: { title: "Arquitectura", desc: "Documentos de diseño, ADRs y análisis de trade-offs." },
      // planning: { title: "Planificación", desc: "Roadmaps, planificación trimestral y forecasting." },
      agile: { title: "Scrum & Kanban", desc: "Procesos ligeros adaptados a cada equipo." },
      management: { title: "Gestión Técnica", desc: "Contratación, performance y coordinación." },
      standards: { title: "Estándares & Code Review", desc: "Definiendo el listón de calidad, tests y documentación." },
    },
  },
  certifications: {
    kicker: "Certificaciones",
    title: "Perfeccionando el oficio continuamente.",
    planned: "En progreso",
    items: {
      aws: "AWS Solutions Architect",
      cka: "Certified Kubernetes Administrator",
      gcp: "Google Cloud Professional",
      docker: "Docker Certified Associate",
    },
  },
  stack: {
    kicker: "Stack Favorito",
    title: "Donde me siento en casa.",
    subtitle: "Afinidad con las herramientas que uso cada semana.",
  },
  contact: {
    heading: "Construyamos algo sólido juntos.",
    location: "Brasil · Remoto",
    // available: "Abierto a roles de Tech Lead y Senior Backend",
    kicker: "Contacto",
    title: "Construyamos algo serio.",
    subtitle:
      "Abierto a posiciones de Tech Lead y Senior Backend — remoto, con husos horarios de EU o LATAM.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar mensaje",
    sent: "Mensaje enviado — te responderé pronto.",
    social: "O contáctame directamente",
  },
  footer: {
    tagline: "Senior Software Engineer — remote-first.",
    quick: "Enlaces rápidos",
    lang: "Idioma",
    social: "Redes",
    rights: "Todos los derechos reservados.",
  },
};
