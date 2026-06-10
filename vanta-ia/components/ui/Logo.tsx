import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: LogoProps) {
  const iconSize = size === "md" ? 34 : 26;
  const textSize = size === "md" ? "text-lg" : "text-sm";

  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        src="/logo.png"
        alt="Octoflow logo"
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        priority
      />
      <span className={`${textSize} font-semibold text-[var(--ink)] tracking-tight`}>
        Octoflow
      </span>
    </div>
  );
}
