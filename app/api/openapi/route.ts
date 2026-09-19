import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Minimal OpenAPI document describing the template's own API routes.
 * Kept in sync with app/api/** — regenerate client types with:
 *   bun run api:generate
 */
export function GET() {
  return NextResponse.json({
    openapi: "3.1.0",
    info: {
      title: "Next.js Template API",
      version: "0.1.0",
    },
    paths: {
      "/api/health": {
        get: {
          operationId: "getHealth",
          responses: {
            "200": {
              description: "Service health",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      ok: { type: "boolean" },
                      service: { type: "string" },
                      timestamp: { type: "string", format: "date-time" },
                    },
                    required: ["ok", "service", "timestamp"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/auth/{action}": {
        parameters: [
          {
            name: "action",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        get: {
          operationId: "authAction",
          responses: {
            "200": {
              description: "Auth route (Better Auth handler)",
              content: { "application/json": { schema: { type: "object" } } },
            },
          },
        },
      },
    },
  });
}
