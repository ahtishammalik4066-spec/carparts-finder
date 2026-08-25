# PartFinder PK

Automotive spare parts marketplace — public-facing website, built with Next.js 14 (App Router) + TypeScript.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in NEXT_PUBLIC_API_URL etc.
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/                Next.js App Router pages (routes)
components/         Reusable UI components
  ├─ home/            Homepage sections (Hero, CTA, FeaturedListings...)
  ├─ layout/          Navbar, Footer
  ├─ listings/        Listing cards/grid/filters
  └─ search/          Vehicle search selects (Make/Model/Year/Part/Condition)
hooks/              Custom React hooks
lib/                App logic
  ├─ api.ts           Thin fetch client for the backend API
  ├─ data/            Static reference data (makes, models)
  ├─ shared/           Shared types, constants & validation schemas
  └─ utils.ts
public/brands/      Static brand logo assets
styles/             Global CSS
types/              App-wide TypeScript types
docs/ROUTES.md      Route map for this app
```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – run the production build
- `npm run lint` – lint the project

## Notes

This app previously lived inside a monorepo alongside an admin dashboard, a backend API,
and a shared workspace package. It has been flattened into a single standalone frontend
project — the shared types/constants/schemas now live locally in `lib/shared`, and the app
talks to the backend over HTTP via `NEXT_PUBLIC_API_URL` (see `lib/api.ts`).
