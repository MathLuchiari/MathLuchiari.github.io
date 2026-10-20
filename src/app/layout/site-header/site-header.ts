import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { I18n, LANGS } from '../../content/i18n';
import { Lang } from '../../content/portfolio.model';

export interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly brand = input.required<string>();
  readonly items = input.required<NavItem[]>();
  readonly cta = input.required<NavItem>();

  private readonly i18n = inject(I18n);
  protected readonly ui = this.i18n.ui;
  protected readonly lang = this.i18n.lang;
  protected readonly langs = LANGS;

  protected readonly menuOpen = signal(false);
  protected readonly active = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Scroll-spy: highlight the nav item of the section currently in view.
    afterNextRender(() => {
      const ids = [...this.items(), this.cta()].map((i) => i.id);
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
        .forEach((el) => observer.observe(el));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
