import Logo from "@/components/ui/Logo";
import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Marca */}
          <div className="flex flex-col gap-3">
            <Logo size="sm" />
            <p className="max-w-[240px] text-sm leading-relaxed text-[var(--slate)]">
              {footer.tagline}
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--slate)]">
              {footer.navLabel}
            </span>
            <ul className="flex flex-col gap-2.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--slate)] transition-colors duration-200 hover:text-[var(--brand-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--slate)]">
              {footer.socialsLabel}
            </span>
            <ul className="flex flex-col gap-2.5">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--slate)] transition-colors duration-200 hover:text-[var(--brand-accent)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-4 text-xs text-[var(--slate)] opacity-60">{footer.copy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
