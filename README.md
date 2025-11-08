# Tamie Integrativa

Minimal Next.js 14 + TypeScript + Tailwind CSS bilingual blog scaffold (Portuguese / English).

This repository is a small blog about self-awareness and integrative therapies. It uses Next.js App Router, Markdown posts, and Tailwind for styling. The app is mobile-first and includes small UI components like a YouTube embed, a timeline, and a recommendations page.

Just having some fun with CoPilot... 🤖💖

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

Open http://localhost:3000/pt

Notes:
- This scaffold includes simple server helpers `src/lib/getPosts.ts` to load markdown posts.
- Tailwind is configured; run `npx tailwindcss -v` if you need to verify installation.
