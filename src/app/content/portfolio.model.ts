export type Tone = 'accent' | 'red' | 'blue' | 'ink';

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  pitch: string;
  location: string;
  stackLine: string;
  languages: string;
  issue: string;
  badge: string;
  initials: string;
}

export interface Chapter {
  period: string;
  title: string;
  company?: string;
  summary: string;
  tone: Tone;
}

export interface SkillGroup {
  title: string;
  /** First item is highlighted with the accent color. */
  items: string[];
}

export interface Project {
  name: string;
  /** Text on the cover panel; `highlight` is drawn in red after `name`. */
  cover: { name: string; highlight?: string };
  title: string;
  description: string;
  stack: string[];
  status?: string;
  tone: Exclude<Tone, 'accent' | 'ink'>;
  featured?: boolean;
  links?: Link[];
}

export interface Education {
  period: string;
  title: string;
  school: string;
}

export interface Contact {
  heading: string;
  message: string;
  links: Link[];
}

export interface Portfolio {
  profile: Profile;
  experience: Chapter[];
  skills: SkillGroup[];
  education: Education[];
  certifications: string[];
  contact: Contact;
}

export type Lang = 'en' | 'pt' | 'es';

interface SectionCopy {
  kicker: string;
  title: string;
}

/** Interface copy that isn't part of the portfolio content itself. */
export interface UiStrings {
  skipLink: string;
  menu: string;
  close: string;
  navLabel: string;
  langLabel: string;
  nav: Record<'experience' | 'skills' | 'projects' | 'education' | 'contact', string>;
  sections: Record<'experience' | 'skills' | 'projects' | 'education', SectionCopy>;
  seeProjects: string;
  certifications: string;
  moreTitle: string;
  moreText: string;
  repoLink: string;
  demoLink: string;
  loadingProjects: string;
  projectsError: string;
  stackLabel: string;
  footer: string;
}

export interface SiteContent {
  /** Value for `<html lang>`. */
  htmlLang: string;
  meta: { title: string; description: string };
  ui: UiStrings;
  portfolio: Portfolio;
}
