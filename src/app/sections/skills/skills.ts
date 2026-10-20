import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18n } from '../../content/i18n';
import { SkillGroup } from '../../content/portfolio.model';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let s = ui().sections.skills;
    <app-section-heading [kicker]="s.kicker" [title]="s.title" headingId="skills-h" tone="red" [tilt]="1" />
    <div class="groups">
      @for (g of groups(); track g.title) {
        <div class="group">
          <h3 class="display">{{ g.title }}</h3>
          <ul class="chip-list">
            @for (item of g.items; track item; let first = $first) {
              <li class="chip" [class.chip--hot]="first">{{ item }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: `
    :host { display: flex; flex-direction: column; gap: 28px; }
    .groups {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
      gap: 20px;
    }
    .group {
      background: var(--white);
      border: var(--stroke) solid var(--ink);
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      transition: transform .15s ease, box-shadow .15s ease;
    }
    .group:hover { transform: translate(-3px, -3px); box-shadow: 6px 6px 0 var(--ink); }
    h3 { font-size: 28px; text-transform: uppercase; }
    .chip-list { font-size: 14px; }
  `,
})
export class Skills {
  protected readonly ui = inject(I18n).ui;
  readonly groups = input.required<SkillGroup[]>();
}
