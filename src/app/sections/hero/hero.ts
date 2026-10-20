import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { I18n } from '../../content/i18n';
import { Link, Profile } from '../../content/portfolio.model';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly ui = inject(I18n).ui;
  readonly profile = input.required<Profile>();
  readonly primaryLink = input<Link>();

  /** Splits the name so each word sits on its own line of the cover title. */
  protected readonly nameLines = computed(() => this.profile().name.split(' '));
}
