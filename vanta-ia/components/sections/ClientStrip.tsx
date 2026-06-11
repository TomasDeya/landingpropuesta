import LogoPill from "@/components/ui/LogoPill";
import { clientes } from "@/content/copy";

// Duplicado para loop continuo y sin costura.
const row = [...clientes.items, ...clientes.items];

const MASK = "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)";

/**
 * Dos tiras de logos de clientes que se mueven en sentidos opuestos.
 * Bordes difuminados con mask (se integra sobre cualquier fondo).
 */
export default function ClientStrip() {
  return (
    <div
      className="marquee-track relative overflow-hidden"
      style={{ maskImage: MASK, WebkitMaskImage: MASK }}
    >
      {/* Fila 1 */}
      <div className="mb-3 flex gap-3">
        <div className="flex shrink-0 gap-3 animate-marquee-left">
          {row.map((item, i) => (
            <LogoPill
              key={`a-${i}`}
              initials={item.initials}
              name={item.name}
              industry={item.industry}
              color={item.color}
              logo={item.logo}
            />
          ))}
        </div>
      </div>

      {/* Fila 2 */}
      <div className="flex gap-3">
        <div className="flex shrink-0 gap-3 animate-marquee-right">
          {row.map((item, i) => (
            <LogoPill
              key={`b-${i}`}
              initials={item.initials}
              name={item.name}
              industry={item.industry}
              color={item.color}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
