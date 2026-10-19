import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Comic-style section title: a small mono "kicker" with the themed name
 * above a tilted, clearly-labelled heading recruiters can scan.
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="kicker mono">// {{ kicker() }}</p>
    <h2 class="title display" [id]="headingId()" [attr.data-tone]="tone()" [style.rotate.deg]="tilt()">
      {{ title() }}
    </h2>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .kicker {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .title {
      font-size: clamp(40px, 6vw, 56px);
      line-height: 1.1;
      letter-spacing: 2px;
      padding: 4px 20px;
      border: var(--stroke) solid var(--ink);
      background: var(--ink);
      color: var(--accent);
    }
    .title[data-tone='red'],
    .title[data-tone='blue'] {
      color: var(--white);
      -webkit-text-stroke: 1.5px var(--ink);
      paint-order: stroke fill;
    }
    .title[data-tone='red'] { background: var(--red); }
    .title[data-tone='blue'] { background: var(--blue); }
  `,
})
export class SectionHeading {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly tone = input<'ink' | 'red' | 'blue'>('ink');
  readonly tilt = input(-1);
}
