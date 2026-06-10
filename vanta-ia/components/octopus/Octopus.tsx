"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";

export type OctoPose = "idle" | "wave" | "headset" | "chart" | "search";

interface OctopusProps {
  size?: number;
  pose?: OctoPose;
  /** Sigue el cursor con los ojos + reacciona al hover + burbujas al click. */
  interactive?: boolean;
  /** Halo violeta detrás del pulpo. */
  glow?: boolean;
  /** Pista sutil "tocame" (sólo donde es protagonista). */
  hint?: boolean;
  /** Decorativo: oculto a lectores de pantalla y sin foco de teclado (sigue clickeable con mouse). */
  decorative?: boolean;
  className?: string;
}

interface Bubble {
  id: number;
  left: number;
  size: number;
  drift: number;
  duration: number;
}

/* ── Tentáculos (stroke redondeado, simétrico) ───────────────────────── */
const TENTACLES: { d: string; sway: string; delay: string }[] = [
  // Izquierda (de afuera hacia adentro)
  { d: "M60 104 C 42 120, 30 138, 35 148 C 39 156, 47 152, 45 144",  sway: "5deg",  delay: "-0.2s" },
  { d: "M74 112 C 60 134, 50 150, 51 159 C 52 167, 60 165, 60 157",  sway: "4deg",  delay: "-1.1s" },
  { d: "M92 116 C 84 140, 80 158, 85 167 C 89 173, 96 170, 93 162",  sway: "3deg",  delay: "-1.8s" },
  // Derecha (espejo)
  { d: "M108 116 C 116 140, 120 158, 115 167 C 111 173, 104 170, 107 162", sway: "-3deg", delay: "-0.7s" },
  { d: "M126 112 C 140 134, 150 150, 149 159 C 148 167, 140 165, 140 157", sway: "-4deg", delay: "-1.4s" },
  { d: "M140 104 C 158 120, 170 138, 165 148 C 161 156, 153 152, 155 144", sway: "-5deg", delay: "-0.4s" },
];

/* ── Figura SVG del pulpo ─────────────────────────────────────────────── */
function OctopusFigure({
  pose,
  pupilX,
  pupilY,
  hovered,
}: {
  pose: OctoPose;
  pupilX: MotionValue<number>;
  pupilY: MotionValue<number>;
  hovered: boolean;
}) {
  const smile = hovered
    ? "M84 102 Q100 120 116 102"   // sonrisa amplia
    : "M88 104 Q100 113 112 104";  // sonrisa suave

  return (
    <svg
      viewBox="0 0 200 200"
      className="block h-auto w-full overflow-visible"
      role="img"
      aria-label="Pulpo de OctoFlow"
    >
      <defs>
        <linearGradient id="octoBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="55%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <radialGradient id="octoCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
        </radialGradient>
        <filter id="octoShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2E1065" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#octoShadow)">
        {/* Tentáculos (detrás del cuerpo) */}
        {TENTACLES.map((t, i) => {
          const isWaving = pose === "wave" && i === 5;
          return (
            <path
              key={i}
              d={t.d}
              fill="none"
              stroke="url(#octoBody)"
              strokeWidth={15}
              strokeLinecap="round"
              style={{
                transformBox: "fill-box",
                transformOrigin: "50% 8%",
                "--sway": isWaving ? "-16deg" : t.sway,
                animation: `tentacle-sway ${isWaving ? "1.1s" : "4s"} ease-in-out infinite`,
                animationDelay: t.delay,
              } as React.CSSProperties}
            />
          );
        })}

        {/* Cuerpo / cabeza */}
        <path
          d="M100 26 C64 26 40 52 40 88 C40 108 48 120 60 124 L140 124 C152 120 160 108 160 88 C160 52 136 26 100 26 Z"
          fill="url(#octoBody)"
        />

        {/* Brillo superior */}
        <ellipse cx="84" cy="54" rx="22" ry="14" fill="#FFFFFF" opacity="0.14" />

        {/* Cachetes */}
        <circle cx="66" cy="96" r="11" fill="url(#octoCheek)" />
        <circle cx="134" cy="96" r="11" fill="url(#octoCheek)" />

        {/* Ojos (blanco) — parpadean */}
        <g
          className="octo-eye"
          style={{ transformBox: "fill-box", transformOrigin: "center", animation: "octo-blink 6s ease-in-out infinite" }}
        >
          <circle cx="82" cy="84" r="12" fill="#FFFFFF" />
          <circle cx="118" cy="84" r="12" fill="#FFFFFF" />
          {/* Pupilas — siguen el cursor */}
          <motion.g style={{ x: pupilX, y: pupilY }}>
            <circle cx="82" cy="85" r="5.4" fill="#1B1130" />
            <circle cx="118" cy="85" r="5.4" fill="#1B1130" />
            <circle cx="84" cy="83" r="1.8" fill="#FFFFFF" />
            <circle cx="120" cy="83" r="1.8" fill="#FFFFFF" />
          </motion.g>
        </g>

        {/* Boca */}
        <motion.path
          d={smile}
          fill="none"
          stroke="#3B1E70"
          strokeWidth={3}
          strokeLinecap="round"
          initial={false}
          animate={{ d: smile }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        />

        {/* ── Accesorios por pose ──────────────────────────────────── */}
        {pose === "headset" && (
          <g stroke="#1B1130" strokeWidth={4} fill="none" strokeLinecap="round">
            <path d="M58 78 A 44 44 0 0 1 142 78" />
            <rect x="50" y="76" width="10" height="16" rx="4" fill="#1B1130" stroke="none" />
            <path d="M58 92 Q70 104 88 102" />
            <circle cx="90" cy="102" r="4" fill="#7C3AED" stroke="none" />
          </g>
        )}
        {pose === "chart" && (
          <g transform="translate(126 86) rotate(8)">
            <rect x="0" y="0" width="40" height="32" rx="6" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="2" />
            <rect x="7" y="18" width="6" height="9" rx="2" fill="#A78BFA" />
            <rect x="17" y="12" width="6" height="15" rx="2" fill="#7C3AED" />
            <rect x="27" y="7" width="6" height="20" rx="2" fill="#6D28D9" />
          </g>
        )}
        {pose === "search" && (
          <g transform="translate(128 92) rotate(12)" stroke="#1B1130" strokeWidth="4" fill="none">
            <circle cx="14" cy="14" r="13" fill="#FFFFFF" />
            <line x1="24" y1="24" x2="36" y2="36" strokeLinecap="round" />
          </g>
        )}
      </g>
    </svg>
  );
}

/* ── Pulpo (wrapper interactivo) ─────────────────────────────────────── */
export default function Octopus({
  size = 280,
  pose = "idle",
  interactive = false,
  glow = false,
  hint = false,
  decorative = false,
  className = "",
}: OctopusProps) {
  const focusable = interactive && !decorative;
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const idRef = useRef(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pupilX = useSpring(rawX, { stiffness: 220, damping: 22 });
  const pupilY = useSpring(rawY, { stiffness: 220, damping: 22 });

  /* Ojos siguen el cursor (throttle por requestAnimationFrame) */
  useEffect(() => {
    if (!interactive || reduce) return;
    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    const apply = () => {
      frame = 0;
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.42;
      const dx = lastX - cx;
      const dy = lastY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const max = 4.5;
      rawX.set((dx / dist) * Math.min(max, dist / 18));
      rawY.set((dy / dist) * Math.min(max, dist / 18));
    };
    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [interactive, reduce, rawX, rawY]);

  /* Mini-juego: burbujas al clickear el pulpo (con tope anti-spam) */
  const spawnBubbles = useCallback(() => {
    if (!interactive) return;
    setBubbles((b) => {
      if (b.length > 22) return b; // cap: evita acumular nodos con clicks rápidos
      const count = 5 + Math.floor(Math.random() * 3);
      const next: Bubble[] = Array.from({ length: count }, () => {
        idRef.current += 1;
        return {
          id: idRef.current,
          left: 30 + Math.random() * 40,
          size: 14 + Math.random() * 22,
          drift: -30 + Math.random() * 60,
          duration: 2.4 + Math.random() * 1.6,
        };
      });
      return [...b, ...next];
    });
  }, [interactive]);

  // Única fuente de verdad para sacar una burbuja (click/hover o fin de animación)
  const removeBubble = useCallback((id: number) => {
    setBubbles((b) => b.filter((x) => x.id !== id));
  }, []);

  const FloatClass = reduce ? "" : "animate-float-slow";

  return (
    <div
      ref={wrapRef}
      aria-hidden={decorative || undefined}
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Halo */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: size * 1.25,
            height: size * 1.25,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 65%)",
            filter: "blur(8px)",
          }}
        />
      )}

      {/* Burbujas del mini-juego */}
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.button
            key={b.id}
            type="button"
            aria-label="Reventar burbuja"
            onMouseEnter={() => removeBubble(b.id)}
            onClick={() => removeBubble(b.id)}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 0.95, 0.95, 0],
              y: -size * 0.55,
              x: b.drift,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: reduce ? 0.2 : b.duration, ease: "easeOut" }}
            onAnimationComplete={() => removeBubble(b.id)}
            className="absolute z-20 rounded-full"
            style={{
              left: `${b.left}%`,
              bottom: "32%",
              width: b.size,
              height: b.size,
              background:
                "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), rgba(167,139,250,0.55) 45%, rgba(124,58,237,0.35) 100%)",
              border: "1px solid rgba(196,181,253,0.6)",
              cursor: "pointer",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Pulpo */}
      <motion.div
        className={`relative z-10 h-full w-full ${FloatClass}`}
        animate={interactive && !reduce ? { scale: hovered ? 1.05 : 1 } : undefined}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        onHoverStart={() => interactive && setHovered(true)}
        onHoverEnd={() => interactive && setHovered(false)}
        onClick={interactive ? spawnBubbles : undefined}
        style={{ cursor: interactive ? "pointer" : "default" }}
        role={focusable ? "button" : undefined}
        aria-label={focusable ? "Pulpo de OctoFlow: tocá para soltar burbujas" : undefined}
        tabIndex={focusable ? 0 : undefined}
        onKeyDown={
          focusable
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  spawnBubbles();
                }
              }
            : undefined
        }
      >
        <OctopusFigure pose={pose} pupilX={pupilX} pupilY={pupilY} hovered={hovered} />
      </motion.div>

      {/* Pista sutil */}
      {hint && interactive && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-[var(--on-dark-muted)]"
        >
          🫧 tocame
        </motion.span>
      )}
    </div>
  );
}
