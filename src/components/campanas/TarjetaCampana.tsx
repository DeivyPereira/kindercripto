import { campanas, tarjetas } from "@/lib/campanas";
import { enlaceWhatsApp } from "@/lib/configuracion";
const niveles: Record<string, string> = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};
const requisitos: Record<string, string> = {
  "sin-deposito": "Sin depósito",
  "con-deposito": "Con depósito",
  trading: "Operaciones",
};
export function TarjetaCampana({
  id,
  abrir,
}: {
  id: string;
  abrir: (id: string) => void;
}) {
  const tarjeta = tarjetas.find((item) => item.id === id);
  const campana = campanas[id];
  if (!tarjeta || !campana) return null;
  const destacada = id === "mexc-100-gratis";
  return (
    <article
      className={`group bg-white rounded-[20px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:border-brand-fuchsia ${destacada ? "border-2 border-brand-fuchsia/30 shadow-card-hover" : "border border-brand-border shadow-card-soft"}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-black text-blue-700 text-xs">
              MEXC
            </div>
            <div>
              <span className="text-xs font-bold block">MEXC</span>
              <span className="text-[10px] text-brand-muted">
                {destacada ? "Promoción de bienvenida" : "Campaña promocional"}
              </span>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${destacada ? "bg-brand-fuchsia text-white" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
          >
            {destacada ? "Destacada" : "Consultar vigencia"}
          </span>
        </div>
        <h3 className="text-lg font-extrabold group-hover:text-brand-fuchsia transition mb-2">
          {campana.title}
        </h3>
        <p className="text-xs text-brand-muted leading-relaxed mb-4">
          {tarjeta.desc}
        </p>
        <div className="space-y-2.5 pt-3 border-t border-brand-border/70 text-xs mb-6">
          <div className="flex items-start gap-2 bg-brand-gold-subtle p-2.5 rounded-xl border border-brand-gold/25">
            <span aria-hidden="true">🎁</span>
            <div>
              <span className="text-[10px] font-bold uppercase text-gray-500 block">
                Recompensa promocional
              </span>
              <span className="font-bold text-xs">{tarjeta.benefit}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2 px-1 text-gray-600">
            <span>
              Nivel: <strong>{niveles[tarjeta.level]}</strong>
            </span>
            <span>
              Requisito: <strong>{requisitos[tarjeta.req]}</strong>
            </span>
          </div>
          <p className="text-[11px] text-gray-500 px-1">
            Plazo indicado: <strong>{tarjeta.deadline}</strong>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          onClick={() => abrir(id)}
          className="py-2.5 px-3 rounded-xl bg-brand-fuchsia text-white font-bold text-xs hover:bg-brand-fuchsia-dark transition"
        >
          Ver detalles →
        </button>
        <a
          href={enlaceWhatsApp(
            encodeURIComponent(
              `Hola Elsa, quiero orientación sobre ${campana.title}.`,
            ),
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-xl border border-brand-border font-bold text-xs hover:border-brand-fuchsia hover:text-brand-fuchsia transition text-center"
        >
          Consultar con Elsa
        </a>
      </div>
    </article>
  );
}
