# Lim Hwee Chim — Skyline by HC

The official editorial website for Lim Hwee Chim and Skyline by HC. It publishes practitioner writing on developer-side decisions, upstream construction leadership, technology, productivity, regulation, and Singapore's built environment.

## Technology

This repository uses React 19, Next.js-compatible routing, Vinext, Vite, and Cloudflare Workers. It is not an Astro project: the current production structure was retained because it already provides the required routes and deployable worker output.

## Requirements

- Node.js 22.13 or newer
- npm

## Local setup

```bash
npm install
npm run dev
```

The development server prints the local address after it starts.

## Production checks

```bash
npm run build
npm test
npm run lint
```

`npm run build` creates and validates the deployable output in `dist/`. `npm test` rebuilds the site and checks every public page, article route, internal link, and local image reference.

## Site structure

- `/` — homepage
- `/about` — Lim Hwee Chim's background and practitioner perspective
- `/articles` — article library
- `/articles/[slug]` — individual article pages
- `/topics` — editorial topic index
- `/speaking` — speaking and media
- `/contact` — enquiry page

Shared article metadata is maintained in `app/content.ts`. Full article bodies and the article page template are currently maintained in `app/articles/[slug]/page.tsx`.

## Adding an article

1. Add the article metadata to the `articles` array in `app/content.ts`.
2. Use a lowercase, hyphenated, permanent slug.
3. Add the complete article body to the article route in `app/articles/[slug]/page.tsx`.
4. Add the slug to `articleSlugs` in `tests/rendered-html.test.mjs`.
5. Run `npm test` and `npm run lint` before committing.

Each article should include a unique title, concise search description, publication date, topic, reading time, tags where useful, source note for republished work, and the standard author description.

## Environment and sensitive data

Local environment files are excluded by `.gitignore`. If hosted services are added later, document only placeholder variable names in `.env.example`; never commit passwords, API keys, access tokens, private keys, or personal contact information.

## Deployment

The production build is generated with:

```bash
npm run build
```

The checked-in hosting manifest supports the existing Sites/Cloudflare Worker deployment workflow. For another host, verify that it supports the generated worker output before changing the build configuration.

## Content note

Views published on the site are personal practitioner reflections and do not represent the official position of any employer or project party.
