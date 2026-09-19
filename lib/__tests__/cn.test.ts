import { describe, expect, it } from "vitest";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

describe("cn", () => {
  it("joins truthy values", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("returns empty string for no classes", () => {
    expect(cn()).toBe("");
  });
});
