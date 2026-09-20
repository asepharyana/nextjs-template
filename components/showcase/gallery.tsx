"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardStack } from "@/components/ui/card-stack";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MovingBorder } from "@/components/ui/moving-border";
import { PinContainer } from "@/components/ui/3d-pin";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Tabs } from "@/components/ui/animated-tabs";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Boxes } from "@/components/ui/background-boxes";
import { Spotlight } from "@/components/ui/spotlight";
import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SquigglyText } from "@/components/ui/squiggly-text";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { Meteors } from "@/components/ui/meteors";
import { GlareCard } from "@/components/ui/glare-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GooeyInput } from "@/components/ui/gooey-input";
import { Notch } from "@/components/ui/notch";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { FocusCards } from "@/components/ui/focus-cards";
import { Tooltip } from "@/components/ui/tooltip-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import {
  ModalProvider,
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { IconHome, IconUser, IconSettings, IconMoon, IconSun } from "@tabler/icons-react";
import { useScroll, useTransform, MotionValue } from "motion/react";

function Card({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900",
        className
      )}
    >
      {children}
      {label && (
        <span className="absolute right-3 bottom-3 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500">
          {label}
        </span>
      )}
    </div>
  );
}

function SectionLabel({ id, index, title }: { id: string; index: string; title: string }) {
  return (
    <div id={id} className="flex w-full max-w-6xl flex-col items-start gap-1.5">
      <span className="text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
        {index}
      </span>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
    </div>
  );
}

const BENTO_ITEMS = [
  {
    title: "Vendored, not installed",
    description: "Each component ships as source in components/ui — zero registry lock-in.",
    header: "✦",
    className: "md:col-span-2",
  },
  {
    title: "Tailwind v4 native",
    description: "Same cn() util and zinc palette as the rest of the template.",
    header: "❖",
  },
  {
    title: "Zero-warning lint",
    description: "Vendored dir has its own scoped eslint override.",
    header: "✓",
    className: "md:col-span-2",
  },
];

const PEOPLE = [
  { id: 1, name: "Aceternity", designation: "ui.aceternity.com", image: "/vercel.svg" },
  { id: 2, name: "Vercel", designation: "nextjs-template", image: "/next.svg" },
  { id: 3, name: "Template", designation: "Shadcn + Aceternity", image: "/vercel.svg" },
];

const STACK_CARDS = [
  {
    id: 1,
    name: "3D Pin",
    designation: "Hover cards",
    content: <>A card that lifts on hover, with a beam behind it.</>,
  },
  {
    id: 2,
    name: "Tracing Beam",
    designation: "Scroll guide",
    content: <>A beam that traces your scroll, guiding the eye down the page.</>,
  },
  {
    id: 3,
    name: "Evervault",
    designation: "Encrypted hover",
    content: <>Patterns react to your mouse while the card sits above an animated capsule.</>,
  },
];

const TESTIMONIALS_MOCK = [
  {
    quote: "The fifty components slot straight into the template and just work.",
    name: "Next.js Template",
    title: "Vendored showcase",
  },
  {
    quote: "Hover, scroll and type — everything below is live, not a static screenshot.",
    name: "Aceternity Registry",
    title: "ui.aceternity.com",
  },
  {
    quote: "Built with motion/react and Tailwind v4, matching the template's own stack.",
    name: "Motion",
    title: "motion/react",
  },
];

export function ShowcaseGallery() {
  return (
    <div className="flex w-full flex-col items-center gap-20 py-10">
      <section id="hero" className="flex w-full flex-col items-center gap-6">
        <AuroraBackground className="w-full overflow-hidden rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 px-6 py-24 text-center"
          >
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              50 components · vendored · lint-clean
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Aceternity UI, wired for this template
            </h1>
            <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Animated cards, beams, bento grids and text effects — pulled from the registry,
              adapted to Tailwind v4 + motion/react, and demoed live on this page.
            </p>
          </motion.div>
        </AuroraBackground>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card label="3d-marquee">
            <ThreeDMarquee
              className="w-full"
              images={["/next.svg", "/vercel.svg", "/next.svg", "/vercel.svg"]}
            />
          </Card>
          <Card label="animated-tooltip">
            <AnimatedTooltip items={PEOPLE} />
          </Card>
          <Card label="typewriter-effect">
            <TypewriterEffect
              words={[
                { text: "Typewriter" },
                { text: "effect" },
                { text: "…" },
                { text: "works." },
              ]}
            />
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="beams" index="01" title="Beams, sparkles & gradients" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card label="background-beams" className="md:col-span-2">
            <div className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden rounded-xl">
              <BackgroundBeams className="absolute inset-0" />
              <p className="relative z-10 text-sm font-medium text-zinc-300">
                BackgroundBeams — hover to see the glow
              </p>
            </div>
          </Card>
          <Card label="sparkles">
            <div className="flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
              <SparklesCore
                background="transparent"
                minSize={0.6}
                maxSize={1.6}
                particleDensity={90}
                particleColor="#a1a1aa"
                className="h-full w-full"
              />
              <p className="absolute bottom-4 text-xs text-zinc-500">SparklesCore</p>
            </div>
          </Card>
          <Card label="background-gradient-animation" className="md:col-span-3">
            <BackgroundGradientAnimation
              containerClassName="rounded-xl"
              className="absolute inset-0 z-20"
            >
              <div className="relative z-30 flex flex-col items-center gap-2 px-6 text-center">
                <p className="text-lg font-semibold text-white">BackgroundGradientAnimation</p>
                <p className="text-xs text-white/70">Animated aurora wash behind any content</p>
              </div>
            </BackgroundGradientAnimation>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="cards" index="02" title="Pins, stacks & hover cards" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card label="3d-pin" className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <PinContainer title="ui.aceternity.com" href="#cards">
                <div className="flex h-56 w-72 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">Hover me</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">3D Pin</p>
                </div>
              </PinContainer>
              <PinContainer title="bento grid →" href="#bento">
                <div className="flex h-56 w-72 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                    Perspective lift
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">on hover</p>
                </div>
              </PinContainer>
            </div>
          </Card>
          <Card label="card-spotlight">
            <CardSpotlight className="w-full p-8">
              <p className="text-sm font-medium text-zinc-100">CardSpotlight</p>
              <p className="mt-2 text-xs text-zinc-400">Move your cursor for a spotlight.</p>
            </CardSpotlight>
          </Card>
          <Card label="card-stack">
            <CardStack items={STACK_CARDS} />
          </Card>
          <Card label="direction-aware-hover">
            <DirectionAwareHover imageUrl="/next.svg" className="w-full">
              <p className="text-sm font-medium text-white">DirectionAwareHover</p>
            </DirectionAwareHover>
          </Card>
          <Card label="bento-grid">
            <BentoGrid className="mx-auto w-full max-w-3xl">
              {BENTO_ITEMS.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          </Card>
          <Card label="moving-border">
            <MovingBorder
              duration={3000}
              className="rounded-full border border-zinc-200 bg-white px-6 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              MovingBorder
            </MovingBorder>
          </Card>
          <Card label="infinite-moving-cards">
            <InfiniteMovingCards
              items={TESTIMONIALS_MOCK}
              direction="left"
              speed="slow"
              pauseOnHover
              className="w-full"
            />
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="text" index="03" title="Highlight, flip & encrypt" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card label="hero-highlight" className="md:col-span-2">
            <HeroHighlight containerClassName="w-full rounded-xl">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-3 text-center font-sans text-2xl text-zinc-900 sm:text-3xl dark:text-white"
              >
                Text effects with{" "}
                <Highlight className="text-black dark:text-white">mouse-follow highlight</Highlight>
              </motion.h1>
            </HeroHighlight>
          </Card>
          <Card label="flip-words">
            <div className="text-center text-lg text-zinc-700 dark:text-zinc-200">
              Animate text like <FlipWords words={["sparkles", "beams", "pins", "marquees"]} />
            </div>
          </Card>
          <Card label="encrypted-text">
            <EncryptedText
              text="Aceternity, vendored."
              className="text-center text-lg text-zinc-800 dark:text-zinc-100"
            />
          </Card>
          <Card label="evervault-card" className="md:col-span-2">
            <div className="w-full max-w-md">
              <EvervaultCard text="hover the capsule" />
            </div>
          </Card>
          <Card label="tracing-beam" className="md:col-span-2">
            <TracingBeam className="w-full px-2">
              <div className="flex w-full flex-col gap-4">
                {[
                  ["Beam one", "The beam follows your scroll."],
                  ["Beam two", "It traces between sticky sections."],
                  ["Beam three", "Pairs perfectly with tall content."],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50"
                  >
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{t}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{d}</p>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="inputs" index="04" title="Inputs with built-in motion" />
        <Card label="placeholders-and-vanish-input" className="max-w-2xl">
          <PlaceholdersAndVanishInput
            placeholders={["Search ", "Try a phrase…", "The placeholder vanishes on focus"]}
            onChange={() => {}}
            onSubmit={() => {}}
          />
        </Card>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="beams2" index="05" title="Waves, boxes & spotlights" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card label="wavy-background" className="md:col-span-2">
            <WavyBackground className="w-full rounded-xl py-16">
              <p className="relative z-10 text-2xl font-bold text-white">WavyBackground</p>
              <p className="relative z-10 text-sm text-zinc-300">
                Animated SVG waves behind content.
              </p>
            </WavyBackground>
          </Card>
          <Card label="background-boxes">
            <div className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
              <Boxes className="absolute inset-0" />
              <p className="relative z-10 text-sm font-medium text-zinc-300">
                Boxes — grid dots pattern
              </p>
            </div>
          </Card>
          <Card label="spotlight">
            <div className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
              <Spotlight className="-top-20 left-0" fill="white" />
              <p className="relative z-10 text-sm font-medium text-zinc-200">Spotlight</p>
            </div>
          </Card>
          <Card label="background-gradient" className="md:col-span-2">
            <BackgroundGradient className="rounded-xl p-6">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                BackgroundGradient — animated border glow
              </p>
            </BackgroundGradient>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="text2" index="06" title="More text effects" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card label="cover">
            <p className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
              Outline <Cover>Cover</Cover> underline
            </p>
          </Card>
          <Card label="text-generate-effect">
            <TextGenerateEffect words="Text that generates itself, character by character." />
          </Card>
          <Card label="text-hover-effect">
            <TextHoverEffect text="HOVER" />
          </Card>
          <Card label="squiggly-text">
            <SquigglyText className="text-2xl font-bold text-zinc-900 dark:text-white">
              SquigglyText wobble
            </SquigglyText>
          </Card>
          <Card label="text-reveal-card" className="md:col-span-2">
            <TextRevealCard text="Hover to reveal" revealText="A secret message 👀">
              <TextRevealCardTitle>TextRevealCard</TextRevealCardTitle>
              <TextRevealCardDescription>
                The card&apos;s cyan gradient sweeps in on hover.
              </TextRevealCardDescription>
            </TextRevealCard>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="cards2" index="07" title="Cards, meteors & buttons" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <Card label="meteors">
            <div className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
              <Meteors number={20} className="absolute inset-0" />
              <p className="relative z-10 text-sm font-medium text-zinc-300">Meteors</p>
            </div>
          </Card>
          <Card label="glare-card">
            <GlareCard className="flex h-full min-h-[240px] items-center justify-center rounded-xl">
              <p className="text-sm font-medium text-white">GlareCard</p>
            </GlareCard>
          </Card>
          <Card label="magnetic-button">
            <MagneticButton>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white dark:bg-white dark:text-zinc-900">
                MagneticButton
              </span>
            </MagneticButton>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="interaction" index="08" title="Inputs, docks & modals" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card label="gooey-input">
            <GooeyInput placeholder="Type to search…" />
          </Card>
          <Card label="notch">
            <Notch
              items={[
                {
                  id: "theme",
                  label: "Theme",
                  options: [
                    { id: "light", label: "Light", icon: <IconSun className="h-4 w-4" /> },
                    { id: "dark", label: "Dark", icon: <IconMoon className="h-4 w-4" /> },
                  ],
                },
              ]}
            />
          </Card>
          <Card label="floating-dock" className="md:col-span-2">
            <FloatingDock
              items={[
                { title: "Home", icon: <IconHome className="h-5 w-5" />, href: "#" },
                { title: "Profile", icon: <IconUser className="h-5 w-5" />, href: "#" },
                { title: "Settings", icon: <IconSettings className="h-5 w-5" />, href: "#" },
              ]}
            />
          </Card>
          <Card label="animated-modal" className="md:col-span-2">
            <ModalProvider>
              <Modal>
                <ModalTrigger>
                  <span className="cursor-pointer rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white dark:bg-white dark:text-zinc-900">
                    Open animated modal
                  </span>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <p className="text-center text-2xl text-zinc-900 dark:text-white">
                      Animated Modal
                    </p>
                    <p className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
                      The modal scales and fades, with a fancy backdrop.
                    </p>
                  </ModalContent>
                  <ModalFooter>
                    <button className="rounded-full bg-zinc-900 px-5 py-2 text-sm text-white dark:bg-white dark:text-zinc-900">
                      Close
                    </button>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </ModalProvider>
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="scroll" index="09" title="Scroll & parallax" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6">
          <Card label="sticky-scroll-reveal">
            <StickyScroll
              content={[
                {
                  title: "StickyScroll",
                  description: "Content sticks while you scroll; titles swap.",
                },
                {
                  title: "Second block",
                  description: "The next item rises as the previous fades.",
                },
                {
                  title: "Third block",
                  description: "Great for feature lists or onboarding.",
                },
              ]}
            />
          </Card>
          <Card label="container-scroll-animation">
            <ContainerScroll
              titleComponent={
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">ContainerScroll</p>
              }
            >
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-100 p-8 dark:bg-zinc-800">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  The card scales up as you scroll past.
                </p>
              </div>
            </ContainerScroll>
          </Card>
          <Card label="timeline">
            <Timeline
              data={[
                {
                  title: "2026 · Phase 1",
                  content: <>Vendor registry components into the template.</>,
                },
                { title: "2026 · Phase 2", content: <>Showcase gallery + home hero upgrade.</> },
                {
                  title: "2026 · Phase 3",
                  content: <>Zero-warning toolchain, green CI, auto-deploy.</>,
                },
              ]}
            />
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="hover-scroll" index="10" title="Hover cards, parallax & masking" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6">
          <Card label="card-hover-effect">
            <HoverEffect
              className="w-full"
              items={[
                { title: "HoverEffect", description: "Cards lift & glow on hover.", link: "#" },
                { title: "Second card", description: "The grid is responsive.", link: "#" },
                { title: "Third card", description: "Click to follow the link.", link: "#" },
              ]}
            />
          </Card>
          <Card label="focus-cards">
            <FocusCards
              cards={[
                { title: "FocusCards", src: "/vercel.svg" },
                { title: "Second", src: "/next.svg" },
                { title: "Third", src: "/vercel.svg" },
              ]}
            />
          </Card>
          <Card label="tooltip-card">
            <Tooltip content={<p className="text-xs text-zinc-300">Tooltip on hover</p>}>
              <span className="cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Hover this for a tooltip
              </span>
            </Tooltip>
          </Card>
          <Card label="multi-step-loader">
            <MultiStepLoader
              loading
              loadingStates={[
                { text: "Fetching" },
                { text: "Compiling" },
                { text: "Rendering" },
                { text: "Done" },
              ]}
            />
          </Card>
          <Card label="svg-mask-effect">
            <MaskContainer
              revealText={<p className="text-4xl font-bold text-zinc-300">Revealed!</p>}
              className="h-[16rem]"
            >
              <p className="text-4xl font-bold text-zinc-900 dark:text-white">
                Hover over this masked block
              </p>
            </MaskContainer>
          </Card>
          <Card label="hero-parallax">
            <HeroParallax
              products={[
                { title: "Next", link: "#", thumbnail: "/next.svg" },
                { title: "Vercel", link: "#", thumbnail: "/vercel.svg" },
                { title: "Globe", link: "#", thumbnail: "/globe.svg" },
                { title: "Window", link: "#", thumbnail: "/window.svg" },
                { title: "File", link: "#", thumbnail: "/file.svg" },
              ]}
            />
          </Card>
          <Card label="parallax-scroll">
            <ParallaxScroll
              images={[
                "/next.svg",
                "/vercel.svg",
                "/globe.svg",
                "/window.svg",
                "/file.svg",
                "/next.svg",
              ]}
              className="w-full"
            />
          </Card>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-6">
        <SectionLabel id="advanced" index="11" title="Tabs & gemini" />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6">
          <Card label="animated-tabs">
            <Tabs
              tabs={[
                {
                  title: "Overview",
                  value: "overview",
                  content: <p className="p-4 text-sm">Overview tab</p>,
                },
                {
                  title: "Details",
                  value: "details",
                  content: <p className="p-4 text-sm">Details tab</p>,
                },
                {
                  title: "Settings",
                  value: "settings",
                  content: <p className="p-4 text-sm">Settings tab</p>,
                },
              ]}
            />
          </Card>
          <GeminiDemo />
        </div>
      </section>
    </div>
  );
}

function GeminiDemo() {
  const { scrollYProgress } = useScroll();
  const pathLengths: MotionValue<number>[] = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  ];
  return (
    <Card label="google-gemini-effect" className="overflow-visible">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Google Gemini Effect"
        description="Scroll — the SVG paths draw as you scroll."
        className="w-full"
      />
    </Card>
  );
}
