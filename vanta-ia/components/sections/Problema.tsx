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
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {problema.cards.map((card) => {
              const Icon = iconMap[card.icon as IconKey];
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="flex flex-col gap-4 p-6 rounded-[var(--radius-md)] bg-white border border-[var(--border)]"
                >
                  <div
                    className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0 text-[var(--brand-accent)]"
                    style={{
                      background: "color-mix(in srgb, var(--brand-accent) 8%, transparent)",
                      border:     "1px solid color-mix(in srgb, var(--brand-accent) 18%, transparent)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[13px] font-semibold text-[var(--ink)]">{card.title}</h3>
                    <p className="text-[12px] leading-relaxed text-[var(--slate)]">
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
