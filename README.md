# fortino.me

Personal site built with [Astro](https://astro.build) and Tailwind CSS, published to
GitHub Pages. Available in English (`/`), Portuguese (`/pt/`) and Spanish (`/es/`).

Based on [ryanfitzgerald.github.io/devportfolio](https://ryanfitzgerald.github.io/devportfolio/),
[MIT licensed](https://opensource.org/license/mit).

## Content

All site copy — bios, experience, education, section headings — lives in
[`src/config.ts`](src/config.ts), keyed by language under `content.{en,pt,es}`.
There is no CMS and no Markdown collection: edit that file and rebuild.

The source of truth for the copy is `site-master-english.md` (working document,
not published). Read the confidentiality notice at the top of it before moving any
case-study text into the site.

## Structure

| Path | Purpose |
| --- | --- |
| `src/config.ts` | All content, per language |
| `src/pages/{index,pt/index,es/index}.astro` | One page per language |
| `src/components/` | Hero, About, Projects, Experience, Education, Header, Footer |

`Projects`, `Experience` and `Education` render only when their array for the
current language is non-empty, so an empty array hides the section.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Deployment is automated via GitHub Actions on push to `main`.
