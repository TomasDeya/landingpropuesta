import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md";
  /** "dark" = texto oscuro (sobre fondo claro). "light" = texto claro (sobre violeta). */
  tone?: "dark" | "light";
}

export default function Logo({ size = "md", tone = "dark" }: LogoProps) {
  const iconSize = size === "md" ? 34 : 26;
  const textSize = size === "md" ? "text-lg" : "text-sm";
  const textColor = tone === "light" ? "text-[var(--on-dark)]" : "text-[var(--ink)]";

  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        src="/logo.png"
        alt="OctoFlow"
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        priority
      />
      <span className={`${textSize} font-semibold tracking-tight ${textColor}`}>
        Octo<span className="text-[var(--brand-accent)]">Flow</span>
      </span>
    </div>
  );
}
