import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url().default("http://localhost:3000"),
});

/**
 * Validated public env vars. Uses .default() so missing vars don't throw at
 * import time (keeps next build + CI safe); values fall back to dev defaults.
 */
const parsed = envSchema.safeParse({
  NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export const env = parsed.success
  ? parsed.data
  : {
      NEXT_PUBLIC_BETTER_AUTH_URL: "http://localhost:3000",
    };

export const isEnvValid = () => parsed.success;
