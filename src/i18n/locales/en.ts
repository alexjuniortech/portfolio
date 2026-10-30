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
    p1: "I'm a Senior Software Engineer with over 13 years of experience building solutions for enterprise environments, focused on software architecture, backend development and technical leadership.",
    p2: "I took part in the evolution of monolithic applications into modern architectures and built high-performance APIs, microservices and scalable solutions. I work mainly with Node.js, PHP, Docker, Kubernetes, PostgreSQL, Redis, MongoDB and cloud platforms (AWS, GCP).",
    p3: "I support engineering teams through code reviews, architecture definition and continuous process improvement, always aiming for reliable, scalable and maintainable systems.",
    p4: "Beyond development, I support engineering teams through code reviews, architecture definition, technical mentoring and continuous improvement of development processes.",
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
      // "Mentoring",
      "Team Leadership",
    ],
  },
  skills: {
    kicker: "Skills",
    title: "A modern, opinionated stack.",
    subtitle:
      "Tools I use daily to build reliable backend systems and cloud platforms.",
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
        company: "Sensetech",
        role: "Tech Lead",
        period: "03/2025 — Present",
        description: [
          "Led architecture, development, cloud, infrastructure and DevOps, also taking part in product decisions and in the technical relationship with clients and stakeholders.",
          "Defined and implemented the cloud infrastructure and environments, as well as deployments, configuration and ongoing support of the applications.",
          "Joined client meetings to present solutions, gather requirements and turn feedback into improvements and new features.",
          "Built solutions mainly with Node.js, TypeScript, NestJS, Vite.js and React Native, from architecture and implementation through integration and release.",
          "Field data collection and auditing platform: mobile app with online/offline support, backend APIs and a web system for auditing the collected data.",
          "Route planning and optimization platform: processes points of sale, field agents, service constraints, schedules and availability; calculates distances and travel times to maximize the number of visits and reduce travel and operating costs.",
        ],
        stack: ["Node.js", "NestJS", "React", "React Native", "AWS", "GCP", "PostgreSQL", "Redis"],
      },
      {
        company: "Pop Trade Marketing",
        role: "Technical Lead",
        period: "03/2022 — 02/2026",
        description: [
          "Provided technical leadership for the evolution of PopTrade's systems and platforms, driving the modernization and insourcing of the previously outsourced technology area.",
          "Built and led the in-house development team, responsible for hiring, training, processes and software engineering best practices.",
          "Led the recovery, support and evolution of legacy systems, as well as the development of new platforms and strategic projects.",
          "Owned end-to-end architecture (software, data, infrastructure and cloud), technical strategy and system sustainability, from solution design to operations.",
          "Managed and optimized the cloud infrastructure, reducing cloud costs by 20%.",
          "Acted as the bridge between business, leadership, stakeholders and technology, translating strategic needs into technical solutions and deliveries.",
        ],
        stack: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "PostgreSQL", "MySQL", "MongoDb", "Redis", "Docker", "GCP", "AWS"],
      },
      {
        company: "Webfollow",
        role: "Senior Full Stack Developer",
        period: "06/2019 — 03/2022",
        description: [
          "Built and evolved Webfollow, the internal platform the agency used to centralize and manage its clients' digital marketing operations.",
          "Turned business rules from marketing, Ads and SEO specialists into features, modeling and building backend, frontend and database components.",
          "Built and maintained integrations with external media and marketing platforms and providers (Google Ads, Google Analytics, Facebook and others), abstracting the complexity of the different APIs away from users.",
          "Implemented features for managing campaigns, ads, budgets, keywords and SEO processes.",
          "Evolved the platform architecture to incorporate new business rules and integrations.",
        ],
        stack: ["PHP", "MySQL", "HTML", "CSS", "React", "React Native", "GraphQL", "NestJs"],
      },
      {
        company: "Pia Sociedade de São Paulo - (Editora PAULUS)",
        role: "PHP Programmer Analyst",
        period: "07/2016 — 05/2019",
        description: [
          "Built, evolved and maintained the corporate intranet used by departments to manage requests and processes, with PHP, Laravel, MySQL and Docker.",
          "Created a ticketing and workflow management system to log requests, track progress, validate deliveries and request changes, with better organization and traceability.",
          "Built event microsites with promotional pages, registration forms and attendee management, and automated the generation of PDF attendance certificates from registration data.",
          "Took part in the development of Bíblia Online, a React Native mobile app.",
          "Worked on several digital projects, from needs analysis and solution design to development, maintenance and evolution.",
        ],
        stack: ["HTML", "CSS", "PHP", "Laravel", "React", "React Native", "MySQL"],
      },
      {
        company: "Cobway",
        role: "PHP Developer",
        period: "04/2014 — 07/2016",
        description: [
          "Turned back-office requirements into technical solutions for an insurance platform.",
          "Built, evolved and maintained an in-house framework that supported the company's business processes.",
          "Built an auto insurance quoting and management platform, from collecting customer data to quoting, policy issuance and management.",
          "Built and maintained integrations with insurers (including Porto Seguro, Tokio Marine and Azul) via SOAP/XML Web Services, adapting the system to each one's formats and rules.",
          "Implemented sending customer data to multiple insurers and processing their responses, displaying different quotes on a single platform.",
          "Performed corrective and evolutionary maintenance on the framework and applications.",
        ],
        stack: ["HTML", "CSS", "PHP", "Silex", "MySQL", "SQL Server", "Jquery"],
      },
      {
        company: "Agência Engenho de Imagens",
        role: "PHP Developer",
        period: "12/2013 — 04/2014",
        description: [
          "Built websites, landing pages and dynamic web applications from PSD layouts with PHP, HTML, CSS and JavaScript, with high fidelity to the design.",
          "Built and customized WordPress sites, including tailor-made features and admin areas.",
          "Applied technical SEO best practices to improve indexing and search engine performance.",
          "Created responsive, cross-browser interfaces, fixed bugs and delivered continuous improvements, working with designers to meet deadlines.",
        ],
        stack: ["HTML", "CSS", "Jquery", "PHP", "Wordpress", "MySQL"],
      },
      {
        company: "Elemento 9",
        role: "JavaScript Developer",
        period: "11/2012 — 10/2013",
        description: [
          "Built and maintained interactive educational resources for digital textbooks, turning SVG files into JavaScript animations and games for Math, Physics and Science.",
          "The content was accessed through links and QR Codes embedded in the teaching materials.",
          "Fixed issues in existing applications to ensure stability and a good user experience.",
        ],
        stack: ["HTML", "CSS", "Jquery", "PHP", "Wordpress", "MySQL"],
      },
    ],
  },
  projects: {
    viewAll: "View all projects",
    kicker: "Projects",
    title: "Selected work.",
    subtitle: "Some of the platforms I've architected and built.",
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
          "Community and donations platform used by congregations across Latin America.",
        stack: ["Node.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  leadership: {
    kicker: "Technical Leadership",
    title: "Beyond shipping code — building teams that ship.",
    subtitle:
      "How I lead engineering practice day-to-day.",
    items: {
      lead: {
        title: "Technical Leadership",
        desc: "Setting technical direction and unblocking the team.",
      },
      // mentor: {
      //   title: "Mentoring",
      //   desc: "1:1s, growth plans and pairing sessions.",
      // },
      review: {
        title: "Code Review",
        desc: "Actionable, respectful, principle-driven reviews.",
      },
      arch: {
        title: "Architecture",
        desc: "Design docs, ADRs and trade-off analysis.",
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
        desc: "Hiring, performance and cross-team coordination.",
      },
      standards: {
        title: "Standards & Code Review",
        desc: "Setting the bar for quality, testing and documentation.",
      },
    },
  },
  certifications: {
    kicker: "Certifications",
    title: "Continuously sharpening the craft.",
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
    title: "Where I feel at home.",
    subtitle: "Affinity with the tools I use every week.",
  },
  contact: {
    heading: "Let's build something solid together.",
    location: "Brazil · São Paulo",
    // available: "Open to Tech Lead & Senior Backend roles",
    kicker: "Contact",
    title: "Let's build something serious.",
    subtitle:
      "Open to Tech Lead and Senior Backend roles — remote, with EU or LATAM friendly time zones.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sent: "Message sent — I'll get back to you shortly.",
    social: "Or reach out directly",
  },
  footer: {
    tagline: "Senior Software Engineer",
    quick: "Quick links",
    lang: "Language",
    social: "Social",
    rights: "All rights reserved.",
  },
} as const;

export type Translation = Widen<DeepMutable<typeof enConst>>;
export const en: Translation = enConst as unknown as Translation;
