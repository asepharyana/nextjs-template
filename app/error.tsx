"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        {error.message || "An unexpected error occurred."}
      </p>
      {error.digest ? (
        <p className="font-mono text-xs text-muted-foreground">Error ID: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
      >
        Try again
      </button>
    </main>
  );
}
