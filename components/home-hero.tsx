"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Cover } from "@/components/ui/cover";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

export function HomeHero() {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 antialiased dark:bg-zinc-950 dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      </div>

      {/* Sparkles fill the hero background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <SparklesCore
          id="home-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          particleColor="#71717a"
          className="h-full w-full"
        />
      </div>

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center"
      >
        <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
          Next.js 16 · Tailwind v4 · motion · 50+ Aceternity components
        </span>

        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
          A template that ships with <Cover>animated UI out of the box.</Cover>
        </h1>

        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Aceternity components vendored as source, Tailwind v4 native, zero-warning lint. Every
          effect below is live — build a landing page without starting from scratch.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/ui" passHref>
            <MagneticButton strength={0.5} maxDistance={60}>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                Browse the gallery
                <span aria-hidden>→</span>
              </span>
            </MagneticButton>
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            View the demo wiring
          </Link>
        </div>
      </motion.main>
    </div>
  );
}
