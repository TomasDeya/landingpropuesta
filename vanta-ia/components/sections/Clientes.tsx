"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import LogoPill from "@/components/ui/LogoPill";
import { clientes } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

const row1 = [...clientes.items, ...clientes.items];
const row2 = [...clientes.items, ...clientes.items];

export default function Clientes() {
  return (
    <section id="clientes" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{clientes.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-[var(--ink)] mb-3 max-w-xl"
          >
            {clientes.h2.prefix}{" "}
            <strong className="font-semibold">{clientes.h2.strong}</strong>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[14px] mb-12 max-w-md text-[var(--slate)]"
          >
            {clientes.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* ── Marquee ─────────────────────────────────────────────────── */}
      <div className="marquee-track relative overflow-hidden">
        {/* Fades laterales */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
          style={{
            width: "calc((100vw - min(100vw, 72rem)) / 2 + 1.5rem + 3rem)",
            background: "linear-gradient(to right, var(--white) 65%, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
          style={{
            width: "calc((100vw - min(100vw, 72rem)) / 2 + 1.5rem + 3rem)",
            background: "linear-gradient(to left, var(--white) 65%, transparent)",
          }}
        />

        {/* Fila 1 */}
        <div className="flex gap-3 mb-3">
          <div className="flex gap-3 animate-marquee-left">
            {row1.map((item, i) => (
              <LogoPill
                key={`r1-${i}`}
                initials={item.initials}
                name={item.name}
                industry={item.industry}
                color={item.color}
                logo={item.logo}
              />
            ))}
          </div>
        </div>

        {/* Fila 2 */}
        <div className="flex gap-3">
          <div className="flex gap-3 animate-marquee-right">
            {row2.map((item, i) => (
              <LogoPill
                key={`r2-${i}`}
                initials={item.initials}
                name={item.name}
                industry={item.industry}
                color={item.color}
                logo={item.logo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-10 justify-center md:justify-start"
        >
          {clientes.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center md:items-start gap-0.5">
              <span className="text-2xl font-semibold text-[var(--ink)]">{stat.value}</span>
              <span className="text-[13px] text-[var(--slate)]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
