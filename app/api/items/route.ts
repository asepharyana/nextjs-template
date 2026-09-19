import { NextResponse } from "next/server";
import { createItemSchema, MOCK_ITEMS, type Item, type CreateItemOutput } from "@/lib/items";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ items: MOCK_ITEMS });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = createItemSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const input: CreateItemOutput = parsed.data;
  const item: Item = {
    id: crypto.randomUUID(),
    ...input,
    createdAt: new Date().toISOString(),
  };

  // In a real app: persist to DB here. MOCK_ITEMS is module-scoped, so the
  // created item lives only for the lifetime of the server process.
  MOCK_ITEMS.unshift(item);

  return NextResponse.json({ item }, { status: 201 });
}
