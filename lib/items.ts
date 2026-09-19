import { z } from "zod";

export type Item = {
  id: string;
  name: string;
  quantity: number;
  createdAt: string;
};

export const createItemSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  quantity: z.coerce.number({ error: "Quantity must be a number" }).int().min(0).max(10000),
});

export type CreateItemInput = z.input<typeof createItemSchema>;
export type CreateItemOutput = z.output<typeof createItemSchema>;

export const MOCK_ITEMS: Item[] = [
  { id: "1", name: "Ergonomic chair", quantity: 4, createdAt: "2026-09-01T08:00:00Z" },
  { id: "2", name: "Mechanical keyboard", quantity: 12, createdAt: "2026-09-02T09:30:00Z" },
  { id: "3", name: "USB-C dock", quantity: 7, createdAt: "2026-09-03T10:15:00Z" },
  { id: "4", name: "Monitor arm", quantity: 3, createdAt: "2026-09-04T11:45:00Z" },
];
