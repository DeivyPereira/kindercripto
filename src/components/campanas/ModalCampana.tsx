"use client";
import { useEffect, useRef } from "react";
import { campanas } from "@/lib/campanas";
import { enlaceWhatsApp } from "@/lib/configuracion";
export function ModalCampana({
  id,
  cerrar,
}: {
  id: string;
  cerrar: () => void;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const campana = campanas[id];
  useEffect(() => {
    const elemento = dialogo.current;
    const foco = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    elemento?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      elemento?.close();
      document.body.style.overflow = overflow;
      foco?.focus();
    };
  }, []);
  if (!campana) return null;
  return (
    <dialog
      ref={dialogo}
      onCancel={cerrar}
      onClick={(e) => {
        if (e.target === e.currentTarget) cerrar();
      }}
      aria-labelledby="titulo-campana"
      className="w-[calc(100%_-_2rem)] max-w-3xl max-h-[90vh] rounded-3xl p-0 shadow-modal backdrop:bg-brand-dark/75 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-brand-fuchsia text-sm font-bold">
              {campana.exchange}
            </span>
            <h2 id="titulo-campana" className="text-2xl font-extrabold mt-2">
              {campana.title}
            </h2>
          </div>
          <button
            onClick={cerrar}
            autoFocus
            aria-label="Cerrar detalles"
            className="rounded-xl bg-gray-100 p-3"
          >
            ✕
          </button>
        </div>
        <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          Confirma la vigencia, disponibilidad y condiciones en la plataforma
          oficial antes de participar. Las cifras y plazos son los indicados en
          el diseño de referencia.
        </p>
        <p className="text-brand-muted leading-relaxed">{campana.summary}</p>
        <div>
          <h3 className="font-bold mb-2">Beneficio promocional</h3>
          <p>{campana.benefit}</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Requisitos de participación</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-muted">
            {campana.reqs.map((requisito) => (
              <li key={requisito}>{requisito}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-brand-muted">
          Las recompensas están sujetas a condiciones y no están garantizadas.
          KinderCripto es una iniciativa educativa independiente.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="bg-brand-fuchsia text-white px-5 py-3 rounded-full font-bold text-sm"
            href={enlaceWhatsApp(
              encodeURIComponent(
                `Hola Elsa, quiero orientación sobre ${campana.title}.`,
              ),
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar con Elsa
          </a>
          <a
            className="border border-brand-border px-5 py-3 rounded-full font-bold text-sm"
            href={campana.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar plataforma oficial ↗
          </a>
        </div>
      </div>
    </dialog>
  );
}
