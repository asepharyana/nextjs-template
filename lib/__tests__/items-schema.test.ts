import { describe, expect, it } from "vitest";
import { createItemSchema } from "@/lib/items";

describe("items API schema", () => {
  it("accepts valid input (coerces numeric strings)", () => {
    const result = createItemSchema.safeParse({ name: "Chair", quantity: "4" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({ name: "Chair", quantity: 4 });
    }
  });

  it("rejects empty name", () => {
    const result = createItemSchema.safeParse({ name: "", quantity: 1 });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name).toBeTruthy();
    }
  });

  it("rejects non-numeric quantity", () => {
    const result = createItemSchema.safeParse({ name: "Chair", quantity: "abc" });
    expect(result.success).toBe(false);
  });

  it("rejects negative quantity", () => {
    const result = createItemSchema.safeParse({ name: "Chair", quantity: -5 });
    expect(result.success).toBe(false);
  });
});
