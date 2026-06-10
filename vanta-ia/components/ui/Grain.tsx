interface GrainProps {
  /** Variante shiny (blend soft-light, un poco más visible) para fondos oscuros. */
  shiny?: boolean;
  className?: string;
}

/**
 * Capa de grain/ruido reutilizable. Decorativa: pointer-events none + aria-hidden.
 * Usar SÓLO sobre gradientes/blobs, nunca sobre texto plano.
 */
export default function Grain({ shiny = false, className = "" }: GrainProps) {
  return (
    <div
      aria-hidden="true"
      className={`grain ${shiny ? "grain-shiny" : ""} ${className}`}
    />
  );
}
