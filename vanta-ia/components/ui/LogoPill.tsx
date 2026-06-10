import Image from "next/image";

interface LogoPillProps {
  initials: string;
  name:     string;
  industry: string;
  color:    string;
  logo?:    string;
}

export default function LogoPill({ initials, name, industry, color, logo }: LogoPillProps) {
  return (
    <div
      className="
        group flex items-center gap-3 px-4 py-2.5 rounded-[100px] shrink-0
        bg-[var(--cloud)] border border-[var(--border)]
        hover:border-[var(--border-strong)] hover:bg-[var(--violet-50)]
        transition-all duration-200 cursor-default select-none
      "
    >
      {/* Logo o iniciales */}
      {logo ? (
        <div className="w-12 h-8 rounded-[6px] overflow-hidden shrink-0 flex items-center justify-center bg-white p-1">
          <Image
            src={logo}
            alt={name}
            width={48}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div
          className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[11px] font-semibold shrink-0"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {initials}
        </div>
      )}

      {/* Texto */}
      <div className="flex flex-col leading-tight">
        <span className="text-[13px] font-medium text-[var(--ink)]">
          {name}
        </span>
        <span className="text-[11px] text-[var(--slate)]">
          {industry}
        </span>
      </div>
    </div>
  );
}
