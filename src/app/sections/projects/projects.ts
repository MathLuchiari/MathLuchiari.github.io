import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  readonly projects = input.required<Project[]>();
  /** Optional closing card pointing at the full GitHub profile. */
  readonly moreLink = input<Link>();
}
