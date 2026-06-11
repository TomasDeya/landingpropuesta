"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Octopus, { type OctoPose } from "@/components/octopus/Octopus";
import { detalle } from "@/content/copy";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

type Item = (typeof detalle.items)[number];
type Stat = {
  to?: number;
  suffix?: string;
  metric?: string;
  text: string;
  source: string;
};

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-5">
      <div className="flex items-baseline gap-2">
        {typeof stat.to === "number" ? (
          <AnimatedCounter
            to={stat.to}
            suffix={stat.suffix}
            className="gradient-text text-4xl font-bold"
          />
        ) : (
          <span className="gradient-text text-4xl font-bold">{stat.metric}</span>
        )}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink)]">“{stat.text}”</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[var(--slate)]">
        {stat.source}
      </p>
    </div>
  );
}

function DetalleRow({ item, index }: { item: Item; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      id={item.id}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger}
      className="grid scroll-mt-24 grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-14"
    >
      {/* Texto */}
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold tracking-tight text-[var(--ink)] md:text-[28px]"
        >
          {item.title}
        </motion.h3>

        <motion.div variants={fadeUp} className="mt-5">
          <StatBlock stat={item.stat} />
        </motion.div>

        <motion.div variants={stagger} className="mt-6 flex flex-col gap-3">
          {item.benefits.map((b) => (
            <motion.div
              key={b.key}
              variants={fadeUp}
              className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-3.5"
            >
              <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--brand-accent)]">
                  {b.key}
                </span>
                <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--slate)]">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Visual — pulpo con pose */}
      <motion.div
        variants={fadeUp}
        className={`flex justify-center ${reversed ? "md:order-1" : "md:order-2"}`}
      >
        <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center overflow-hidden rounded-[var(--radius-hero)] border border-[var(--border)]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 45%, var(--violet-100), var(--violet-50) 70%)" }}
          />
          <div aria-hidden className="absolute aspect-square w-[78%] rounded-full border border-[var(--border)]" />
          <div aria-hidden className="absolute aspect-square w-[52%] rounded-full border border-[var(--border)]" />
          <Octopus size={210} pose={item.pose as OctoPose} className="relative z-10 !h-auto !w-[62%]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SolucionesDetalle() {
  return (
    <section className="bg-[var(--violet-50)] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionLabel>{detalle.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-xl text-3xl font-light leading-tight tracking-tight text-[var(--ink)] md:text-[36px]"
          >
            {detalle.h2.prefix}{" "}
            <strong className="font-semibold">{detalle.h2.strong}</strong>
          </motion.h2>
        </motion.div>

        <div className="mt-8 divide-y divide-[var(--border)]">
          {detalle.items.map((item, i) => (
            <DetalleRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
