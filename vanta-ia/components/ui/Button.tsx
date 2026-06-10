import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost" | "contrast";
  className?: string;
  children: React.ReactNode;
  href?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[var(--brand-accent)] text-white hover:bg-[var(--brand)] hover:scale-[1.02] active:scale-[0.99] shadow-[0_10px_30px_-12px_rgba(var(--brand-accent-rgb),0.6)]",
    ghost:
      "bg-transparent text-[var(--brand-accent)] border border-[var(--border-strong)] hover:border-[var(--brand-accent)] hover:bg-[rgba(var(--brand-accent-rgb),0.06)]",
    contrast:
      "bg-white text-[var(--brand)] hover:bg-[var(--violet-50)] hover:scale-[1.02] active:scale-[0.99] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.45)]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
