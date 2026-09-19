"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const itemSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  quantity: z.coerce
    .number({ error: "Quantity must be a number" })
    .int("Must be a whole number")
    .min(0, "Minimum 0")
    .max(10000, "Maximum 10000"),
});

type ItemFormValues = z.input<typeof itemSchema>;
type ItemSubmitValues = z.output<typeof itemSchema>;

export function ItemForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ItemFormValues, unknown, ItemSubmitValues>({
    resolver: zodResolver(itemSchema),
    defaultValues: { name: "", quantity: 1 },
  });

  const mutation = useMutation({
    mutationFn: async (values: ItemSubmitValues) => {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error ?? "Failed to create item");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("Item created");
      reset();
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => mutation.mutate(values))}
      className="flex flex-col gap-3 rounded-lg border p-4"
      noValidate
    >
      <h2 className="text-sm font-semibold">Add item (RHF + zod + react-query)</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:border-ring"
          placeholder="e.g. USB-C cable"
        />
        {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="quantity" className="text-xs font-medium">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          {...register("quantity")}
          className="rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:border-ring"
        />
        {errors.quantity && (
          <span className="text-xs text-destructive">{errors.quantity.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || mutation.isPending}
        className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-50"
      >
        {mutation.isPending ? "Creating…" : "Create item"}
      </button>
    </form>
  );
}
