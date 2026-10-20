import { SiteContent } from '../portfolio.model';

/**
 * English copy — the reference locale. `pt.ts` and `es.ts` mirror this
 * shape (the compiler enforces it), so every edit here should be repeated there.
 *
 * Optional fields (project `links`, contact links) are simply hidden
 * when left out, so nothing half-filled ever ships.
 */
export const EN: SiteContent = {
  htmlLang: 'en',
  meta: {
    title: 'Matheus Luchiari — Software Engineer',
    description:
      'Matheus Luchiari — Software Engineer with 6+ years building ERP and web systems. Fullstack (TypeScript, Angular, C#/.NET), software architecture and applied AI.',
  },

  ui: {
    skipLink: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    navLabel: 'Sections',
    langLabel: 'Language',
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    sections: {
      experience: { kicker: 'the origin story', title: 'Experience' },
      skills: { kicker: 'superpowers', title: 'Skills' },
      projects: { kicker: 'mission files', title: 'Projects' },
      education: { kicker: 'training arc', title: 'Education & Certifications' },
    },
    seeProjects: 'See projects →',
    certifications: 'Certifications',
    moreTitle: 'More on GitHub',
    moreText: 'Courses, experiments and team projects from the FIAP Software Architecture postgrad.',
    repoLink: 'Repository',
    demoLink: 'Live demo',
    loadingProjects: 'Loading mission files from GitHub…',
    projectsError: "Couldn't reach GitHub right now — the projects are one click away on my profile.",
    stackLabel: 'stack',
    footer: 'Built with Angular',
  },

  portfolio: {
    profile: {
      name: 'Matheus Luchiari',
      role: 'Software Engineer at TOTVS · 6+ years',
      tagline: 'Fullstack (TypeScript · Angular · C#/.NET) · Software Architecture · Applied AI',
      pitch:
        "I build ERP and web systems that real companies run on — and lately I'm teaching them to think with LLMs.",
      location: 'Based in São Paulo, Brazil',
      stackLine: 'TypeScript · Angular · C#/.NET · LLMs',
      languages: 'Portuguese (native) · English (C1+)',
      issue: 'Issue #01 · 2026',
      badge: '6+ years experience',
      initials: 'ML',
    },

    experience: [
      {
        period: 'Chapter 1 · 2020',
        title: 'Junior Fullstack Developer',
        company: 'TPrime Tecnologia',
        summary:
          'Started on the Goevo procurement platform while finishing a B.Sc. in Computer Science at USCS.',
        tone: 'accent',
      },
      {
        period: 'Chapter 2 · 2022',
        title: 'Fullstack Developer',
        company: 'TPrime Tecnologia · until 2024',
        summary:
          'Helped turn Goevo from a Protheus add-on into an independent multi-ERP platform, wiring it to DataSul, Granatum and SAP Business One.',
        tone: 'red',
      },
      {
        period: 'Chapter 3 · 2024',
        title: 'Software Development Analyst II',
        company: 'TOTVS · Framework team',
        summary:
          "Works on the framework at the core of Protheus, one of Latin America's largest ERPs.",
        tone: 'blue',
      },
      {
        period: 'Chapter 4 · Now',
        title: 'Current focus',
        summary: 'Software architecture and applied AI: RAG, LLMs and the systems around them.',
        tone: 'ink',
      },
    ],

    skills: [
      { title: 'Frontend', items: ['Angular', 'TypeScript', 'PO-UI', 'Next.js'] },
      { title: 'Backend & ERP', items: ['C# / .NET', 'ADVPL / TLPP', 'Node · Fastify', 'PostgreSQL'] },
      { title: 'Applied AI', items: ['LLMs', 'RAG', 'pgvector', 'Chunking'] },
      { title: 'Architecture', items: ['Clean Arch', 'Integrations', 'AWS', 'CI/CD'] },
    ],


    education: [
      { period: '2026 – 2027 · In progress', title: 'Postgrad, Applied AI Engineering', school: 'UNIPDS' },
      { period: '2025 – 2026', title: 'Postgrad, Software Architecture', school: 'FIAP' },
      { period: '2020 – 2023', title: 'B.Sc. Computer Science', school: 'USCS' },
    ],

    certifications: ['AWS Certified Cloud Practitioner', 'ITIL v3 Foundation'],

    contact: {
      heading: "Let's talk",
      message:
        'Open to conversations about software architecture, applied AI and fullstack engineering, with remote and international teams.',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/in/matheusluchiari' },
        { label: 'GitHub', href: 'https://github.com/MathLuchiari' },
        // { label: 'Email', href: 'mailto:<you>@<domain>' },
      ],
    },
  },
};
