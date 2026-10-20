import { Injectable, signal } from '@angular/core';
import { Lang, Link, Project, UiStrings } from './portfolio.model';

/** Repos owned by this user and tagged with this topic are listed on the site. */
export const GITHUB_USER = 'MathLuchiari';
export const GITHUB_TOPIC = 'portfolio';

const CACHE_KEY = `gh-projects:v1:${GITHUB_USER}:${GITHUB_TOPIC}`;
const CACHE_TTL_MS = 60 * 60 * 1000;

/** A tagged repo plus the `<!-- portfolio … -->` block read from its README. */
export interface GithubRepo {
  name: string;
  url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  topics: string[];
  pushedAt: string;
  meta: Record<string, string>;
}

interface SearchResponse {
  items: {
    name: string;
    full_name: string;
    html_url: string;
    homepage: string | null;
    description: string | null;
    language: string | null;
    topics?: string[];
    pushed_at: string;
    default_branch: string;
    archived: boolean;
  }[];
}

/**
 * Loads the tagged repos once per visit. One GitHub API call (search); the
 * READMEs come from raw.githubusercontent.com, which doesn't count towards
 * the 60 requests/hour unauthenticated limit. Results are cached for an hour.
 */
@Injectable({ providedIn: 'root' })
export class GithubProjects {
  readonly state = signal<'loading' | 'ready' | 'error'>('loading');
  readonly repos = signal<GithubRepo[]>([]);

  constructor() {
    void this.load();
  }

  private async load(): Promise<void> {
    const cached = readCache();
    if (cached) {
      this.repos.set(cached);
      this.state.set('ready');
      return;
    }
    try {
      const repos = await fetchRepos();
      writeCache(repos);
      this.repos.set(repos);
      this.state.set('ready');
    } catch (err) {
      console.warn('Could not load projects from GitHub, using the built-in list.', err);
      this.state.set('error');
    }
  }
}

async function fetchRepos(): Promise<GithubRepo[]> {
  const q = encodeURIComponent(`user:${GITHUB_USER} topic:${GITHUB_TOPIC} fork:true`);
  const res = await fetch(`https://api.github.com/search/repositories?q=${q}&per_page=50`, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub search failed: ${res.status}`);
  const { items } = (await res.json()) as SearchResponse;

  const repos = await Promise.all(
    items
      .filter((r) => !r.archived)
      .map(async (r) => ({
        name: r.name,
        url: r.html_url,
        homepage: r.homepage || null,
        description: r.description,
        language: r.language,
        topics: r.topics ?? [],
        pushedAt: r.pushed_at,
        meta: parsePortfolioBlock(await fetchReadme(r.full_name, r.default_branch)),
      })),
  );
  return sortRepos(repos);
}

/** A missing or unreadable README just means "no extra metadata". */
async function fetchReadme(fullName: string, branch: string): Promise<string> {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${fullName}/${branch}/README.md`);
    return res.ok ? await res.text() : '';
  } catch {
    return '';
  }
}

/**
 * Reads the hidden block from a README:
 *
 *     <!-- portfolio
 *     status: In progress
 *     demo: https://example.com
 *     description.pt: Texto em português
 *     -->
 *
 * One `key: value` per line; keys are case-insensitive, blank lines and lines
 * without a colon are ignored.
 */
export function parsePortfolioBlock(markdown: string): Record<string, string> {
  const block = /<!--\s*portfolio\b([\s\S]*?)-->/i.exec(markdown);
  const meta: Record<string, string> = {};
  if (!block) return meta;
  for (const line of block[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon < 1) continue;
    const key = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (key && value) meta[key] = value;
  }
  return meta;
}

/** Maps a repo to the card model, preferring `key.<lang>` over `key` over GitHub's own data. */
export function toProject(repo: GithubRepo, lang: Lang, ui: UiStrings, index: number): Project {
  const { meta } = repo;
  const pick = (key: string): string | undefined => meta[`${key}.${lang}`] ?? meta[key];
  const display = humanize(repo.name);

  const stack = meta['stack']
    ? splitList(meta['stack'])
    : repo.topics.filter((t) => t !== GITHUB_TOPIC);
  if (!stack.length && repo.language) stack.push(repo.language);

  const links: Link[] = [];
  const demo = safeUrl(meta['demo'] ?? repo.homepage);
  if (demo) links.push({ label: ui.demoLink, href: demo });
  links.push({ label: ui.repoLink, href: repo.url });

  const tone = meta['tone'] === 'red' || meta['tone'] === 'blue' ? meta['tone'] : index % 2 ? 'red' : 'blue';

  return {
    name: repo.name,
    cover: { name: meta['cover'] ?? display, highlight: meta['highlight'] },
    title: pick('title') ?? display,
    description: pick('description') ?? repo.description ?? '',
    stack,
    status: pick('status'),
    tone,
    featured: meta['featured'] === 'true',
    links,
  };
}

/** Featured first, then by `order`, then most recently pushed. */
export function sortRepos(repos: GithubRepo[]): GithubRepo[] {
  const order = (r: GithubRepo) => Number(r.meta['order'] ?? Infinity);
  const featured = (r: GithubRepo) => (r.meta['featured'] === 'true' ? 0 : 1);
  return [...repos].sort(
    (a, b) => featured(a) - featured(b) || order(a) - order(b) || b.pushedAt.localeCompare(a.pushedAt),
  );
}

const splitList = (value: string) =>
  value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

/** `video-slicer` → `Video Slicer`; names with capitals (`EleitorAI`) are kept as is. */
const humanize = (name: string) =>
  /[A-Z]/.test(name) ? name : name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/** Only absolute http(s) links from README metadata reach an `href`. */
function safeUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

function readCache(): GithubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw) as { at: number; repos: GithubRepo[] };
    return Date.now() - at < CACHE_TTL_MS ? repos : null;
  } catch {
    return null;
  }
}

function writeCache(repos: GithubRepo[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    // Storage full or blocked: the next visit simply fetches again.
  }
}
