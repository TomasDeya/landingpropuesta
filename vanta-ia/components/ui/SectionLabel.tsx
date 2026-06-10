interface SectionLabelProps {
  children: string;
  className?: string;
  center?: boolean;
  /** "light" = sobre fondo violeta oscuro. */
  tone?: "dark" | "light";
}

export default function SectionLabel({
  children,
  className = "",
  center = false,
  tone = "dark",
}: SectionLabelProps) {
  const color = tone === "light" ? "text-[var(--violet-300)]" : "text-[var(--brand-accent)]";
  return (
    <span
      className={`inline-block text-xs font-medium uppercase tracking-widest ${color} mb-4 ${
        center ? "w-full text-center" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
