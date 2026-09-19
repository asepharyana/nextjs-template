import { test, expect } from "@playwright/test";

test("home page renders the starter content", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Create Next App/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("To get started");
  await expect(page.getByText("Deploy Now")).toBeVisible();
  await expect(page.getByText("Documentation")).toBeVisible();
});

test("health endpoint returns OK", async ({ request }) => {
  const res = await request.get("/api/health");
  expect(res.ok()).toBeTruthy();

  const body = await res.json();
  expect(body.ok).toBe(true);
  expect(body.service).toBe("nextjs-template");
  expect(body.timestamp).toBeTruthy();
});
