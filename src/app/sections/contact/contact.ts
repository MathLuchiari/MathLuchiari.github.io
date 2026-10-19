import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact as ContactInfo } from '../../content/portfolio.model';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let c = contact();
    <div class="box rays">
      <h2 id="contact-h" class="display">{{ c.heading }}</h2>
      <p class="message">{{ c.message }}</p>
      <div class="links">
        @for (l of c.links; track l.href; let first = $first) {
          <a
            class="btn"
            [class.btn--dark]="first"
            [class.btn--light]="!first"
            [href]="l.href"
            [attr.target]="l.href.startsWith('mailto:') ? null : '_blank'"
            [attr.rel]="l.href.startsWith('mailto:') ? null : 'noopener'"
            >{{ l.label }}</a
          >
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .box {
      border: var(--stroke-lg) solid var(--ink);
      box-shadow: var(--shadow-lg);
      padding: 48px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;
      text-align: center;
    }
    h2 {
      font-size: clamp(52px, 8vw, 96px);
      line-height: .9;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--white);
      -webkit-text-stroke: 3px var(--ink);
      paint-order: stroke fill;
      text-shadow: 6px 6px 0 var(--ink);
    }
    .message {
      max-width: 560px;
      background: var(--white);
      border: var(--stroke) solid var(--ink);
      padding: 16px 20px;
      font-size: 18px;
      line-height: 1.5;
      font-weight: 600;
    }
    .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
    .btn { font-size: 26px; padding: 12px 24px; }
  `,
})
export class Contact {
  readonly contact = input.required<ContactInfo>();
}
