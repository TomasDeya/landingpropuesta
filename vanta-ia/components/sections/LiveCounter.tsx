"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { liveCounter } from "@/content/copy";

const STORAGE_KEY = "octoflow_msg_count";

export default function LiveCounter() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState<number>(liveCounter.start);

  useEffect(() => {
    // Arranca desde el mayor entre el base y lo guardado (crece entre visitas, nunca baja).
    let current: number = liveCounter.start;
    try {
      const stored = Number(localStorage.getItem(STORAGE_KEY));
      if (Number.isFinite(stored) && stored > current) current = stored;
    } catch {
      /* localStorage no disponible */
    }

    // Set inicial asíncrono (no synchronous setState dentro del effect).
    const raf = requestAnimationFrame(() => setCount(current));

    if (reduce) return () => cancelAnimationFrame(raf);

    let timer: ReturnType<typeof setTimeout>;
    let ticks = 0;
    const tick = () => {
      current += Math.random() < 0.18 ? 2 : 1; // a veces de a 2 (ráfaga)
      ticks += 1;
      setCount(current);
      if (ticks % 8 === 0) {
        try {
          localStorage.setItem(STORAGE_KEY, String(current));
        } catch {
          /* noop */
        }
      }
      timer = setTimeout(tick, 360 + Math.random() * 900);
    };
    timer = setTimeout(tick, 600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [reduce]);

  const formatted = count.toLocaleString("es-AR");

  return (
    <section className="relative overflow-hidden bg-[var(--violet-50)] px-6 py-24">
      {/* Glow sutil detrás del número */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.16), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {/* Indicador en vivo */}
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-accent)] opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)]" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
            {liveCounter.label}
          </span>
        </span>

        {/* Número */}
        <span className="gradient-text text-[clamp(3rem,11vw,6.5rem)] font-bold leading-none tracking-tight tabular-nums">
          {formatted}
        </span>

        {/* Caption */}
        <p className="max-w-md text-[15px] text-[var(--slate)]">{liveCounter.caption}</p>
      </div>
    </section>
  );
}
