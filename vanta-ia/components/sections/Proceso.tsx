"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Aurora from "@/components/ui/Aurora";
import { proceso } from "@/content/copy";
import { fadeUp, stagger, EASE, VIEWPORT } from "@/lib/motion";

const LINE_H = "linear-gradient(to right, var(--violet-400), rgba(167,139,250,0.06))";
const LINE_V = "linear-gradient(to bottom, var(--violet-400), rgba(167,139,250,0.06))";

export default function Proceso() {
  return (
    <section id="proceso" className="relative overflow-hidden px-6 py-24">
      <Aurora />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div variants={fadeUp}>
              <SectionLabel center tone="light">{proceso.label}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-light leading-tight tracking-tight text-[var(--on-dark)] md:text-[36px]"
            >
              {proceso.h2.prefix}{" "}
              <strong className="gradient-text-light font-semibold">{proceso.h2.strong}</strong>{" "}
              {proceso.h2.suffix}
            </motion.h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Línea vertical (mobile) */}
          <motion.div
            className="absolute left-[18px] top-3 w-px md:hidden"
            style={{ height: "calc(100% - 1.5rem)", transformOrigin: "top", background: LINE_V }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
          />
          {/* Línea horizontal (desktop) */}
          <motion.div
            className="absolute left-0 right-0 top-[18px] hidden h-px md:block"
            style={{ transformOrigin: "left", background: LINE_H }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
          />

          {/* Pasos */}
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger}
            className="relative flex flex-col gap-9 md:flex-row md:gap-4"
          >
            {proceso.steps.map((step) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-1 flex-row items-start gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
              >
                {/* Nodo */}
                <div
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-semibold text-[var(--brand)]"
                  style={{
                    border: "1px solid rgba(var(--violet-300-rgb),0.6)",
                    boxShadow: "0 0 16px rgba(139,92,246,0.45)",
                  }}
                >
                  {step.number}
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-1.5 md:items-center">
                  <h3 className="text-[15px] font-semibold text-[var(--on-dark)]">{step.title}</h3>
                  <p className="max-w-[22ch] text-[13px] leading-relaxed text-[var(--on-dark-muted)]">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
