"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Aurora from "@/components/ui/Aurora";
import ClientStrip from "@/components/sections/ClientStrip";
import Octopus from "@/components/octopus/Octopus";
import { hero, WA_LINK } from "@/content/copy";

/* Reveal por palabras vía CSS (no depende de hidratación JS) */
function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="reveal-rise" style={{ animationDelay: `${delay + i * 0.09}s` }}>
            {word}
          </span>
          {i < words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const octoYRaw = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const octoScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const textYRaw = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const octoY = reduce ? 0 : octoYRaw;
  const octoScale = reduce ? 1 : octoScaleRaw;
  const textY = reduce ? 0 : textYRaw;

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Fondo aurora violeta + grain */}
      <Aurora sheen />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% 38%, transparent 30%, rgba(26,11,51,0.65) 100%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span
            className="reveal-up shimmer-badge shimmer-badge-dark animate-float inline-block rounded-full px-4 py-1.5 text-[13px] font-medium text-[var(--violet-200)]"
            style={{ animationDelay: "0.05s" }}
          >
            {hero.badge}
          </span>
        </div>

        {/* Headline gigante + pulpo debajo */}
        <motion.div style={{ y: textY }} className="relative mt-6 text-center">
          {/* h1 accesible con el texto completo (el pulpo es decorativo) */}
          <h1 className="sr-only">{hero.h1Line1} {hero.h1Line2}</h1>

          <div
            aria-hidden="true"
            className="font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--on-dark)]"
          >
            <span className="block text-[clamp(1.85rem,8.5vw,7rem)]">
              <SplitWords text={hero.h1Line1} delay={0.15} />
            </span>
            <span className="block text-[clamp(1.85rem,8.5vw,7rem)]">
              <span className="inline-block overflow-hidden align-bottom">
                <span className="reveal-rise gradient-text-light" style={{ animationDelay: "0.4s" }}>
                  {hero.h1Line2}
                </span>
              </span>
            </span>
          </div>

          {/* Pulpo — debajo del headline */}
          <motion.div
            style={{ y: octoY, scale: octoScale }}
            className="mx-auto mt-5 w-[clamp(160px,26vw,250px)]"
          >
            <Octopus size={250} interactive decorative glow pose="idle" className="!h-auto !w-full" />
          </motion.div>
        </motion.div>

        {/* Subtítulo */}
        <p
          className="reveal-up mx-auto mt-7 max-w-xl text-center text-[15px] leading-relaxed text-[var(--on-dark-muted)]"
          style={{ animationDelay: "0.7s" }}
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="reveal-up mt-8 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.85s" }}
        >
          <Button variant="contrast" className="btn-shimmer px-7 py-3 text-base" href={WA_LINK}>
            {hero.ctaPrimary}
          </Button>
          <Button
            variant="ghost"
            className="border-[rgba(var(--violet-300-rgb),0.4)] px-7 py-3 text-base text-[var(--violet-100)] hover:border-[var(--violet-200)] hover:bg-[rgba(var(--violet-300-rgb),0.1)]"
            href="#soluciones"
          >
            {hero.ctaSecondary}
          </Button>
        </div>

        {/* Empresas que confían — tiras de logos en movimiento */}
        <div
          className="reveal-up mx-auto mt-14 max-w-5xl border-t border-[rgba(var(--violet-300-rgb),0.18)] pt-8"
          style={{ animationDelay: "1s" }}
        >
          <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-widest text-[var(--violet-300)]">
            Confían en nosotros
          </p>
          <ClientStrip />
        </div>
      </div>
    </section>
  );
}
