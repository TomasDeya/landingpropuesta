"use client";

import { motion } from "framer-motion";
import { Clock, BarChart2, RefreshCw, TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { problema } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

const iconMap = {
  Clock,
  BarChart2,
  RefreshCw,
  TrendingUp,
} as const;

type IconKey = keyof typeof iconMap;

export default function Problema() {
  return (
    <section className="bg-[var(--violet-50)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.div variants={fadeUp}>
              <SectionLabel center>{problema.label}</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-[var(--ink)]"
            >
              {problema.h2.prefix}{" "}
              <strong className="font-semibold">{problema.h2.strong}</strong>{" "}
              {problema.h2.suffix}
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {problema.cards.map((card) => {
              const Icon = iconMap[card.icon as IconKey];
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] text-[var(--brand-accent)]"
                    style={{
                      background: "color-mix(in srgb, var(--brand-accent) 12%, transparent)",
                      border:     "1px solid color-mix(in srgb, var(--brand-accent) 24%, transparent)",
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[19px] font-semibold leading-snug text-[var(--ink)]">{card.title}</h3>
                    <p className="text-[14px] leading-relaxed text-[var(--slate)]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
