import Grain from "@/components/ui/Grain";

interface AuroraProps {
  /** Muestra el barrido diagonal (sheen) del hero. */
  sheen?: boolean;
  className?: string;
}

/**
 * Fondo violeta profundo con "aurora" (mesh de blobs animados lento) + grain shiny.
 * Decorativo y GPU-friendly: sólo anima transform/opacity vía CSS.
 * Pensado para ir dentro de un contenedor `relative overflow-hidden`.
 */
export default function Aurora({ sheen = false, className = "" }: AuroraProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Base violeta profunda */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, var(--hero-bg-1) 0%, var(--hero-bg-2) 52%, var(--hero-bg-3) 100%)",
        }}
      />

      {/* Blob 1 — violeta eléctrico, arriba-izquierda */}
      <div
        className="aurora-blob-1 absolute -top-1/4 -left-[10%] h-[70vh] w-[70vh]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.55) 0%, transparent 62%)",
        }}
      />
      {/* Blob 2 — lila, abajo-derecha */}
      <div
        className="aurora-blob-2 absolute -bottom-1/4 -right-[8%] h-[75vh] w-[75vh]"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.45) 0%, transparent 62%)",
        }}
      />
      {/* Blob 3 — violeta medio, centro */}
      <div
        className="aurora-blob-3 absolute left-1/3 top-1/3 h-[55vh] w-[55vh]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.40) 0%, transparent 65%)",
        }}
      />

      {/* Sheen diagonal opcional (sólo hero) */}
      {sheen && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="hero-sheen absolute -inset-y-1/2 left-0 w-1/3"
            style={{
              background:
                "linear-gradient(105deg, transparent, rgba(237,233,254,0.18), transparent)",
            }}
          />
        </div>
      )}

      {/* Grain shiny encima de los gradientes */}
      <Grain shiny />
    </div>
  );
}
