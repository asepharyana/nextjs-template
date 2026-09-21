# Next.js Template

Production-ready Next.js 16 (App Router, Turbopack) starter on Bun, with
shadcn/ui Base UI components, TypeScript strict, and a zero-warning
lint/typecheck/test/build pipeline.

## Stack

- **Framework:** Next.js 16.3 (App Router, Turbopack, standalone output)
- **Runtime:** Bun 1.3.14
- **UI:** shadcn/ui Base-Nova (Base UI) + Tailwind CSS v4, lucide-react, motion
- **Data:** @tanstack/react-query, @tanstack/react-table
- **Forms:** react-hook-form + zod (v4) + @hookform/resolvers
- **Auth:** better-auth (memory adapter, swap to Drizzle/Postgres when ready)
- **API client:** openapi-fetch + openapi-typescript, ky
- **Markdown:** react-markdown + remark-gfm + shiki (server-side highlighting)
- **Misc:** zustand, nuqs, sonner, cmdk, vaul, embla-carousel-react, date-fns,
  next-themes, recharts

## Getting started

```bash
bun install
cp .env.example .env   # optional: set BETTER_AUTH_SECRET / BETTER_AUTH_URL
bun run dev            # http://localhost:3000
```

Requires Node ≥ 18 (Bun runtime) — see `packageManager` in package.json.

## Scripts

| Script                            | Description                                                         |
| --------------------------------- | ------------------------------------------------------------------- |
| `bun run dev`                     | Start dev server (Turbopack, NODE_ENV pinned to development)        |
| `bun run build`                   | Production build (standalone output for Docker)                     |
| `bun run start`                   | Serve the production build                                          |
| `bun run lint`                    | ESLint (next core-web-vitals + typescript)                          |
| `bun run lint:fix`                | ESLint with autofix                                                 |
| `bun run typecheck`               | `tsc --noEmit` (strict + noUnusedLocals/Parameters)                 |
| `bun run test`                    | Vitest unit tests (jsdom + jest-dom)                                |
| `bun run test:watch`              | Vitest watch mode                                                   |
| `bun run test:coverage`           | Vitest with v8 coverage report                                      |
| `bun run test:e2e`                | Playwright E2E (Chromium, dedicated :3100)                          |
| `bun run format` / `format:check` | Prettier write / check (Tailwind v4 plugin)                         |
| `bun run api:generate`            | Regenerate `types/api.ts` from `/api/openapi` (dev server must run) |
| `bun run prepare`                 | Install husky hooks                                                 |

Git hooks (husky + lint-staged) run ESLint + Prettier on staged files.

## Project structure

```
app/
  page.tsx            # landing page
  demo/               # wiring example: markdown+shiki, form, table, session
  protected/          # route guarded by middleware (better-auth session)
  error.tsx / loading.tsx / not-found.tsx
  api/
    health/           # GET health JSON
    openapi/          # OpenAPI 3.1 spec for codegen
    auth/[...all]/    # better-auth handler
    items/            # GET list / POST create (zod-validated)
components/
  providers.tsx       # QueryClient + Theme + Nuqs + Tooltip + Sonner
  ui/                 # shadcn Base-Nova components (CLI-managed)
  demo/               # form + table wiring examples
hooks/                # use-mobile (useSyncExternalStore)
lib/
  auth.ts             # better-auth server (memory adapter)
  auth-client.ts      # better-auth react client
  api.ts              # typed openapi-fetch client
  http.ts             # ky wrapper
  query-client.ts     # react-query client (per-request on server)
  env.ts              # zod-validated env (no import-time throw)
types/api.ts          # generated openapi-typescript types
middleware.ts         # auth route guard
e2e/                  # Playwright specs
.github/workflows/ci.yml
Dockerfile            # multi-stage standalone build
```

## Auth

better-auth is wired but intentionally runs on the in-memory adapter so the
template builds without a database.

1. `bunx @better-auth/cli secret` → put the result in `BETTER_AUTH_SECRET`.
2. Set `BETTER_AUTH_URL` (+ `NEXT_PUBLIC_BETTER_AUTH_URL` for the client).
3. To persist users, swap `memoryAdapter({})` in `lib/auth.ts` for a real
   adapter (e.g. `drizzleAdapter(db, { provider: "pg" })`) and add the DB URL.

Routes under `/protected` require a session (see `middleware.ts`).

## OpenAPI + typed client

`app/api/openapi` serves an OpenAPI 3.1 document. Regenerate the typed client:

```bash
bun run dev &          # server must be up
bun run api:generate   # writes types/api.ts
```

Then use `lib/api.ts` (`createClient<paths>` from openapi-fetch).

## Docker

```bash
docker build -t nextjs-template .
docker run -p 3000:3000 nextjs-template
```

Multi-stage standalone image (~50MB runtime); runs as non-root user; requires
NODE_ENV=production and the env vars above at runtime.

## License

Private template.

# Test DC format

Verifying Discord notification formatting.
