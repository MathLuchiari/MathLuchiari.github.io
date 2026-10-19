import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Education as EducationItem } from '../../content/portfolio.model';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-education',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section-heading
      kicker="training arc"
      title="Education & Certifications"
      headingId="education-h"
      tone="blue"
    />
    <div class="grid">
      @for (e of items(); track e.title) {
        <div class="card panel">
          <p class="period mono">{{ e.period }}</p>
          <h3>{{ e.title }}</h3>
          <p>{{ e.school }}</p>
        </div>
      }
      @if (certifications().length) {
        <div class="card panel certs">
          <h3 class="display">Certifications</h3>
          <ul>
            @for (c of certifications(); track c) {
              <li>{{ c }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: `
    :host { display: flex; flex-direction: column; gap: 28px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
      gap: 20px;
    }
    .card {
      box-shadow: 6px 6px 0 var(--ink);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .period { font-size: 13px; text-transform: uppercase; }
    h3 { font-weight: 800; font-size: 19px; line-height: 1.3; }
    .certs { background: var(--accent); gap: 10px; }
    .certs h3 { font-weight: 400; font-size: 26px; text-transform: uppercase; }
    ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; font-weight: 800; }
  `,
})
export class Education {
  readonly items = input.required<EducationItem[]>();
  readonly certifications = input<string[]>([]);
}
