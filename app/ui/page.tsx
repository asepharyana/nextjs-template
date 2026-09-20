import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShowcaseGallery } from "@/components/showcase/gallery";

export const metadata: Metadata = {
  title: "UI Gallery — Aceternity",
  description:
    "Fifty-two Aceternity UI components vendored into the template — animated cards, beams, backgrounds, pins, marquees and more, wired for the App Router.",
};

const SECTIONS = [
  "3D Pin / Marquee",
  "Backgrounds & Beams",
  "Cards & Hover",
  "Text Effects",
  "Inputs & Buttons",
];

export default function UiGalleryPage() {
  return (
    <div className="flex w-full flex-col items-center bg-zinc-50 dark:bg-zinc-950 dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]">
      <div className="w-full border-b border-zinc-200 bg-white/80 py-10 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6">
          <nav className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
            <Link
              href="/"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-zinc-800 dark:text-zinc-200">UI Gallery</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Aceternity UI gallery
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            50 components vendored straight from the{" "}
            <a
              href="https://ui.aceternity.com/components"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aceternity registry
            </a>{" "}
            and wired for this template. Everything below is live — hover, click and scroll.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="w-full max-w-6xl flex-1 px-6 py-12">
        <Suspense
          fallback={<div className="py-24 text-center text-sm text-zinc-400">Loading gallery…</div>}
        >
          <ShowcaseGallery />
        </Suspense>
      </main>
    </div>
  );
}
