import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProtectedPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">Protected Page</h1>
      {session ? (
        <div className="flex flex-col items-center gap-2 rounded-lg border p-6">
          <p className="text-lg">
            Welcome, <span className="font-medium">{session.user.name}</span>!{" "}
            <span className="text-muted-foreground">({session.user.email})</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Session expires: {new Date(session.session.expiresAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground">No session found.</p>
      )}
      <Link href="/" className="text-sm text-primary underline-offset-4 hover:underline">
        ← Back home
      </Link>
    </main>
  );
}
