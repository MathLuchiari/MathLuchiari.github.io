import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18n } from '../../content/i18n';
import { Link, Project } from '../../content/portfolio.model';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly ui = inject(I18n).ui;
  readonly projects = input.required<Project[]>();
  /** Optional closing card pointing at the full GitHub profile. */
  readonly moreLink = input<Link>();
  /** Status of the GitHub fetch the projects come from. */
  readonly state = input<'loading' | 'ready' | 'error'>('ready');
}
