import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Chapter } from '../../content/portfolio.model';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-section-heading kicker="the origin story" title="Experience" headingId="experience-h" />
    <ol class="chapters">
      @for (c of chapters(); track c.period) {
        <li class="chapter panel" [attr.data-tone]="c.tone">
          <p class="strip mono" [class.halftone-red]="c.tone === 'red'" [class.halftone-blue]="c.tone === 'blue'">
            {{ c.period }}
          </p>
          <div class="body">
            <h3 class="display">{{ c.title }}</h3>
            @if (c.company) {
              <p class="company">{{ c.company }}</p>
            }
            <p>{{ c.summary }}</p>
          </div>
        </li>
      }
    </ol>
  `,
  styles: `
    :host { display: flex; flex-direction: column; gap: 28px; }
    .chapters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
      gap: 20px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .chapter { display: flex; flex-direction: column; }
    .strip {
      padding: 8px 14px;
      font-size: 14px;
      text-transform: uppercase;
      border-bottom: var(--stroke) solid var(--ink);
    }
    .chapter[data-tone='accent'] .strip { background: var(--accent); }
    .halftone-red, .halftone-blue { color: var(--white); }
    .body { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
    h3 { font-size: 30px; line-height: 1.05; }
    .company { font-weight: 800; font-size: 15px; }

    .chapter[data-tone='ink'] {
      background: var(--ink);
      color: var(--paper);
      box-shadow: 8px 8px 0 var(--accent);
      .strip { background: var(--paper); color: var(--ink); }
      h3 { color: var(--accent); }
    }
  `,
})
export class Experience {
  readonly chapters = input.required<Chapter[]>();
}
