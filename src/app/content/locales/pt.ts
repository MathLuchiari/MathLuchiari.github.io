import { SiteContent } from '../portfolio.model';
import { EN } from './en';

const en = EN.portfolio;

/** Portuguese (Brazil) copy. Non-text values (links, tones, stack names) come from `en.ts`. */
export const PT: SiteContent = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'Matheus Luchiari — Engenheiro de Software',
    description:
      'Matheus Luchiari — Engenheiro de Software com mais de 6 anos construindo sistemas ERP e web. Fullstack (TypeScript, Angular, C#/.NET), arquitetura de software e IA aplicada.',
  },

  ui: {
    skipLink: 'Pular para o conteúdo',
    menu: 'Menu',
    close: 'Fechar',
    navLabel: 'Seções',
    langLabel: 'Idioma',
    nav: {
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
    },
    sections: {
      experience: { kicker: 'a história de origem', title: 'Experiência' },
      skills: { kicker: 'superpoderes', title: 'Habilidades' },
      projects: { kicker: 'arquivos de missão', title: 'Projetos' },
      education: { kicker: 'arco de treinamento', title: 'Formação e Certificações' },
    },
    seeProjects: 'Ver projetos →',
    certifications: 'Certificações',
    moreTitle: 'Mais no GitHub',
    moreText: 'Cursos, experimentos e projetos em equipe da pós em Arquitetura de Software da FIAP.',
    repoLink: 'Repositório',
    demoLink: 'Ver demo',
    loadingProjects: 'Carregando arquivos de missão do GitHub…',
    projectsError: 'Não foi possível acessar o GitHub agora — os projetos estão a um clique no meu perfil.',
    stackLabel: 'stack',
    footer: 'Feito com Angular',
  },

  portfolio: {
    profile: {
      ...en.profile,
      role: 'Engenheiro de Software na TOTVS · 6+ anos',
      tagline: 'Fullstack (TypeScript · Angular · C#/.NET) · Arquitetura de Software · IA Aplicada',
      pitch:
        'Construo sistemas ERP e web que empresas de verdade usam no dia a dia — e, ultimamente, estou ensinando esses sistemas a pensar com LLMs.',
      location: 'São Paulo, Brasil',
      languages: 'Português (nativo) · Inglês (C1+)',
      issue: 'Edição #01 · 2026',
      badge: '6+ anos de experiência',
    },

    experience: [
      {
        ...en.experience[0],
        period: 'Capítulo 1 · 2020',
        title: 'Desenvolvedor Fullstack Júnior',
        summary:
          'Comecei na plataforma de compras Goevo enquanto concluía o bacharelado em Ciência da Computação na USCS.',
      },
      {
        ...en.experience[1],
        period: 'Capítulo 2 · 2022',
        title: 'Desenvolvedor Fullstack',
        company: 'TPrime Tecnologia · até 2024',
        summary:
          'Ajudei a transformar o Goevo de um add-on do Protheus em uma plataforma multi-ERP independente, integrada ao DataSul, Granatum e SAP Business One.',
      },
      {
        ...en.experience[2],
        period: 'Capítulo 3 · 2024',
        title: 'Analista de Desenvolvimento de Software II',
        company: 'TOTVS · Time de Framework',
        summary: 'Atuo no framework que está no núcleo do Protheus, um dos maiores ERPs da América Latina.',
      },
      {
        ...en.experience[3],
        period: 'Capítulo 4 · Agora',
        title: 'Foco atual',
        summary: 'Arquitetura de software e IA aplicada: RAG, LLMs e os sistemas ao redor deles.',
      },
    ],

    skills: [
      { ...en.skills[0], title: 'Frontend' },
      { ...en.skills[1], title: 'Backend & ERP' },
      { ...en.skills[2], title: 'IA Aplicada' },
      { title: 'Arquitetura', items: ['Clean Arch', 'Integrações', 'AWS', 'CI/CD'] },
    ],


    education: [
      { period: '2026 – 2027 · Em andamento', title: 'Pós-graduação, Engenharia de IA Aplicada', school: 'UNIPDS' },
      { period: '2025 – 2026', title: 'Pós-graduação, Arquitetura de Software', school: 'FIAP' },
      { period: '2020 – 2023', title: 'Bacharelado em Ciência da Computação', school: 'USCS' },
    ],

    certifications: en.certifications,

    contact: {
      ...en.contact,
      heading: 'Vamos conversar',
      message:
        'Aberto a conversas sobre arquitetura de software, IA aplicada e engenharia fullstack, com times remotos e internacionais.',
    },
  },
};
