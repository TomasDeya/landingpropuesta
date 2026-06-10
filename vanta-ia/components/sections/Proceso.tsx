"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { proceso } from "@/content/copy";
import { fadeUp, stagger, EASE, VIEWPORT } from "@/lib/motion";

export default function Proceso() {
  return (
    <section id="proceso" className="bg-[var(--cloud)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionLabel>{proceso.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-xl text-3xl font-light leading-tight tracking-tight text-[var(--ink)] md:text-[36px]"
          >
            {proceso.h2.prefix}{" "}
            <strong className="gradient-text font-semibold">{proceso.h2.strong}</strong>{" "}
            {proceso.h2.suffix}
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Línea vertical (mobile) */}
          <motion.div
            className="timeline-line absolute left-[18px] top-3 w-px md:hidden"
            style={{ height: "calc(100% - 1.5rem)", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
          />
          {/* Línea horizontal (desktop) */}
          <motion.div
            className="timeline-line-h absolute left-0 right-0 top-[18px] hidden h-px md:block"
            style={{ transformOrigin: "left" }}
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
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-semibold text-[var(--brand-accent)]"
                  style={{
                    border: "1px solid var(--border-strong)",
                    boxShadow: "0 0 14px rgba(var(--brand-accent-rgb),0.18)",
                  }}
                >
                  {step.number}
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-1.5 md:items-center">
                  <span className="inline-block w-fit rounded-full bg-[var(--violet-100)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--brand)]">
                    {step.duration}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[var(--ink)]">{step.title}</h3>
                  <p className="max-w-[22ch] text-[13px] leading-relaxed text-[var(--slate)]">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-2xl text-[12px] leading-relaxed text-[var(--slate)]"
        >
          <span className="font-semibold text-[var(--ink)]">Nota:</span> {proceso.note}
        </motion.p>
      </div>
    </section>
  );
}
