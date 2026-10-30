import type { Translation } from "./en";

export const pt: Translation = {
  nav: {
    home: "Início",
    talk: "Vamos conversar",
    about: "Sobre",
    skills: "Skills",
    experience: "Experiência",
    projects: "Projetos",
    leadership: "Liderança",
    contact: "Contato",
    resume: "Currículo",
  },
  hero: {
    greeting: "Olá, eu sou",
    work: "Ver meus projetos",
    tag: "Disponível para oportunidades remotas",
    name: "Alex Junior",
    role: "Senior Software Engineer",
    subtitle:
      "13 anos construindo software escalável, infraestrutura em nuvem e sistemas distribuídos.",
    contact: "Fale comigo",
    resume: "Baixar Currículo",
    scroll: "Role para explorar",
  },
  about: {
    kicker: "Sobre",
    title: "Engenharia de <hl>sistemas confiáveis</hl> e liderança de times que <hl>entregam</hl>.",
    p1: "Sou engenheiro de software sênior com mais de 13 anos de experiência no desenvolvimento de soluções para ambientes corporativos, com foco em arquitetura de software, desenvolvimento backend e liderança técnica.",
    p2: "Participei da evolução de aplicações monolíticas para arquiteturas modernas e desenvolvi APIs de alta performance, microsserviços e soluções escaláveis. Atuo principalmente com Node.js, PHP, Docker, Kubernetes, PostgreSQL, Redis, MongoDB e plataformas em nuvem (AWS, GCP).",
    p3: "Apoio equipes de engenharia por meio de revisões de código, definição de arquitetura e melhoria contínua dos processos, sempre buscando sistemas confiáveis, escaláveis e de fácil manutenção.",
    p4: "Além do desenvolvimento, atuo apoiando equipes de engenharia por meio de revisões de código, definição de arquitetura, mentoria técnica e melhoria contínua dos processos de desenvolvimento.",
    stats: {
      years: "Anos de experiência",
      projects: "Projetos entregues",
      lead: "Experiência como Tech Lead",
      remote: "Remoto por natureza",
    },
    chips: [
      "Tech Lead",
      "Backend",
      "Arquitetura de Software",
      "Cloud",
      "DevOps",
      "Microsserviços",
      "APIs",
      "Sistemas Distribuídos",
      "Escalabilidade",
      "Boas Práticas",
      // "Mentoria",
      "Liderança de Equipes",
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Uma stack moderna e opinativa.",
    subtitle:
      "Ferramentas que uso diariamente para construir sistemas backend confiáveis e plataformas em cloud.",
    groups: {
      backend: "Backend",
      databases: "Bancos de dados",
      cloud: "Cloud",
      architecture: "Arquitetura",
      devops: "DevOps",
      observability: "Observabilidade",
    },
  },
  experience: {
    kicker: "Experiência",
    title: "Histórico entre times de produto e plataforma.",
    present: "Atual",
    items: [
      {
        company: "Sensetech",
        role: "Tech Lead",
        period: "03/2025 — Atual",
        description: [
          "Liderei arquitetura, desenvolvimento, cloud, infraestrutura e DevOps, participando também de decisões de produto e do relacionamento técnico com clientes e stakeholders.",
"Defini e implementei a infraestrutura e os ambientes em nuvem, além de deploys, configurações e sustentação das aplicações.",
"Participei de reuniões com clientes para apresentar soluções, levantar requisitos e transformar feedbacks em melhorias e novas funcionalidades.",
"Desenvolvi soluções principalmente com Node.js, TypeScript, NestJS, Vite.js e React Native, da arquitetura e implementação até a integração e disponibilização.",
"Plataforma de coleta e auditoria de dados em campo: aplicativo mobile com funcionamento online/offline, APIs backend e sistema web para auditoria das informações coletadas.",
"Plataforma de planejamento e otimização de rotas: processa pontos de venda, executores, restrições de atendimento, horários e disponibilidade; calcula distâncias e tempos para maximizar o número de atendimentos e reduzir deslocamentos e custos operacionais."
        ],
        stack: ["Node.js", "NestJS", "React", "React Native", "AWS", "GCP", "PostgreSQL", "Redis"],
      },
      {
        company: "Pop Trade Marketing",
        role: "Technical Lead",
        period: "03/2022 — 02/2026",
        description: [
          "Liderei tecnicamente a evolução dos sistemas e plataformas da PopTrade, conduzindo a modernização e a internalização da área de tecnologia, antes terceirizada.",
"Estruturei e liderei o time interno de desenvolvimento, responsável por contratação, capacitação, processos e boas práticas de engenharia de software.",
"Conduzi a recuperação, sustentação e evolução de sistemas legados, além do desenvolvimento de novas plataformas e projetos estratégicos.",
"Responsável pela arquitetura end-to-end (software, dados, infraestrutura e cloud), pela estratégia técnica e pela sustentabilidade dos sistemas, da definição da solução à operação.",
"Gerenciei e otimizei a infraestrutura cloud, reduzindo os custos de cloud em 20%.",
"Atuei como elo entre negócio, liderança, stakeholders e tecnologia, traduzindo necessidades estratégicas em soluções técnicas e entregas."
        ],
        stack: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "PostgreSQL", "MySQL", "MongoDb", "Redis", "Docker", "GCP", "AWS"],
      },
      {
        company: "Webfollow",
        role: "Programador Full Stack Sênior",
        period: "06/2019 — 03/2022",
        description: [
          "Desenvolvi e evoluí a Webfollow, plataforma interna usada pela agência para centralizar e gerenciar as operações de marketing digital de seus clientes.",
"Transformei regras de negócio dos especialistas de marketing, Ads e SEO em funcionalidades, modelando e desenvolvendo componentes de backend, frontend e banco de dados.",
"Desenvolvi e mantive integrações com plataformas e provedores externos de mídia e marketing (Google Ads, Google Analytics, Facebook e outros), abstraindo a complexidade das diferentes APIs para os usuários.",
"Implementei funcionalidades de gestão de campanhas, anúncios, orçamento (budget), palavras-chave e processos de SEO.",
"Evoluí a arquitetura da plataforma para incorporar novas regras de negócio e integrações."
        ],
        stack: ["PHP", "MySQL", "HTML", "CSS", "React", "React Native", "GraphQL", "NestJs"],
      },
      {
        company: "Pia Sociedade de São Paulo - (Editora PAULUS)",
        role: "Analista Programador PHP",
        period: "07/2016 — 05/2019",
        description: [
          "Desenvolvi, evoluí e mantive a intranet corporativa usada pelos departamentos para gestão de solicitações e processos, com PHP, Laravel, MySQL e Docker.",
          "Criei um sistema de gestão de chamados e workflows para registrar solicitações, acompanhar progresso, validar entregas e pedir ajustes, com mais organização e rastreabilidade.",
          "Desenvolvi hotsites para eventos, com páginas de divulgação, formulários de inscrição e gerenciamento dos participantes, e automatizei a geração de certificados de participação em PDF a partir dos dados das inscrições.",
          "Participei do desenvolvimento da Bíblia Online, aplicativo mobile em React Native.",
          "Atuei em diversos projetos digitais, da análise de necessidades e definição da solução ao desenvolvimento, manutenção e evolução."
        ],
        stack: ["HTML", "CSS", "PHP", "Laravel", "React", "React Native", "MySQL"],
      },
      {
        company: "Cobway",
        role: "Programador PHP",
        period: "04/2014 — 07/2016",
        description: [
            "Transformei requisitos do backoffice em soluções técnicas para uma plataforma de seguros.",
            "Desenvolvi, evoluí e mantive um framework interno que sustentava os processos de negócio da empresa.",
            "Desenvolvi uma plataforma de cotação e gestão de seguros automotivos, da coleta dos dados do cliente à cotação, emissão e gestão da apólice.",
            "Desenvolvi e mantive integrações com seguradoras (incluindo Porto Seguro, Tokio Marine e Azul) via Web Services SOAP/XML, adaptando o sistema aos formatos e regras de cada uma.",
            "Implementei o envio dos dados dos clientes a múltiplas seguradoras e o processamento das respostas, exibindo diferentes cotações em uma única plataforma.",
            "Realizei manutenção corretiva e evolutiva do framework e das aplicações."
        ],
        stack: ["HTML", "CSS", "PHP", "Silex", "MySQL", "SQL Server", "Jquery"],
      },
      {
        company: "Agência Engenho de Imagens",
        role: "Desenvolvedor PHP",
        period: "12/2013 — 04/2014",
        description: [
          "Desenvolvi websites, landing pages e aplicações web dinâmicas a partir de layouts em PSD, com PHP, HTML, CSS e JavaScript, com alta fidelidade ao design.",
          "Desenvolvi e personalizei sites em WordPress, incluindo funcionalidades e áreas administrativas sob medida.",
          "Apliquei boas práticas de SEO técnico para melhorar indexação e desempenho nos buscadores.",
          "Criei interfaces responsivas e compatíveis com diferentes navegadores, corrigi bugs e entreguei melhorias contínuas, colaborando com designers para cumprir os prazos."
        ],
        stack: ["HTML", "CSS", "Jquery", "PHP", "Wordpress", "MySQL"],
      },
      {
        company: "Elemento 9",
        role: "Programador JavaScript",
        period: "11/2012 — 10/2013",
        description: [
          "Desenvolvi e mantive recursos educacionais interativos para livros digitais, transformando arquivos SVG em animações e jogos com JavaScript para Matemática, Física e Ciências.",
          "Os conteúdos eram acessados por links e QR Codes integrados aos materiais didáticos.",
          "Corrigi falhas em aplicações existentes para garantir estabilidade e boa experiência de uso."
        ],
        stack: ["HTML", "CSS", "Jquery", "PHP", "Wordpress", "MySQL"],
      },
    ],
  },
  projects: {
    viewAll: "Ver todos os projetos",
    kicker: "Projetos",
    title: "Trabalhos selecionados.",
    subtitle: "Algumas das plataformas que arquitetei e construí.",
    demo: "Demo",
    code: "Código",
    items: [
      {
        name: "ERP SaaS",
        description:
          "ERP multi-tenant com permissões granulares, billing e auditoria — feito para médias empresas.",
        stack: ["Node.js", "PostgreSQL", "Kubernetes", "AWS"],
      },
      {
        name: "Plataforma de Roteirização",
        description:
          "Motor de roteirização de alta vazão para frotas logísticas com replanejamento em tempo real.",
        stack: ["Go", "Redis", "GCP", "gRPC"],
      },
      {
        name: "Plataforma de Trade Marketing",
        description:
          "Plataforma de execução em campo para marcas de CPG — pesquisas, planogramas e analytics.",
        stack: ["Node.js", "TypeScript", "PostgreSQL"],
      },
      {
        name: "AI Shelf Recognition",
        description:
          "Pipeline de visão computacional que transforma fotos de lojas em share-of-shelf.",
        stack: ["Python", "AWS", "Docker"],
      },
      {
        name: "Customer Service Platform",
        description:
          "Central de atendimento omnichannel com SLAs, roteamento e automações.",
        stack: ["Node.js", "PostgreSQL", "Redis"],
      },
      {
        name: "SaaS de Gestão de Igrejas",
        description:
          "Plataforma de comunidade e doações usada por congregações na América Latina.",
        stack: ["Node.js", "PostgreSQL", "AWS"],
      },
    ],
  },
  leadership: {
    kicker: "Liderança Técnica",
    title: "Além de entregar código — construir times que entregam.",
    subtitle: "Como eu conduzo a prática de engenharia no dia a dia.",
    items: {
      lead: {
        title: "Liderança Técnica",
        desc: "Direção técnica e remoção de bloqueios do time.",
      },
      // mentor: {
      //   title: "Mentoria",
      //   desc: "1:1s, planos de crescimento e sessões de pairing.",
      // },
      review: {
        title: "Code Review",
        desc: "Reviews acionáveis, respeitosos e orientados a princípios.",
      },
      arch: {
        title: "Arquitetura",
        desc: "Documentos de design, ADRs e análise de trade-offs.",
      },
      // planning: {
      //   title: "Planejamento",
      //   desc: "Roadmaps, planejamento trimestral e previsão de entregas.",
      // },
      agile: {
        title: "Scrum & Kanban",
        desc: "Processos leves adaptados à realidade de cada time.",
      },
      management: {
        title: "Gestão Técnica",
        desc: "Contratação, performance e coordenação entre times.",
      },
      standards: {
        title: "Padrões & Code Review",
        desc: "Definindo o padrão de qualidade, testes e documentação.",
      },
    },
  },
  certifications: {
    kicker: "Certificações",
    title: "Aprimorando o ofício continuamente.",
    planned: "Em andamento",
    items: {
      aws: "AWS Solutions Architect",
      cka: "Certified Kubernetes Administrator",
      gcp: "Google Cloud Professional",
      docker: "Docker Certified Associate",
    },
  },
  stack: {
    kicker: "Stack Favorita",
    title: "Onde me sinto em casa.",
    subtitle: "Afinidade com as ferramentas que uso toda semana.",
  },
  contact: {
    heading: "Vamos construir algo sólido juntos.",
    location: "Brasil · São Paulo",
    // available: "Aberto a posições de Tech Lead e Senior Backend",
    kicker: "Contato",
    title: "Vamos construir algo sério.",
    subtitle:
      "Aberto a posições de Tech Lead e Senior Backend — remoto, com fusos amigáveis para EU ou LATAM.",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    send: "Enviar mensagem",
    sent: "Mensagem enviada — retorno em breve.",
    social: "Ou fale diretamente",
  },
  footer: {
    tagline: "Senior Software Engineer",
    quick: "Links rápidos",
    lang: "Idioma",
    social: "Redes",
    rights: "Todos os direitos reservados.",
  },
};
