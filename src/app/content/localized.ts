import { Lang } from './portfolio.model';

/** One text in every supported language. Missing a language is a compile error. */
export type Localized = Readonly<Record<Lang, string>>;

/**
 * The authoring shape of `T`: every free-text `string` field may be written
 * either once (same in every language — names, links) or as a `Localized`.
 * Literal unions like `Tone` stay as they are.
 */
export type Source<T> = T extends string
  ? string extends T
    ? string | Localized
    : T
  : T extends readonly (infer U)[]
    ? Source<U>[]
    : T extends object
      ? { [K in keyof T]: Source<T[K]> }
      : T;

const LANG_KEYS = ['en', 'pt', 'es'] as const satisfies readonly Lang[];

function isLocalized(value: object): value is Localized {
  const keys = Object.keys(value);
  return keys.length === LANG_KEYS.length && LANG_KEYS.every((l) => typeof (value as Localized)[l] === 'string');
}

/** Picks `lang` from every `Localized` in `source`, returning the plain shape components render. */
export function localize<T>(source: Source<NoInfer<T>>, lang: Lang): T {
  return pick(source, lang) as T;
}

function pick(value: unknown, lang: Lang): unknown {
  if (Array.isArray(value)) return value.map((v) => pick(v, lang));
  if (value === null || typeof value !== 'object') return value;
  if (isLocalized(value)) return value[lang];
  return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, pick(v, lang)]));
}
