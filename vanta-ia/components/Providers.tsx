"use client";

import { MotionConfig } from "framer-motion";

/**
 * Hace que TODAS las animaciones de Framer Motion respeten
 * prefers-reduced-motion del sistema (además del guard CSS en globals.css).
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
