"use client";

import { motion } from "framer-motion";
import { MessageSquare, RefreshCw, BarChart2, Zap, type LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Octopus from "@/components/octopus/Octopus";
import { soluciones } from "@/content/copy";
import { fadeUp, staggerSlow, scaleIn, VIEWPORT } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = { MessageSquare, RefreshCw, BarChart2, Zap };
const ACCENTS = ["--violet-600", "--violet-500", "--violet-700", "--violet-400"];

type Card = (typeof soluciones.cards)[number];

function SolucionCard({ card, accent }: { card: Card; accent: string }) {
  const Icon = iconMap[card.icon];
  const accentVar = `var(${accent})`;

  return (
    <motion.a
      href={`#${card.id}`}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass-card group relative flex flex-col gap-3 rounded-[var(--radius-lg)] p-6"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)]"
          style={{
            color: accentVar,
            background: `color-mix(in srgb, ${accentVar} 14%, transparent)`,
            border: `1px solid color-mix(in srgb, ${accentVar} 28%, transparent)`,
          }}
        >
          <Icon size={20} />
        </div>
        <span className="font-mono text-xs text-[var(--slate)]">{card.number}</span>
      </div>

      <h3 className="text-[15px] font-semibold leading-snug text-[var(--ink)]">
        {card.title}
      </h3>
      <p className="text-[13px] leading-relaxed text-[var(--slate)]">{card.description}</p>

      <div className="mt-1 flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            style={{
              color: accentVar,
              background: `color-mix(in srgb, ${accentVar} 9%, transparent)`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Soluciones() {
  const cards = soluciones.cards;

  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-[var(--violet-50)] px-6 py-24"
      style={{ borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerSlow}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel center>{soluciones.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-light leading-tight tracking-tight text-[var(--ink)] md:text-[40px]"
          >
            {soluciones.h2.prefix}{" "}
            <strong className="gradient-text font-semibold">{soluciones.h2.strong}</strong>{" "}
            {soluciones.h2.suffix}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-[14px] text-[var(--slate)]">
            {soluciones.intro}
          </motion.p>
        </motion.div>

        {/* Orbital */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerSlow}
          className="relative mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {/* Columna izquierda */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <SolucionCard card={cards[0]} accent={ACCENTS[0]} />
            <SolucionCard card={cards[1]} accent={ACCENTS[1]} />
          </div>

          {/* Centro — pulpo + anillos */}
          <motion.div
            variants={scaleIn}
            className="order-1 flex min-h-[280px] items-center justify-center lg:order-2"
          >
            <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center">
              {/* Anillos concéntricos */}
              <div aria-hidden className="absolute aspect-square w-[96%] rounded-full border border-[var(--border)]" />
              <div aria-hidden className="absolute aspect-square w-[72%] rounded-full border border-[var(--border)]" />
              <div aria-hidden className="absolute aspect-square w-[48%] rounded-full border border-[var(--border)]" />
              <div
                aria-hidden
                className="animate-spin-slow absolute aspect-square w-[84%] rounded-full border border-dashed border-[var(--border-strong)]"
              />
              {/* Glow */}
              <div
                aria-hidden
                className="absolute aspect-square w-[60%] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)" }}
              />
              <Octopus size={210} interactive pose="idle" className="relative z-10 !h-auto !w-[58%]" />
            </div>
          </motion.div>

          {/* Columna derecha */}
          <div className="order-3 flex flex-col gap-6 lg:order-3">
            <SolucionCard card={cards[2]} accent={ACCENTS[2]} />
            <SolucionCard card={cards[3]} accent={ACCENTS[3]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
