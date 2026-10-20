import { SiteContent } from '../portfolio.model';
import { EN } from './en';

const en = EN.portfolio;

/** Spanish copy. Non-text values (links, tones, stack names) come from `en.ts`. */
export const ES: SiteContent = {
  htmlLang: 'es',
  meta: {
    title: 'Matheus Luchiari — Ingeniero de Software',
    description:
      'Matheus Luchiari — Ingeniero de Software con más de 6 años construyendo sistemas ERP y web. Fullstack (TypeScript, Angular, C#/.NET), arquitectura de software e IA aplicada.',
  },

  ui: {
    skipLink: 'Saltar al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    navLabel: 'Secciones',
    langLabel: 'Idioma',
    nav: {
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
    },
    sections: {
      experience: { kicker: 'la historia de origen', title: 'Experiencia' },
      skills: { kicker: 'superpoderes', title: 'Habilidades' },
      projects: { kicker: 'expedientes de misión', title: 'Proyectos' },
      education: { kicker: 'arco de entrenamiento', title: 'Formación y Certificaciones' },
    },
    seeProjects: 'Ver proyectos →',
    certifications: 'Certificaciones',
    moreTitle: 'Más en GitHub',
    moreText: 'Cursos, experimentos y proyectos en equipo del posgrado en Arquitectura de Software de FIAP.',
    repoLink: 'Repositorio',
    demoLink: 'Ver demo',
    loadingProjects: 'Cargando expedientes de misión desde GitHub…',
    projectsError: 'No fue posible acceder a GitHub ahora — los proyectos están a un clic en mi perfil.',
    stackLabel: 'stack',
    footer: 'Hecho con Angular',
  },

  portfolio: {
    profile: {
      ...en.profile,
      role: 'Ingeniero de Software en TOTVS · 6+ años',
      tagline: 'Fullstack (TypeScript · Angular · C#/.NET) · Arquitectura de Software · IA Aplicada',
      pitch:
        'Construyo sistemas ERP y web con los que operan empresas reales — y últimamente les estoy enseñando a pensar con LLMs.',
      location: 'São Paulo, Brasil',
      languages: 'Portugués (nativo) · Inglés (C1+)',
      issue: 'Número #01 · 2026',
      badge: '6+ años de experiencia',
    },

    experience: [
      {
        ...en.experience[0],
        period: 'Capítulo 1 · 2020',
        title: 'Desarrollador Fullstack Junior',
        summary:
          'Empecé en la plataforma de compras Goevo mientras terminaba la licenciatura en Ciencias de la Computación en la USCS.',
      },
      {
        ...en.experience[1],
        period: 'Capítulo 2 · 2022',
        title: 'Desarrollador Fullstack',
        company: 'TPrime Tecnologia · hasta 2024',
        summary:
          'Ayudé a convertir Goevo de un complemento de Protheus en una plataforma multi-ERP independiente, integrada con DataSul, Granatum y SAP Business One.',
      },
      {
        ...en.experience[2],
        period: 'Capítulo 3 · 2024',
        title: 'Analista de Desarrollo de Software II',
        company: 'TOTVS · Equipo de Framework',
        summary:
          'Trabajo en el framework que está en el núcleo de Protheus, uno de los ERPs más grandes de América Latina.',
      },
      {
        ...en.experience[3],
        period: 'Capítulo 4 · Ahora',
        title: 'Enfoque actual',
        summary: 'Arquitectura de software e IA aplicada: RAG, LLMs y los sistemas que los rodean.',
      },
    ],

    skills: [
      { ...en.skills[0], title: 'Frontend' },
      { ...en.skills[1], title: 'Backend y ERP' },
      { ...en.skills[2], title: 'IA Aplicada' },
      { title: 'Arquitectura', items: ['Clean Arch', 'Integraciones', 'AWS', 'CI/CD'] },
    ],


    education: [
      { period: '2026 – 2027 · En curso', title: 'Posgrado, Ingeniería de IA Aplicada', school: 'UNIPDS' },
      { period: '2025 – 2026', title: 'Posgrado, Arquitectura de Software', school: 'FIAP' },
      { period: '2020 – 2023', title: 'Licenciatura en Ciencias de la Computación', school: 'USCS' },
    ],

    certifications: en.certifications,

    contact: {
      ...en.contact,
      heading: 'Hablemos',
      message:
        'Abierto a conversar sobre arquitectura de software, IA aplicada e ingeniería fullstack, con equipos remotos e internacionales.',
    },
  },
};
