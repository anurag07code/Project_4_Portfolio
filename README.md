# CV Canvas Creator

Vite + React + TypeScript app styled with Tailwind CSS and shadcn-ui.

## Requirements

- Node.js 18+ (LTS recommended)
- npm 9+

## Getting started (local)

```sh
npm install
npm run dev
```

Vite selects a free port automatically. Check the terminal for the URL (e.g. `http://localhost:5173` or `http://localhost:8081`).

## Production build & preview

```sh
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a new Git repository (GitHub, GitLab, or any Git remote you control).
2. In Vercel, create a New Project and import the repository.
3. Settings:
   - Framework preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy. Vercel will build and host the site at your project URL.

No special base path or hash routing is required on Vercel.

## Project structure

```
src/
  components/
  pages/
  hooks/
  lib/
  main.tsx
  App.tsx
index.html
vite.config.ts
tailwind.config.ts
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
