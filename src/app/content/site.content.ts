import { Source } from './localized';
import { SiteContent } from './portfolio.model';

/**
 * All site copy lives here, in every language at once.
 *
 * A text is either a plain string (same in every language: names, links,
 * tech names) or `{ en, pt, es }`. Leaving a language out of an object is a
 * compile error, so a new item can't ship half-translated.
 *
 * Optional fields (contact links) are simply hidden when left out.
 * Projects are not listed here: they come from GitHub (see github-projects.ts).
 */
export const SITE: Source<SiteContent> = {
  htmlLang: { en: 'en', pt: 'pt-BR', es: 'es' },
  meta: {
    title: {
      en: 'Matheus Luchiari — Software Engineer',
      pt: 'Matheus Luchiari — Engenheiro de Software',
      es: 'Matheus Luchiari — Ingeniero de Software',
    },
    description: {
      en: 'Matheus Luchiari — Software Engineer with 6+ years building ERP and web systems. Fullstack (TypeScript, Angular, C#/.NET), software architecture and applied AI.',
      pt: 'Matheus Luchiari — Engenheiro de Software com mais de 6 anos construindo sistemas ERP e web. Fullstack (TypeScript, Angular, C#/.NET), arquitetura de software e IA aplicada.',
      es: 'Matheus Luchiari — Ingeniero de Software con más de 6 años construyendo sistemas ERP y web. Fullstack (TypeScript, Angular, C#/.NET), arquitectura de software e IA aplicada.',
    },
  },

  ui: {
    skipLink: { en: 'Skip to content', pt: 'Pular para o conteúdo', es: 'Saltar al contenido' },
    menu: { en: 'Menu', pt: 'Menu', es: 'Menú' },
    close: { en: 'Close', pt: 'Fechar', es: 'Cerrar' },
    navLabel: { en: 'Sections', pt: 'Seções', es: 'Secciones' },
    langLabel: { en: 'Language', pt: 'Idioma', es: 'Idioma' },
    nav: {
      experience: { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
      skills: { en: 'Skills', pt: 'Habilidades', es: 'Habilidades' },
      projects: { en: 'Projects', pt: 'Projetos', es: 'Proyectos' },
      education: { en: 'Education', pt: 'Formação', es: 'Formación' },
      contact: { en: 'Contact', pt: 'Contato', es: 'Contacto' },
    },
    sections: {
      experience: {
        kicker: { en: 'the origin story', pt: 'a história de origem', es: 'la historia de origen' },
        title: { en: 'Experience', pt: 'Experiência', es: 'Experiencia' },
      },
      skills: {
        kicker: { en: 'superpowers', pt: 'superpoderes', es: 'superpoderes' },
        title: { en: 'Skills', pt: 'Habilidades', es: 'Habilidades' },
      },
      projects: {
        kicker: { en: 'mission files', pt: 'arquivos de missão', es: 'expedientes de misión' },
        title: { en: 'Projects', pt: 'Projetos', es: 'Proyectos' },
      },
      education: {
        kicker: { en: 'training arc', pt: 'arco de treinamento', es: 'arco de entrenamiento' },
        title: {
          en: 'Education & Certifications',
          pt: 'Formação e Certificações',
          es: 'Formación y Certificaciones',
        },
      },
    },
    seeProjects: { en: 'See projects →', pt: 'Ver projetos →', es: 'Ver proyectos →' },
    certifications: { en: 'Certifications', pt: 'Certificações', es: 'Certificaciones' },
    moreTitle: { en: 'More on GitHub', pt: 'Mais no GitHub', es: 'Más en GitHub' },
    moreText: {
      en: 'Courses, experiments and team projects from the FIAP Software Architecture postgrad.',
      pt: 'Cursos, experimentos e projetos em equipe da pós em Arquitetura de Software da FIAP.',
      es: 'Cursos, experimentos y proyectos en equipo del posgrado en Arquitectura de Software de FIAP.',
    },
    repoLink: { en: 'Repository', pt: 'Repositório', es: 'Repositorio' },
    demoLink: { en: 'Live demo', pt: 'Ver demo', es: 'Ver demo' },
    loadingProjects: {
      en: 'Loading mission files from GitHub…',
      pt: 'Carregando arquivos de missão do GitHub…',
      es: 'Cargando expedientes de misión desde GitHub…',
    },
    projectsError: {
      en: "Couldn't reach GitHub right now — the projects are one click away on my profile.",
      pt: 'Não foi possível acessar o GitHub agora — os projetos estão a um clique no meu perfil.',
      es: 'No fue posible acceder a GitHub ahora — los proyectos están a un clic en mi perfil.',
    },
    stackLabel: 'stack',
    footer: { en: 'Built with Angular', pt: 'Feito com Angular', es: 'Hecho con Angular' },
  },

  portfolio: {
    profile: {
      name: 'Matheus Luchiari',
      role: {
        en: 'Software Engineer at TOTVS · 6+ years',
        pt: 'Engenheiro de Software na TOTVS · 6+ anos',
        es: 'Ingeniero de Software en TOTVS · 6+ años',
      },
      tagline: {
        en: 'Fullstack (TypeScript · Angular · C#/.NET) · Software Architecture · Applied AI',
        pt: 'Fullstack (TypeScript · Angular · C#/.NET) · Arquitetura de Software · IA Aplicada',
        es: 'Fullstack (TypeScript · Angular · C#/.NET) · Arquitectura de Software · IA Aplicada',
      },
      pitch: {
        en: "I build ERP and web systems that real companies run on — and lately I'm teaching them to think with LLMs.",
        pt: 'Construo sistemas ERP e web que empresas de verdade usam no dia a dia — e, ultimamente, estou ensinando esses sistemas a pensar com LLMs.',
        es: 'Construyo sistemas ERP y web con los que operan empresas reales — y últimamente les estoy enseñando a pensar con LLMs.',
      },
      location: { en: 'Based in São Paulo, Brazil', pt: 'São Paulo, Brasil', es: 'São Paulo, Brasil' },
      stackLine: 'TypeScript · Angular · C#/.NET · LLMs',
      languages: {
        en: 'Portuguese (native) · English (C1+)',
        pt: 'Português (nativo) · Inglês (C1+)',
        es: 'Portugués (nativo) · Inglés (C1+)',
      },
      issue: { en: 'Issue #01 · 2026', pt: 'Edição #01 · 2026', es: 'Número #01 · 2026' },
      badge: { en: '6+ years experience', pt: '6+ anos de experiência', es: '6+ años de experiencia' },
      initials: 'ML',
    },

    experience: [
      {
        period: { en: 'Chapter 1 · 2020', pt: 'Capítulo 1 · 2020', es: 'Capítulo 1 · 2020' },
        title: {
          en: 'Junior Fullstack Developer',
          pt: 'Desenvolvedor Fullstack Júnior',
          es: 'Desarrollador Fullstack Junior',
        },
        company: 'TPrime Tecnologia',
        summary: {
          en: 'Started on the Goevo procurement platform while finishing a B.Sc. in Computer Science at USCS.',
          pt: 'Comecei na plataforma de compras Goevo enquanto concluía o bacharelado em Ciência da Computação na USCS.',
          es: 'Empecé en la plataforma de compras Goevo mientras terminaba la licenciatura en Ciencias de la Computación en la USCS.',
        },
        tone: 'accent',
      },
      {
        period: { en: 'Chapter 2 · 2022', pt: 'Capítulo 2 · 2022', es: 'Capítulo 2 · 2022' },
        title: { en: 'Fullstack Developer', pt: 'Desenvolvedor Fullstack', es: 'Desarrollador Fullstack' },
        company: {
          en: 'TPrime Tecnologia · until 2024',
          pt: 'TPrime Tecnologia · até 2024',
          es: 'TPrime Tecnologia · hasta 2024',
        },
        summary: {
          en: 'Helped turn Goevo from a Protheus add-on into an independent multi-ERP platform, wiring it to DataSul, Granatum and SAP Business One.',
          pt: 'Ajudei a transformar o Goevo de um add-on do Protheus em uma plataforma multi-ERP independente, integrada ao DataSul, Granatum e SAP Business One.',
          es: 'Ayudé a convertir Goevo de un complemento de Protheus en una plataforma multi-ERP independiente, integrada con DataSul, Granatum y SAP Business One.',
        },
        tone: 'red',
      },
      {
        period: { en: 'Chapter 3 · 2024', pt: 'Capítulo 3 · 2024', es: 'Capítulo 3 · 2024' },
        title: {
          en: 'Software Development Analyst II',
          pt: 'Analista de Desenvolvimento de Software II',
          es: 'Analista de Desarrollo de Software II',
        },
        company: {
          en: 'TOTVS · Framework team',
          pt: 'TOTVS · Time de Framework',
          es: 'TOTVS · Equipo de Framework',
        },
        summary: {
          en: "Works on the framework at the core of Protheus, one of Latin America's largest ERPs.",
          pt: 'Atuo no framework que está no núcleo do Protheus, um dos maiores ERPs da América Latina.',
          es: 'Trabajo en el framework que está en el núcleo de Protheus, uno de los ERPs más grandes de América Latina.',
        },
        tone: 'blue',
      },
      {
        period: { en: 'Chapter 4 · Now', pt: 'Capítulo 4 · Agora', es: 'Capítulo 4 · Ahora' },
        title: { en: 'Current focus', pt: 'Foco atual', es: 'Enfoque actual' },
        summary: {
          en: 'Software architecture and applied AI: RAG, LLMs and the systems around them.',
          pt: 'Arquitetura de software e IA aplicada: RAG, LLMs e os sistemas ao redor deles.',
          es: 'Arquitectura de software e IA aplicada: RAG, LLMs y los sistemas que los rodean.',
        },
        tone: 'ink',
      },
    ],

    skills: [
      { title: 'Frontend', items: ['Angular', 'TypeScript', 'PO-UI', 'Next.js'] },
      {
        title: { en: 'Backend & ERP', pt: 'Backend & ERP', es: 'Backend y ERP' },
        items: ['C# / .NET', 'ADVPL / TLPP', 'Node · Fastify', 'PostgreSQL'],
      },
      {
        title: { en: 'Applied AI', pt: 'IA Aplicada', es: 'IA Aplicada' },
        items: ['LLMs', 'RAG', 'pgvector', 'Chunking'],
      },
      {
        title: { en: 'Architecture', pt: 'Arquitetura', es: 'Arquitectura' },
        items: ['Clean Arch', { en: 'Integrations', pt: 'Integrações', es: 'Integraciones' }, 'AWS', 'CI/CD'],
      },
    ],

    education: [
      {
        period: { en: '2026 – 2027 · In progress', pt: '2026 – 2027 · Em andamento', es: '2026 – 2027 · En curso' },
        title: {
          en: 'Postgrad, Applied AI Engineering',
          pt: 'Pós-graduação, Engenharia de IA Aplicada',
          es: 'Posgrado, Ingeniería de IA Aplicada',
        },
        school: 'UNIPDS',
      },
      {
        period: '2025 – 2026',
        title: {
          en: 'Postgrad, Software Architecture',
          pt: 'Pós-graduação, Arquitetura de Software',
          es: 'Posgrado, Arquitectura de Software',
        },
        school: 'FIAP',
      },
      {
        period: '2020 – 2023',
        title: {
          en: 'B.Sc. Computer Science',
          pt: 'Bacharelado em Ciência da Computação',
          es: 'Licenciatura en Ciencias de la Computación',
        },
        school: 'USCS',
      },
    ],

    certifications: ['AWS Certified Cloud Practitioner', 'ITIL v3 Foundation'],

    contact: {
      heading: { en: "Let's talk", pt: 'Vamos conversar', es: 'Hablemos' },
      message: {
        en: 'Open to conversations about software architecture, applied AI and fullstack engineering, with remote and international teams.',
        pt: 'Aberto a conversas sobre arquitetura de software, IA aplicada e engenharia fullstack, com times remotos e internacionais.',
        es: 'Abierto a conversar sobre arquitectura de software, IA aplicada e ingeniería fullstack, con equipos remotos e internacionales.',
      },
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/in/matheusluchiari' },
        { label: 'GitHub', href: 'https://github.com/MathLuchiari' },
        // { label: 'Email', href: 'mailto:<you>@<domain>' },
      ],
    },
  },
};
