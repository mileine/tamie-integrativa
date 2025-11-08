# Tamie Integrativa

Minimal Next.js 14 + TypeScript + Tailwind CSS bilingual blog scaffold (Portuguese / English).

This repository is a small blog about self-awareness and integrative therapies. It uses Next.js App Router, Markdown posts, and Tailwind for styling. The app is mobile-first and includes small UI components like a YouTube embed, a timeline, and a recommendations page.

## Features

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Bilingual routing: `/pt` and `/en` (language prefix in routes)
- Markdown posts in `/posts/pt` and `/posts/en`
- YouTube embed component
- Simple SearchBar (client component)
- Journey timeline and recommendations data
- Mobile-first responsive layout and a mobile menu

## Project structure (important files)

- `src/app/[lang]/*` - App routes for `pt` and `en` (home, blog, post, jornada, recomendacoes, sobre, contato)
- `src/components/*` - UI components (Header, Footer, YouTube, JourneyTimeline, SearchBar, MobileMenu)
- `src/lib/*` - helpers: `getPosts.ts`, `getJourneySteps.ts`, `validateRecommendations.ts`
- `src/data/*` - recommendations and timeline data
- `posts/pt` and `posts/en` - markdown content
- `src/styles/globals.css` - global styles and fonts
- `tailwind.config.js` - Tailwind configuration

## Quick start (development)

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:3000/pt

## Build & run (production)

Build the app:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Then open http://localhost:3000/pt

I ran the build during the last session and it completed successfully. The project is build-ready.

## Deploy (Vercel)

1. Push the repository to GitHub.
2. Import the repo into Vercel and use the default settings (Next.js should be detected automatically).
3. No special environment variables are required for the current scaffold.
4. If you use any third-party services later, add environment variables in Vercel.

## Notes & recent changes

- Mobile-first responsive layout:
  - Header now includes a mobile menu component and a hamburger button.
  - Grid layouts adapted to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
  - Container padding adjusted via Tailwind container settings in `tailwind.config.js`.

- Temporary/local fallback `SearchBar` in `src/app/[lang]/blog/page.tsx`:
  - While fixing JSX errors I included a lightweight fallback SearchBar inside that file to keep the page working during development.
  - The real component lives at `src/components/SearchBar.tsx`. If you want the real one restored, replace the inline fallback in `src/app/[lang]/blog/page.tsx` with:

```ts
import SearchBar from '../../../components/SearchBar'
```

and remove the inline `SearchBar` declaration inside that file.

- Fonts: Google fonts (Caveat + Indie Flower) are imported in `src/styles/globals.css`. Tailwind font utilities were added in `tailwind.config.js`.

## Troubleshooting

- JSX parsing errors usually come from mismatched or unclosed tags. If you see `Unexpected token` or `Expected corresponding JSX closing tag`, inspect the file indicated in the error and make sure all JSX elements open and close correctly.

- If the build fails on CI but passes locally, ensure the Node.js version in CI matches your local environment and that lockfile (package-lock.json) is consistent.

- Lint warnings (unused vars) can be fixed by removing or using the variables; a few temporary `any` types were tightened during fixes.

## Useful commands

- Dev: `npm run dev`
- Build: `npm run build`
- Start (production): `npm run start`
- Lint: `npm run lint`

## Next steps (recommended)

- Replace the inline fallback `SearchBar` in `src/app/[lang]/blog/page.tsx` with the actual `src/components/SearchBar.tsx` import.
- Add more posts inside `posts/pt` and `posts/en`.
- Add tests and CI checks if you plan to maintain this project long-term.

---

If you want, I can:
- Restore the real `SearchBar` into the blog page now.
- Start the production server locally and smoke-test the main routes.
- Create a short deploy checklist for Vercel with recommended settings.

Which would you like next?
# Tamie Integrativa

Minimal Next.js 14 + TypeScript + Tailwind scaffold for the Tamie Integrativa bilingual blog.

Structure:
- Posts are in `/posts/pt` and `/posts/en` as Markdown files.
- App Router under `src/app/[lang]` for `pt` and `en` routes.

Quick start:

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Open http://localhost:3000/pt

Notes:
- This scaffold includes simple server helpers `src/lib/getPosts.ts` to load markdown posts.
- Tailwind is configured; run `npx tailwindcss -v` if you need to verify installation.
