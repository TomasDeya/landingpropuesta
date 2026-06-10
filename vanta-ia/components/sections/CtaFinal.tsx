"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Aurora from "@/components/ui/Aurora";
import Octopus from "@/components/octopus/Octopus";
import { ctaFinal, WA_LINK } from "@/content/copy";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative overflow-hidden px-6 py-28">
      {/* Fondo violeta profundo + aurora + grain */}
      <Aurora />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          {/* Pulpo saludando */}
          <motion.div variants={fadeUp}>
            <Octopus size={150} interactive pose="wave" glow className="!h-[150px] !w-[150px]" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionLabel center tone="light">{ctaFinal.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[30px] font-light leading-tight tracking-tight text-[var(--on-dark)] md:text-[44px]"
          >
            {ctaFinal.h2.prefix}{" "}
            <strong className="gradient-text-light font-semibold">{ctaFinal.h2.strong}</strong>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-[14px] leading-relaxed text-[var(--on-dark-muted)]"
          >
            {ctaFinal.subtitle}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button variant="contrast" className="btn-shimmer px-8 py-3 text-base" href={WA_LINK}>
              {ctaFinal.ctaPrimary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
