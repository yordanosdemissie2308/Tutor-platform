# Tutor Platform

This repository contains two separate projects used together for the Tutor Platform:

- [tutor-backend](tutor-backend): NestJS backend with Prisma (SQLite for local dev).
- [tutor-frontend](tutor-frontend): Vite + React + TypeScript frontend using Tailwind CSS.

**Quick Links**

- Backend code: [tutor-backend](tutor-backend)
- Frontend code: [tutor-frontend](tutor-frontend)

**Prerequisites**

- Node.js (v18+ recommended)
- pnpm (recommended due to known npm install issues in this workspace)

**Setup (Backend)**

1. Change to the backend folder and install dependencies:

```bash
cd tutor-backend
pnpm install
```

2. Prisma (SQLite dev DB): ensure the `.env` file exists in `tutor-backend` (it should contain `DATABASE_URL="file:./dev.db"`). Generate and apply migrations:

```bash
pnpm exec prisma generate
pnpm exec prisma migrate dev --name init
```

3. Run the backend in development:

```bash
pnpm run start:dev
```

**Setup (Frontend)**

1. Change to the frontend folder and install:

```bash
cd tutor-frontend
pnpm install
```

2. Start the dev server:

```bash
pnpm run dev
```

3. Tailwind is configured via Vite. Global styles are imported from [tutor-frontend/src/main.tsx](tutor-frontend/src/main.tsx) and the Tailwind directives live in [tutor-frontend/src/styles/tailwind.css](tutor-frontend/src/styles/tailwind.css).

**Type Checking**

- Backend type-check (from repo root or inside backend):

```bash
cd tutor-backend
pnpm exec tsc -p tsconfig.json --noEmit
```

- Frontend type-check:

```bash
cd tutor-frontend
pnpm exec tsc -p tsconfig.app.json --noEmit
```

**Notes & Troubleshooting**

- `pnpm` is recommended: this workspace encountered an `npm` arborist error during installs; `pnpm` was used successfully for Prisma and other installs.
- Prisma: the backend uses a local SQLite DB for development. Check `tutor-backend/.env` for `DATABASE_URL`.
- Tailwind: Tailwind v4 removed `@tailwind components`; the project uses the Vite Tailwind plugin and imports global CSS in `src/main.tsx`.

If you want, I can:

- install the frontend UI dependencies (pnpm) and re-run the frontend type-checks, or
- scaffold missing/stub components to make the frontend compile without external UI libraries.

---

Created by the maintainer automation. For more details, open the workspace folders listed above.
