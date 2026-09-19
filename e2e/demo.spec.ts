import { test, expect } from "@playwright/test";

test("demo page shows markdown, code block, and items table", async ({ page }) => {
  await page.goto("/demo");

  // Markdown rendered
  await expect(page.getByRole("heading", { name: "Demo Page" })).toBeVisible();
  await expect(page.getByText("Server component renders this markdown")).toBeVisible();

  // Shiki code block (highlighted <pre> wrapper)
  const codeBlock = page.locator("pre");
  await expect(codeBlock.first()).toBeVisible();

  // Items table loaded via react-query
  await expect(page.getByText("Ergonomic chair")).toBeVisible();
  await expect(page.getByText("Mechanical keyboard")).toBeVisible();
});

test("demo form creates an item (RHF + zod + mutation)", async ({ page }) => {
  await page.goto("/demo");

  const name = "Playwright gadget";
  await page.getByLabel("Name").fill(name);
  await page.getByLabel("Quantity").fill("5");
  await page.getByRole("button", { name: "Create item" }).click();

  await expect(page.getByText("Item created")).toBeVisible(); // sonner toast
  await expect(page.getByText(name)).toBeVisible(); // appears in table

  // Zod validation: empty name shows error
  await page.getByLabel("Name").fill("");
  await page.getByRole("button", { name: "Create item" }).click();
  await expect(page.getByText("Name is required")).toBeVisible();
});

test("protected page redirects to home when unauthenticated", async ({ page }) => {
  await page.goto("/protected");
  await expect(page).toHaveURL(/\/\?next=%2Fprotected/);
});
