import ky from "ky";

/**
 * Typed HTTP client built on ky.
 * Use openapi-fetch alongside this when you have a generated OpenAPI
 * schema (see openapi-fetch docs: `createClient<paths>({ baseUrl })`).
 */
export const apiClient = ky.create({
  prefix: "/api",
  timeout: 15_000,
  retry: {
    limit: 2,
    methods: ["get"],
    statusCodes: [408, 429, 500, 502, 503, 504],
  },
});

export const http = {
  get: <T>(url: string, init?: RequestInit) => apiClient.get(url, init).json<T>(),
  post: <T>(url: string, body?: unknown, init?: RequestInit) =>
    apiClient.post(url, { json: body, ...init }).json<T>(),
  put: <T>(url: string, body?: unknown, init?: RequestInit) =>
    apiClient.put(url, { json: body, ...init }).json<T>(),
  patch: <T>(url: string, body?: unknown, init?: RequestInit) =>
    apiClient.patch(url, { json: body, ...init }).json<T>(),
  delete: <T>(url: string, init?: RequestInit) => apiClient.delete(url, init).json<T>(),
};
