"use client";

import { useQuery } from "@tanstack/react-query";
import { flexRender } from "@tanstack/react-table";
import {
  legacyCreateColumnHelper as createColumnHelper,
  getCoreRowModel,
  useLegacyTable,
  type LegacyColumnDef,
} from "@tanstack/react-table/legacy";
import { format } from "date-fns";
import type { Item } from "@/lib/items";

const columnHelper = createColumnHelper<Item>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("quantity", {
    header: "Qty",
  }),
  columnHelper.accessor("createdAt", {
    header: "Created",
    cell: (info) => format(new Date(info.getValue<string>()), "MMM d, HH:mm"),
  }),
] as LegacyColumnDef<Item>[];

export function ItemList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("/api/items");
      if (!res.ok) throw new Error("Failed to load items");
      const body = await res.json();
      return body.items as Item[];
    },
  });

  const table = useLegacyTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading items…</p>;
  }

  if (isError) {
    return (
      <div className="flex items-center gap-3 text-sm text-destructive">
        <span>{error.message}</span>
        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-md border px-2 py-1 hover:bg-muted"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 font-medium">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t hover:bg-muted/30">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length === 0 ? (
        <p className="px-4 py-3 text-sm text-muted-foreground">No items yet.</p>
      ) : null}
    </div>
  );
}
