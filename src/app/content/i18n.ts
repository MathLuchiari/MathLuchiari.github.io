import { Injectable, computed, effect, signal } from '@angular/core';
import { localize } from './localized';
import { Lang, SiteContent } from './portfolio.model';
import { SITE } from './site.content';

export const LANGS: readonly { code: Lang; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'pt', short: 'PT', name: 'Português' },
  { code: 'es', short: 'ES', name: 'Español' },
];

const STORAGE_KEY = 'lang';

const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && LANGS.some((l) => l.code === value);

/** Saved choice first, then the browser's preferred languages, then English. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage blocked (private mode, cookies disabled): fall through.
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.slice(0, 2).toLowerCase();
    if (isLang(base)) return base;
  }
  return 'en';
}

/** Runtime language switch: every component reads its copy from `content()`. */
@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>(initialLang());
  readonly content = computed(() => localize<SiteContent>(SITE, this.lang()));
  readonly ui = computed(() => this.content().ui);

  constructor() {
    effect(() => {
      const { htmlLang, meta } = this.content();
      document.documentElement.lang = htmlLang;
      document.title = meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not persisted; the choice still applies for this visit.
    }
  }
}
