import Image from "next/image";
import { campanas, tarjetas } from "@/lib/campanas";
import { enlaceWhatsApp } from "@/lib/configuracion";

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

  return (
    <article className="group mx-auto w-[90%] min-w-0 overflow-hidden rounded-[24px] border border-brand-border bg-white shadow-card-soft transition-shadow hover:shadow-card-hover">
      <h3 id={`titulo-${id}`} className="sr-only">{campana.title}</h3>
      <button
        type="button"
        onClick={() => abrir(id)}
        aria-label={`Ver detalles de ${campana.title}`}
        className="block w-full cursor-pointer overflow-hidden bg-[#dde6f1] text-left"
      >
        <Image
          src={`/campanas/${id}.png`}
          alt={`${campana.title}. ${tarjeta.benefit}. Promoción sujeta a condiciones; consulta requisitos y vigencia.`}
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 90vw"
          unoptimized
          className="aspect-square h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
        />
      </button>
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">
        <button
          type="button"
          onClick={() => abrir(id)}
          aria-label={`Ver detalles de ${campana.title}`}
          className="rounded-xl bg-brand-fuchsia px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-fuchsia-dark"
        >
          Ver detalles →
        </button>
        <a
          href={enlaceWhatsApp(encodeURIComponent(`Hola Elsa, quiero orientación sobre ${campana.title}.`))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar con Elsa sobre ${campana.title}`}
          className="rounded-xl border border-brand-border px-4 py-3 text-center text-sm font-bold transition-colors hover:border-brand-fuchsia hover:text-brand-fuchsia"
        >
          Consultar con Elsa
        </a>
      </div>
    </article>
  );
}
