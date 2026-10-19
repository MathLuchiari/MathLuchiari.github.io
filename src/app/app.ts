import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PORTFOLIO } from './content/portfolio.data';
import { NavItem, SiteHeader } from './layout/site-header/site-header';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Experience, Skills, Projects, Education, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly data = PORTFOLIO;
  protected readonly year = new Date().getFullYear();

  protected readonly nav: NavItem[] = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];
  protected readonly contactNav: NavItem = { id: 'contact', label: 'Contact' };

  protected readonly linkedIn = PORTFOLIO.contact.links.find((l) => l.label === 'LinkedIn');
  protected readonly gitHub = PORTFOLIO.contact.links.find((l) => l.label === 'GitHub');
}
