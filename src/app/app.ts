import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GithubProjects, toProject } from './content/github-projects';
import { I18n } from './content/i18n';
import { NavItem, SiteHeader } from './layout/site-header/site-header';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

const SECTIONS = ['experience', 'skills', 'projects', 'education'] as const;

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Experience, Skills, Projects, Education, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly i18n = inject(I18n);
  private readonly github = inject(GithubProjects);

  protected readonly ui = this.i18n.ui;
  protected readonly data = computed(() => this.i18n.content().portfolio);
  protected readonly year = new Date().getFullYear();

  protected readonly nav = computed<NavItem[]>(() =>
    SECTIONS.map((id) => ({ id, label: this.ui().nav[id] })),
  );
  protected readonly contactNav = computed<NavItem>(() => ({ id: 'contact', label: this.ui().nav.contact }));

  protected readonly linkedIn = computed(() => this.data().contact.links.find((l) => l.label === 'LinkedIn'));
  protected readonly gitHub = computed(() => this.data().contact.links.find((l) => l.label === 'GitHub'));

  protected readonly projectsState = this.github.state;

  /** Only the repos tagged on GitHub — there is no hand-written project list. */
  protected readonly projects = computed(() => {
    const lang = this.i18n.lang();
    const ui = this.ui();
    return this.github.repos().map((repo, i) => toProject(repo, lang, ui, i));
  });
}
