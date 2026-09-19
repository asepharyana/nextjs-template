import createClient from "openapi-fetch";
import type { paths } from "@/types/api";

export const api = createClient<paths>({
  baseUrl: "/",
});

// Typed convenience wrappers for the template's own API routes.
export const healthApi = {
  get: () => api.GET("/api/health"),
};
