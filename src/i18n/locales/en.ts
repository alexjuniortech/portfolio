type DeepMutable<T> = { -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K] };
type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T;

const enConst = {
  nav: {
    home: "Home",
    talk: "Let's talk",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    leadership: "Leadership",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    greeting: "Hello, I'm",
    work: "View my work",
    tag: "Available for remote opportunities",
    name: "Alex Junior",
    role: "Senior Software Engineer",
    subtitle:
      "13 years building scalable software, cloud infrastructure and distributed systems.",
    contact: "Contact Me",
    resume: "Download Resume",
    scroll: "Scroll to explore",
  },
  about: {
    kicker: "About",
    title: "Engineering <hl>reliable systems</hl> and leading teams that <hl>ship</hl>.",
    p1: "I'm a Senior Software Engineer and Tech Lead with 13 years of experience designing backend systems, distributed architectures and cloud infrastructure for companies across Brazil, Spain, Argentina and fully remote teams.",
    p2: "My focus is on scalable APIs, microservices, DevOps and technical mentoring — translating complex requirements into robust, maintainable software.",
    p3: "My focus is on scalable APIs, microservices, DevOps and technical mentoring — translating complex requirements into robust, maintainable software.",
    p4: "My focus is on scalable APIs, microservices, DevOps and technical mentoring — translating complex requirements into robust, maintainable software.",
    stats: {
      years: "Years of experience",
      projects: "Projects delivered",
      lead: "Tech Lead experience",
      remote: "Remote-first",
    },
    chips: [
      "Tech Lead",
      "Backend",
      "Software Architecture",
      "Cloud",
      "DevOps",
      "Microservices",
      "APIs",
      "Distributed Systems",
      "Scalability",
      "Best Practices",
      "Mentoring",
      "Team Leadership",
    ],
  },
  skills: {
    kicker: "Skills",
    title: "A modern, opinionated stack.",
    subtitle:
      "Tools I reach for daily to build reliable backend systems and cloud platforms.",
    groups: {
      backend: "Backend",
      databases: "Databases",
      cloud: "Cloud",
      architecture: "Architecture",
      devops: "DevOps",
      observability: "Observability",
    },
  },
  experience: {
    kicker: "Experience",
    title: "A track record across product and platform teams.",
    present: "Present",
    items: [
      {
        company: "Northwind Technologies",
        role: "Tech Lead / Senior Backend Engineer",
        period: "2022 — Present",
        description: [
          "Leading a distributed team building a multi-tenant SaaS platform. Owning architecture, code reviews, mentoring and the migration from monolith to event-driven microservices.",
        ],
        stack: ["Go", "Node.js", "Kubernetes", "AWS", "Kafka", "PostgreSQL"],
      },
      {
        company: "Helios Retail",
        role: "Senior Software Engineer",
        period: "2019 — 2022",
        description: [
          "Designed high-throughput APIs for route optimization and trade marketing platforms serving thousands of field agents in LATAM.",
        ],
        stack: ["Node.js", "TypeScript", "Redis", "Docker", "GCP"],
      },
      {
        company: "Atlas Digital",
        role: "Software Engineer",
        period: "2016 — 2019",
        description: [
          "Delivered ERP modules and integrations for enterprise customers. Introduced clean architecture and CI/CD practices to the team.",
        ],
        stack: ["PHP", "Python", "MySQL", "Docker", "Nginx"],
      },
      {
        company: "First Roles",
        role: "Backend Developer",
        period: "2012 — 2016",
        description: [
          "Started my career shipping web backends, learning the fundamentals of scalable design, databases and Linux.",
        ],
        stack: ["PHP", "MySQL", "Linux"],
      },
    ],
  },
  projects: {
    viewAll: "View all projects",
    kicker: "Projects",
    title: "Selected work.",
    subtitle: "A handful of platforms I've architected and built.",
    demo: "Demo",
    code: "Code",
    items: [
      {
        name: "ERP SaaS",
        description:
          "Multi-tenant ERP with fine-grained permissions, billing and audit — built for mid-market companies.",
        stack: ["Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      },
      {
        name: "Route Optimization Platform",
        description:
          "High-throughput routing engine for logistics fleets with real-time re-planning.",
        stack: ["Go", "Redis", "GCP", "gRPC"],
      },
      {
        name: "Trade Marketing Platform",
        description:
          "Field execution platform for CPG brands — surveys, planograms and analytics.",
        stack: ["Node.js", "TypeScript", "PostgreSQL"],
      },
      {
        name: "AI Shelf Recognition",
        description:
          "Computer-vision pipeline that turns store photos into share-of-shelf metrics.",
        stack: ["Python", "AWS", "Docker"],
      },
      {
        name: "Customer Service Platform",
        description:
          "Omnichannel service desk with SLAs, routing and automations.",
        stack: ["Node.js", "PostgreSQL", "Redis"],
      },
      {
        name: "Church Management SaaS",
        description:
          "Community and donations platform used by congregations across LATAM.",
        stack: ["Node.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  leadership: {
    kicker: "Technical Leadership",
    title: "Not just shipping code — building teams that ship.",
    subtitle:
      "How I lead engineering practice day-to-day.",
    items: {
      lead: {
        title: "Technical Leadership",
        desc: "Setting technical direction and unblocking teams.",
      },
      // mentor: {
      //   title: "Mentoring",
      //   desc: "1:1s, growth plans, and pairing sessions with mid and senior engineers.",
      // },
      review: {
        title: "Code Review",
        desc: "Actionable, kind, principle-driven reviews at scale.",
      },
      arch: {
        title: "Architecture",
        desc: "System design docs, ADRs and trade-off analysis.",
      },
      // planning: {
      //   title: "Planning",
      //   desc: "Roadmaps, quarterly planning and delivery forecasting.",
      // },
      agile: {
        title: "Scrum & Kanban",
        desc: "Lightweight processes tuned to each team's reality.",
      },
      management: {
        title: "Technical Management",
        desc: "Hiring, performance, and cross-team coordination.",
      },
      standards: {
        title: "Standards & Code Review",
        desc: "Defining the bar for quality, testing and documentation.",
      },
    },
  },
  certifications: {
    kicker: "Certifications",
    title: "Continuously certifying my craft.",
    planned: "In progress",
    items: {
      aws: "AWS Solutions Architect",
      cka: "Certified Kubernetes Administrator",
      gcp: "Google Cloud Professional",
      docker: "Docker Certified Associate",
    },
  },
  stack: {
    kicker: "Favorite Stack",
    title: "Where I feel most at home.",
    subtitle: "Affinity with the tools I use every week.",
  },
  contact: {
    heading: "Let's build something solid together.",
    location: "Brazil · Remote",
    // available: "Open to Tech Lead & Senior Backend roles",
    kicker: "Contact",
    title: "Let's build something serious.",
    subtitle:
      "Open to Tech Lead and Senior Backend roles — remote, EU or LATAM friendly time zones.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sent: "Message sent — I'll get back to you shortly.",
    social: "Or reach out directly",
  },
  footer: {
    tagline: "Senior Software Engineer — remote-first.",
    quick: "Quick links",
    lang: "Language",
    social: "Social",
    rights: "All rights reserved.",
  },
} as const;

export type Translation = Widen<DeepMutable<typeof enConst>>;
export const en: Translation = enConst as unknown as Translation;
