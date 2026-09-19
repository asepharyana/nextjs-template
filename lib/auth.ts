import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

/**
 * Better Auth server instance.
 *
 * Uses the in-memory adapter so the template builds and runs without a
 * database. Swap to a real adapter (drizzle/kysely + Postgres) when a DB is
 * wired up:
 *
 *   import { drizzleAdapter } from "better-auth/adapters/drizzle";
 *   database: drizzleAdapter(db, { provider: "pg" })
 *
 * Required env (see .env.example):
 *   BETTER_AUTH_SECRET — run `bunx @better-auth/cli secret` to generate
 *   BETTER_AUTH_URL   — full URL of the deployed app
 */
export const auth = betterAuth({
  database: memoryAdapter({}),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // refresh every 24h
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  advanced: {
    cookiePrefix: "nextjs-template",
  },
});

export type Session = typeof auth.$Infer.Session;
