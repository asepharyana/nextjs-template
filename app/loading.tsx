export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-8" role="status">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-4 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        Loading…
      </div>
    </div>
  );
}
