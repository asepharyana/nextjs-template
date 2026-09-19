"use client";

import { ItemForm } from "@/components/demo/item-form";
import { ItemList } from "@/components/demo/item-list";

export function DemoClient() {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <ItemForm />
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold">Items (react-query + react-table)</h2>
          <ItemList />
        </div>
      </div>
    </section>
  );
}
